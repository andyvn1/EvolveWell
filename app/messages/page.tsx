'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Send, MessageSquare } from 'lucide-react';
import { trainers } from '@/lib/data/trainers';
import { getUserMessages, addMessage, getCurrentUserId, markMessageAsRead } from '@/lib/utils/storage';
import { formatTime } from '@/lib/utils/format';

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [newMessage, setNewMessage] = useState('');
  const currentUserId = getCurrentUserId();

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    const allMessages = getUserMessages(currentUserId);
    setMessages(allMessages);
  };

  const getConversations = () => {
    const conversations = new Map();
    messages.forEach((msg) => {
      const otherUserId = msg.senderId === currentUserId ? msg.receiverId : msg.senderId;
      if (!conversations.has(otherUserId) || new Date(msg.timestamp) > new Date(conversations.get(otherUserId).timestamp)) {
        conversations.set(otherUserId, msg);
      }
    });
    return Array.from(conversations.entries());
  };

  const getConversationMessages = (userId: string) => {
    return messages
      .filter((msg) => 
        (msg.senderId === currentUserId && msg.receiverId === userId) ||
        (msg.senderId === userId && msg.receiverId === currentUserId)
      )
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUserId) return;

    addMessage({
      senderId: currentUserId,
      receiverId: selectedUserId,
      content: newMessage,
      read: false,
    });
    setNewMessage('');
    loadMessages();
  };

  const getUserInfo = (userId: string) => {
    // For demo purposes, map userIds to trainers
    const trainer = trainers.find((t) => t.id === userId);
    if (trainer) {
      return {
        id: trainer.id,
        name: trainer.name,
        imageUrl: trainer.imageUrl,
      };
    }
    return {
      id: userId,
      name: 'User ' + userId.slice(-4),
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    };
  };

  const conversations = getConversations();
  const selectedMessages = selectedUserId ? getConversationMessages(selectedUserId) : [];
  const selectedUser = selectedUserId ? getUserInfo(selectedUserId) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r overflow-y-auto">
            {conversations.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                <p>No messages yet</p>
                <p className="text-sm mt-2">Start a conversation with a trainer!</p>
              </div>
            )}
            {conversations.map(([userId, lastMsg]) => {
              const user = getUserInfo(userId);
              const isUnread = !lastMsg.read && lastMsg.receiverId === currentUserId;
              return (
                <button
                  key={userId}
                  onClick={() => setSelectedUserId(userId)}
                  className={`w-full p-4 flex items-start border-b hover:bg-gray-50 transition-colors ${
                    selectedUserId === userId ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    <Image src={user.imageUrl} alt={user.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-semibold ${isUnread ? 'text-blue-600' : 'text-gray-900'}`}>
                        {user.name}
                      </h3>
                      <span className="text-xs text-gray-500">{formatTime(lastMsg.timestamp)}</span>
                    </div>
                    <p className={`text-sm line-clamp-1 ${isUnread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                      {lastMsg.content}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Message Thread */}
          <div className="flex-1 flex flex-col">
            {selectedUser ? (
              <>
                {/* Header */}
                <div className="p-4 border-b flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image src={selectedUser.imageUrl} alt={selectedUser.name} fill className="object-cover" />
                  </div>
                  <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedMessages.map((msg) => {
                    const isOwn = msg.senderId === currentUserId;
                    return (
                      <div key={msg.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            isOwn
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p>{msg.content}</p>
                          <span className={`text-xs ${isOwn ? 'text-blue-100' : 'text-gray-500'} block mt-1`}>
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MessageSquare size={64} className="mx-auto mb-4 text-gray-300" />
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
