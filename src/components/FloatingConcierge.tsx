import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'ai' | 'user' | 'system';
  text: string;
}

export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState('');
  const [handoffState, setHandoffState] = useState<'normal' | 'asking_email' | 'waiting_queue'>('normal');
  const [userEmail, setUserEmail] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: '👋 مرحباً بك في كيان AI! أنا مستشارك الذكي لاستكشاف منصتنا السيادية. اسألني أو اختر أحد الخيارات أدناه:',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      // إذا كنا في مرحلة طلب الإيميل
      if (handoffState === 'asking_email') {
        setUserEmail(text);
        setHandoffState('waiting_queue');
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'system',
            text: `شكراً لك! تم حفظ بريدك (${text}). فريق المبيعات والدعم في كيان AI يساعد عملاء آخرين الآن، وسيتواصل معك الفريق عبر البريد الإلكتروني بمجرد توفر أحد المهندسين.`,
          },
        ]);
        setIsTyping(false);
        return;
      }

      const query = text.toLowerCase();

      // إذا طلب التحدث مع المبيعات
      if (query.includes('مبيعات') || query.includes('تحدث مع') || query.includes('بشري')) {
        setHandoffState('asking_email');
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: 'لحظة واحدة من فضلك. في حال انقطاع الاتصال أثناء تحويلك لفريق المبيعات، ما هو بريدك الإلكتروني ليتواصل معك الفريق لاحقاً؟',
          },
        ]);
        setIsTyping(false);
        return;
      }

      // ردود الذكاء الاصطناعي حسب الخيارات أو الأسئلة
      let replyText = '';
      if (query.includes('عرض تقني') || query.includes('ديمو')) {
        replyText = 'يسعدنا جداً ترتيب عرض تقني مخصص لجهتكم. يرجى تزويدنا برقم الاتصال أو طلب التحدث مع المبيعات وسيقوم المهندس المختص بالتواصل معك فوراً.';
      } else if (query.includes('قدرات النظام') || query.includes('مميزات')) {
        replyText = 'منصة "كيان AI" تتميز بالسيادة الرقمية الكاملة، استضافة محلية 100% داخل المملكة، معالجة ذكية وعالية الأمان للمستندات الحكومية والمؤسسية.';
      } else if (query.includes('بدء الاستخدام') || query.includes('التجريبي')) {
        replyText = 'يمكنك البدء بطلب النسخة التجريبية للمؤسسات عبر التواصل المباشر مع قسم المبيعات لدينا لإعداد البيئة الخاصة بك.';
      } else {
        replyText = 'سؤال رائع! أنا هنا للإجابة عن تفاصيل منصة كيان AI على مدار الساعة. هل ترغب في توجيه سؤال آخر أو الانتقال لفريق المبيعات؟';
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: replyText },
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* فقاعة الترحيب الذكية */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-[#1c1c1c] border border-gold-400/40 px-4 py-3 rounded-2xl shadow-2xl text-white text-xs max-w-[220px]"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-gold-400">مستشار كيان الذكي</span>
              <button 
                onClick={() => setShowPrompt(false)}
                className="text-neutral-400 hover:text-white text-base leading-none cursor-pointer"
              >
                ×
              </button>
            </div>
            <p className="text-neutral-300">أهلاً بك! اسألني عن المنصة أو اختر خيارات التوجيه السريع.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر المحادثة الرئيسي */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPrompt(false);
        }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-yellow-600 shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center border border-gold-300 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-25 pointer-events-none" />
        <svg className="w-7 h-7 text-neutral-950 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* نافذة المحادثة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[390px] h-[520px] bg-[#121212] border border-gold-400/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50"
          >
            {/* رأس النافذة */}
            <div className="flex items-center justify-between px-5 py-4 bg-neutral-900 border-b border-gold-400/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h3 className="text-white text-sm font-bold">مستشار كيان (AI)</h3>
                  <p className="text-[10px] text-neutral-400">مدعوم بالذكاء الاصطناعي السيادي</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* عرض البريد المحفوظ أعلى الشات */}
            {userEmail && (
              <div className="bg-neutral-800/90 border-b border-gold-400/10 px-4 py-1.5 flex items-center justify-between text-[11px] text-neutral-300">
                <span>البريد المسجل: <strong className="text-gold-400">{userEmail}</strong></span>
                <span className="text-emerald-400 text-[10px]">● مسجل في الطابور</span>
              </div>
            )}

            {/* صندوق الرسائل */}
            <div className="flex-1 p-4 bg-[#0a0a0a] overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gold-500 text-neutral-950 font-medium rounded-br-none'
                        : msg.sender === 'system'
                        ? 'bg-blue-950/80 border border-blue-400/30 text-blue-200 rounded-bl-none'
                        : 'bg-neutral-900 border border-gold-400/20 text-neutral-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* أزرار الخيارات السريعة شبيهة بـ HubSpot */}
              {messages.length === 1 && handoffState === 'normal' && (
                <div className="grid grid-cols-2 gap-2 my-2">
                  <button
                    onClick={() => handleSendMessage('طلب عرض تقني')}
                    className="bg-neutral-900 hover:bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] py-2.5 px-3 rounded-xl text-right transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>📅</span> طلب عرض تقني
                  </button>
                  <button
                    onClick={() => handleSendMessage('قدرات النظام السيادي')}
                    className="bg-neutral-900 hover:bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] py-2.5 px-3 rounded-xl text-right transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>💡</span> قدرات النظام
                  </button>
                  <button
                    onClick={() => handleSendMessage('بدء الاستخدام التجريبي')}
                    className="bg-neutral-900 hover:bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] py-2.5 px-3 rounded-xl text-right transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>🚀</span> بدء التجربة
                  </button>
                  <button
                    onClick={() => handleSendMessage('التحدث مع فريق المبيعات')}
                    className="bg-neutral-900 hover:bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[11px] py-2.5 px-3 rounded-xl text-right transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>💬</span> محادثة المبيعات
                  </button>
                </div>
              )}

              {/* زر العودة للذكاء الاصطناعي في حال طابور الانتظار */}
              {handoffState === 'waiting_queue' && (
                <div className="my-2">
                  <button
                    onClick={() => {
                      setHandoffState('normal');
                      handleSendMessage('ما هي مميزات المنصة؟');
                    }}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-gold-300 font-medium px-4 py-2.5 rounded-xl text-xs text-center transition-all cursor-pointer border border-gold-400/20"
                  >
                    🤖 العودة لاستكشاف المنصة بالذكاء الاصطناعي
                  </button>
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900 border border-gold-400/20 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* شريط الإرسال */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="p-3 bg-neutral-900 border-t border-gold-400/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={handoffState === 'asking_email' ? "اكتب بريدك الإلكتروني هنا..." : "اسأل الذكاء الاصطناعي أو اختر خياراً..."}
                className="flex-1 bg-[#0a0a0a] border border-gold-400/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-400 text-neutral-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                إرسال
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
