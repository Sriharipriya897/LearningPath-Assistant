import React, { useState, useEffect, useRef } from 'react';
import { generateResponse } from '../services/aiService';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I am your AI Learning Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await generateResponse(input);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div className="chat-history" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container animate-fade-in`} style={{
                        display: 'flex',
                        justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            maxWidth: '80%',
                            padding: '15px 20px',
                            borderRadius: '16px',
                            backgroundColor: msg.role === 'user' ? 'var(--accent)' : 'rgba(30, 41, 59, 0.8)',
                            color: 'var(--text-primary)',
                            borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                            borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="message-container animate-fade-in" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ padding: '15px 20px', background: 'rgba(30, 41, 59, 0.8)', borderRadius: '16px', borderBottomLeftRadius: '4px' }}>
                            <span style={{ animation: 'pulse 1.5s infinite' }}>Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} style={{
                padding: '20px',
                borderTop: '1px solid var(--card-border)',
                display: 'flex',
                gap: '10px',
                background: 'rgba(15, 23, 42, 0.5)'
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    style={{
                        flex: 1,
                        padding: '12px 20px',
                        borderRadius: '8px',
                        border: '1px solid var(--card-border)',
                        background: 'rgba(0, 0, 0, 0.2)',
                        color: 'white',
                        outline: 'none',
                        fontSize: '1rem'
                    }}
                />
                <button type="submit" className="btn-primary" disabled={loading}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatInterface;
