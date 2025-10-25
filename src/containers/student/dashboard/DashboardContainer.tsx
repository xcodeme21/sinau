'use client';

import React, { useState } from 'react';
import { Calendar, Bell, CreditCard, MapPin, Star, Clock, Play, BookOpen } from 'lucide-react';

interface Teacher {
    id: number;
    name: string;
    subject: string;
    category: string;
    rating: number;
    reviews: number;
    price: string;
    location: string;
    experience: string;
    image: string;
    available: string;
    certified: boolean;
    bio: string;
}

interface Announcement {
    title: string;
    desc: string;
    time: string;
    category: string;
}

interface Category {
    id: string;
    name: string;
    icon: string;
}

export default function DashboardContainer() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories: Category[] = [
        { id: 'all', name: 'Semua', icon: '📚' },
        { id: 'music', name: 'Musik', icon: '🎵' },
        { id: 'language', name: 'Bahasa', icon: '💬' },
        { id: 'coding', name: 'Coding', icon: '💻' },
        { id: 'sports', name: 'Olahraga', icon: '⚽' },
        { id: 'art', name: 'Seni', icon: '🎨' }
    ];

    const teachers: Teacher[] = [
        {
            id: 1,
            name: 'Budi Santoso',
            subject: 'Gitar & Musik',
            category: 'music',
            rating: 4.9,
            reviews: 127,
            price: 'Rp 150.000/jam',
            location: 'Jakarta Selatan',
            experience: '8 tahun',
            image: '🎸',
            available: 'Senin, Rabu, Jumat',
            certified: true,
            bio: 'Guru musik profesional dengan spesialisasi gitar klasik dan modern'
        },
        {
            id: 2,
            name: 'Sarah Wijaya',
            subject: 'Bahasa Inggris',
            category: 'language',
            rating: 5.0,
            reviews: 203,
            price: 'Rp 200.000/jam',
            location: 'Jakarta Pusat',
            experience: '10 tahun',
            image: '📖',
            available: 'Setiap hari',
            certified: true,
            bio: 'Native speaker dengan sertifikasi TESOL dan IELTS'
        },
        {
            id: 3,
            name: 'Andi Prasetyo',
            subject: 'Web Development',
            category: 'coding',
            rating: 4.8,
            reviews: 89,
            price: 'Rp 250.000/jam',
            location: 'Online',
            experience: '6 tahun',
            image: '👨‍💻',
            available: 'Selasa, Kamis, Sabtu',
            certified: true,
            bio: 'Full-stack developer dengan pengalaman di startup teknologi'
        },
        {
            id: 4,
            name: 'Linda Kusuma',
            subject: 'Yoga & Fitness',
            category: 'sports',
            rating: 4.9,
            reviews: 156,
            price: 'Rp 175.000/sesi',
            location: 'Jakarta Barat',
            experience: '5 tahun',
            image: '🧘‍♀️',
            available: 'Senin-Jumat pagi',
            certified: true,
            bio: 'Instruktur yoga bersertifikat internasional (RYT-200)'
        }
    ];

    const announcements: Announcement[] = [
        {
            title: 'Guru Baru: Kelas Fotografi',
            desc: 'Instruktur profesional fotografi kini tersedia. Belajar dari basic hingga advanced!',
            time: '2 jam yang lalu',
            category: 'Seni'
        },
        {
            title: 'Promo Spesial 30%',
            desc: 'Dapatkan diskon untuk pembelian paket 10 sesi pelajaran',
            time: '5 jam yang lalu',
            category: 'Promo'
        }
    ];

    const filteredTeachers = selectedCategory === 'all'
        ? teachers
        : teachers.filter(t => t.category === selectedCategory);

    return (
        <div>
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 pt-8 pb-24 rounded-b-3xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-1">Sinau</h1>
                        <p className="text-emerald-100 text-sm">Belajar Tanpa Batas</p>
                    </div>
                    <button className="bg-white bg-opacity-20 p-2 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition">
                        <Bell size={24} />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-6 -mt-16 pb-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="grid grid-cols-3 gap-4">
                        <button className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition">
                            <div className="bg-blue-100 p-3 rounded-full mb-2">
                                <Calendar className="text-blue-600" size={24} />
                            </div>
                            <span className="text-xs font-medium text-gray-700">Kalender</span>
                        </button>
                        <button className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition">
                            <div className="bg-purple-100 p-3 rounded-full mb-2">
                                <CreditCard className="text-purple-600" size={24} />
                            </div>
                            <span className="text-xs font-medium text-gray-700">Pembayaran</span>
                        </button>
                        <button className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition">
                            <div className="bg-orange-100 p-3 rounded-full mb-2">
                                <BookOpen className="text-orange-600" size={24} />
                            </div>
                            <span className="text-xs font-medium text-gray-700">Kelas Saya</span>
                        </button>
                    </div>
                </div>

                {/* Announcements */}
                <div className="mb-6">
                    <div className="flex items-center mb-3">
                        <Bell size={20} className="text-gray-600 mr-2" />
                        <h2 className="text-lg font-bold text-gray-800">Update Terbaru</h2>
                    </div>
                    {announcements.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow p-4 mb-3">
                            <div className="flex items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{item.category}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                                    <p className="text-xs text-gray-400">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Categories */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">Kategori Pembelajaran</h2>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex flex-col items-center min-w-[80px] p-3 rounded-xl transition ${
                                    selectedCategory === cat.id
                                        ? 'bg-emerald-500 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <span className="text-2xl mb-1">{cat.icon}</span>
                                <span className="text-xs font-medium">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Teacher Marketplace */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-bold text-gray-800">Guru Terbaik</h2>
                        <button className="text-sm text-emerald-600 font-medium">Lihat Semua</button>
                    </div>

                    <div className="space-y-4">
                        {filteredTeachers.map(teacher => (
                            <div key={teacher.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-5">
                                    <div className="flex gap-4 mb-4">
                                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl w-20 h-20 flex items-center justify-center text-4xl flex-shrink-0">
                                            {teacher.image}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-1">
                                                <div>
                                                    <h3 className="font-bold text-gray-800 text-lg">{teacher.name}</h3>
                                                    <p className="text-emerald-600 text-sm font-medium">{teacher.subject}</p>
                                                </div>
                                                {teacher.certified && (
                                                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">✓ Verified</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex items-center">
                                                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                                    <span className="text-sm font-bold text-gray-800 ml-1">{teacher.rating}</span>
                                                    <span className="text-xs text-gray-500 ml-1">({teacher.reviews})</span>
                                                </div>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-xs text-gray-600">{teacher.experience}</span>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">{teacher.bio}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4 text-sm">
                                        <div className="flex items-center text-gray-600">
                                            <MapPin size={14} className="mr-1" />
                                            <span className="text-xs">{teacher.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Clock size={14} className="mr-1" />
                                            <span className="text-xs">{teacher.available}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Tarif</p>
                                            <p className="text-lg font-bold text-emerald-600">{teacher.price}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-200 transition flex items-center gap-1">
                                                <Play size={14} />
                                                Demo
                                            </button>
                                            <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
                                                Pesan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}