'use client'

import React, { useState } from 'react'
import { Search, MoreVertical, Send, Paperclip, Smile } from 'lucide-react'

interface Chat {
  id: number
  name: string
  lastChat: string
  time: string
  unread: number
  avatar: string
  online: boolean
}

interface Message {
  id: number
  sender: 'me' | 'other'
  text: string
  time: string
}

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [chatInput, setChatInput] = useState('')

  const chatList: Chat[] = [
    {
      id: 1,
      name: 'Budi Santoso',
      lastChat: 'Baik, kita mulai kelas besok jam 10 pagi ya',
      time: '10:30',
      unread: 2,
      avatar: '🎸',
      online: true,
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      lastChat: 'Jangan lupa bawa materi yang sudah saya kirim',
      time: '09:15',
      unread: 0,
      avatar: '📖',
      online: true,
    },
    {
      id: 3,
      name: 'Andi Prasetyo',
      lastChat: 'Kamu sudah coba install VS Code?',
      time: 'Kemarin',
      unread: 1,
      avatar: '👨‍💻',
      online: false,
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      lastChat: 'Jangan lupa bawa matras ya untuk kelas besok',
      time: 'Kemarin',
      unread: 0,
      avatar: '🧘‍♀️',
      online: false,
    },
  ]

  const messages: Message[] = [
    {
      id: 1,
      sender: 'other',
      text: 'Halo! Bagaimana kabarnya?',
      time: '10:20',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Baik pak, terima kasih. Saya sudah siap untuk kelas besok',
      time: '10:25',
    },
    {
      id: 3,
      sender: 'other',
      text: 'Baik, kita mulai kelas besok jam 10 pagi ya',
      time: '10:30',
    },
  ]

  const selectedChatData = chatList.find((c) => c.id === selectedChat)

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-20">
      {!selectedChat ? (
        // Chat List
        <div className="w-full">
          {/* Header */}
          <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pesan</h1>

            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Cari pesan atau tutor..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="px-5 py-4">
            {chatList.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all mb-2">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-2xl">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {chat.lastChat}
                  </p>
                </div>

                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-semibold">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Chat Detail
        <div className="w-full h-screen flex flex-col">
          {/* Chat Header */}
          <div className="bg-white px-5 py-4 border-b border-gray-100 flex items-center gap-3">
            <button onClick={() => setSelectedChat(null)} className="p-2 -ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-xl">
                {selectedChatData?.avatar}
              </div>
              {selectedChatData?.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">
                {selectedChatData?.name}
              </h3>
              <p className="text-xs text-green-500">
                {selectedChatData?.online ? 'Online' : 'Offline'}
              </p>
            </div>

            <button className="p-2">
              <MoreVertical size={20} className="text-gray-600" />
            </button>
          </div>

          {/* chats */}
          <div className="flex-1 overflow-y-auto px-5 py-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-4 ${
                  msg.sender === 'me' ? 'justify-end' : 'justify-start'
                }`}>
                <div
                  className={`max-w-[70%] ${
                    msg.sender === 'me'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800'
                  } px-4 py-3 rounded-2xl shadow-sm`}>
                  <p className="text-sm">{msg.text}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      msg.sender === 'me' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <button className="p-2">
                <Paperclip size={20} className="text-gray-400" />
              </button>

              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 px-4 py-3 rounded-full bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
              />

              <button className="p-2">
                <Smile size={20} className="text-gray-400" />
              </button>

              <button className="p-3 bg-blue-500 rounded-full">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
