'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: number;
  isUser: boolean;
}

const mockConversations = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    avatar: '👩‍🏫',
    lastMessage: "Great form on those deadlifts! Let's increase the weight next week.",
    timestamp: Date.now() - 3600000,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    avatar: '🧘',
    lastMessage: "Looking forward to your session tomorrow at 7 PM!",
    timestamp: Date.now() - 86400000,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0].id);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Sarah Mitchell',
      content: "Great form on those deadlifts! Let's increase the weight next week.",
      timestamp: Date.now() - 3600000,
      isUser: false,
    },
    {
      id: '2',
      sender: 'You',
      content: 'Thanks Sarah! I felt really strong today.',
      timestamp: Date.now() - 3000000,
      isUser: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: String(Date.now()),
      sender: 'You',
      content: newMessage,
      timestamp: Date.now(),
      isUser: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate trainer response
    setTimeout(() => {
      const response: Message = {
        id: String(Date.now()),
        sender: 'Sarah Mitchell',
        content: 'Awesome! Keep up the great work 💪',
        timestamp: Date.now(),
        isUser: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const currentConversation = mockConversations.find((c) => c.id === selectedConversation);

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid h-screen gap-0 sm:gap-4 sm:grid-cols-3">
            {/* Conversation List */}
            <div className="hidden border-r border-gray-200 bg-white sm:block">
              <div className="border-b border-gray-200 p-4">
                <h1 className="font-bold text-gray-900">Messages</h1>
              </div>

              <div className="overflow-y-auto">
                {mockConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full border-l-4 px-4 py-4 text-left transition-colors ${
                      selectedConversation === conv.id
                        ? 'border-l-blue-600 bg-blue-50'
                        : 'border-l-transparent hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{conv.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{conv.name}</p>
                        <p className="truncate text-sm text-gray-600">{conv.lastMessage}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-1 sm:col-span-2 flex flex-col bg-white sm:rounded-lg">
              {/* Header */}
              <div className="border-b border-gray-200 p-4 sm:rounded-t-lg">
                <h2 className="font-bold text-gray-900">{currentConversation?.name}</h2>
                <p className="text-sm text-gray-600">
                  Last message{' '}
                  {new Date(currentConversation?.timestamp || 0).toLocaleDateString()}
                </p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.isUser
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isUser ? 'text-blue-100' : 'text-gray-600'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4 sm:rounded-b-lg">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
