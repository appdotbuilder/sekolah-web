import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Teacher {
    id: number;
    name: string;
    nip: string;
    subject: string;
    education: string;
    biography: string | null;
    photo_url: string | null;
    email: string | null;
    phone: string | null;
    teaching_experience: number;
    specializations: string[] | null;
}

interface Props {
    teacher: Teacher;
    relatedTeachers: Teacher[];
    [key: string]: unknown;
}

export default function TeacherShow({ teacher, relatedTeachers }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-blue-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🏫</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-blue-900">SMA Negeri 1 Harapan</h1>
                                <p className="text-sm text-blue-600">Profil Guru</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                                🏠 Beranda
                            </Link>
                            <Link href="/teachers" className="text-blue-700 hover:text-blue-900 font-medium">
                                👨‍🏫 Semua Guru
                            </Link>
                            <Link href="/announcements" className="text-blue-700 hover:text-blue-900 font-medium">
                                📢 Pengumuman
                            </Link>
                            <Link href="/gallery" className="text-blue-700 hover:text-blue-900 font-medium">
                                📸 Galeri
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <section className="py-4 px-4 bg-blue-100">
                <div className="container mx-auto">
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                        <Link href="/" className="hover:text-blue-900">🏠 Beranda</Link>
                        <span>›</span>
                        <Link href="/teachers" className="hover:text-blue-900">👨‍🏫 Profil Guru</Link>
                        <span>›</span>
                        <span className="text-blue-900 font-medium">{teacher.name}</span>
                    </div>
                </div>
            </section>

            {/* Main Profile */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Photo Section */}
                            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600">
                                <div className="p-8 text-center">
                                    <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                        <img 
                                            src={teacher.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'} 
                                            alt={teacher.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{teacher.name}</h2>
                                    <p className="text-blue-100 mb-4">{teacher.subject}</p>
                                    <div className="bg-white/20 backdrop-blur rounded-lg p-3 text-white text-sm">
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="mr-2">⏱️</span>
                                            <span>{teacher.teaching_experience} tahun mengajar</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className="mr-2">🆔</span>
                                            <span>NIP: {teacher.nip}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="md:w-2/3 p-8">
                                {/* Biography */}
                                {teacher.biography && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                            <span className="mr-2">👤</span>
                                            Profil Singkat
                                        </h3>
                                        <p className="text-blue-800 leading-relaxed">
                                            {teacher.biography}
                                        </p>
                                    </div>
                                )}

                                {/* Education */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                        <span className="mr-2">🎓</span>
                                        Latar Belakang Pendidikan
                                    </h3>
                                    <p className="text-blue-800 leading-relaxed">
                                        {teacher.education}
                                    </p>
                                </div>

                                {/* Specializations */}
                                {teacher.specializations && teacher.specializations.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                            <span className="mr-2">⭐</span>
                                            Spesialisasi
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {teacher.specializations.map((specialization, index) => (
                                                <span 
                                                    key={index}
                                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {specialization}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Contact Info */}
                                {(teacher.email || teacher.phone) && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                            <span className="mr-2">📞</span>
                                            Informasi Kontak
                                        </h3>
                                        <div className="space-y-2">
                                            {teacher.email && (
                                                <div className="flex items-center">
                                                    <span className="text-blue-500 mr-3">✉️</span>
                                                    <a 
                                                        href={`mailto:${teacher.email}`}
                                                        className="text-blue-700 hover:text-blue-900 underline"
                                                    >
                                                        {teacher.email}
                                                    </a>
                                                </div>
                                            )}
                                            {teacher.phone && (
                                                <div className="flex items-center">
                                                    <span className="text-blue-500 mr-3">📱</span>
                                                    <a 
                                                        href={`tel:${teacher.phone}`}
                                                        className="text-blue-700 hover:text-blue-900 underline"
                                                    >
                                                        {teacher.phone}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                    <Link href="/teachers">
                                        <Button variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                                            👥 Lihat Semua Guru
                                        </Button>
                                    </Link>
                                    <Link href="/">
                                        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                                            🏠 Ke Beranda
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Teachers */}
            {relatedTeachers.length > 0 && (
                <section className="py-12 px-4 bg-blue-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                👥 Guru Lainnya
                            </h3>
                            <p className="text-blue-700">Tenaga pengajar profesional lainnya</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedTeachers.map((related) => (
                                <Link 
                                    key={related.id} 
                                    href={`/teachers/${related.id}`}
                                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow group"
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                                        <img 
                                            src={related.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'} 
                                            alt={related.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <h4 className="font-bold text-blue-900 mb-1 group-hover:text-blue-700">
                                        {related.name}
                                    </h4>
                                    <p className="text-blue-700 text-sm mb-2">{related.subject}</p>
                                    <p className="text-blue-500 text-xs">
                                        {related.teaching_experience} tahun mengajar
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}