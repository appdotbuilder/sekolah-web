import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Teacher {
    id: number;
    name: string;
    subject: string;
    education: string;
    photo_url: string | null;
    teaching_experience: number;
    biography: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    teachers: {
        data: Teacher[];
        links: PaginationLink[];
        meta: {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
        };
    };
    subjects: string[];
    [key: string]: unknown;
}

export default function TeachersIndex({ teachers, subjects }: Props) {
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
                            <Link href="/announcements" className="text-blue-700 hover:text-blue-900 font-medium">
                                📢 Pengumuman
                            </Link>
                            <Link href="/gallery" className="text-blue-700 hover:text-blue-900 font-medium">
                                📸 Galeri
                            </Link>
                            <Link href="/admissions" className="text-blue-700 hover:text-blue-900 font-medium">
                                🎓 PPDB
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Page Header */}
            <section className="py-12 px-4 bg-blue-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        👨‍🏫 Profil Guru Berpengalaman
                    </h2>
                    <p className="text-xl text-blue-700">
                        Tenaga pengajar profesional dengan dedikasi tinggi untuk pendidikan berkualitas
                    </p>
                </div>
            </section>

            {/* Subject Filter */}
            {subjects.length > 0 && (
                <section className="py-8 px-4 bg-white border-b border-blue-100">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="text-blue-700 font-medium mr-4">Filter berdasarkan mata pelajaran:</span>
                            {subjects.map((subject) => (
                                <span key={subject} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    📚 {subject}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Teachers Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    {teachers.data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {teachers.data.map((teacher) => (
                                <Link 
                                    key={teacher.id} 
                                    href={`/teachers/${teacher.id}`}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
                                >
                                    {/* Teacher Photo */}
                                    <div className="aspect-square overflow-hidden bg-blue-100">
                                        <img 
                                            src={teacher.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'} 
                                            alt={teacher.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* Teacher Info */}
                                    <div className="p-6">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                                                {teacher.name}
                                            </h3>
                                            <div className="flex items-center justify-center mb-2">
                                                <span className="text-blue-500 text-sm mr-2">📖</span>
                                                <p className="text-blue-700 font-medium">{teacher.subject}</p>
                                            </div>
                                            <div className="flex items-center justify-center text-blue-600 text-sm">
                                                <span className="mr-2">⏱️</span>
                                                <span>{teacher.teaching_experience} tahun mengajar</span>
                                            </div>
                                        </div>
                                        
                                        {/* Education */}
                                        <div className="mb-4">
                                            <div className="flex items-center mb-2">
                                                <span className="text-blue-500 text-sm mr-2">🎓</span>
                                                <p className="text-blue-600 text-sm font-medium">Pendidikan:</p>
                                            </div>
                                            <p className="text-blue-700 text-xs line-clamp-2 ml-6">
                                                {teacher.education}
                                            </p>
                                        </div>

                                        {/* Biography Preview */}
                                        {teacher.biography && (
                                            <div className="mb-4">
                                                <p className="text-blue-700 text-sm line-clamp-3">
                                                    {teacher.biography}
                                                </p>
                                            </div>
                                        )}

                                        {/* View Profile Button */}
                                        <div className="text-center">
                                            <span className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-medium text-sm">
                                                👤 Lihat Profil Lengkap →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <span className="text-6xl mb-4 block">👨‍🏫</span>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Data Guru Tidak Ditemukan</h3>
                            <p className="text-blue-700">Mohon maaf, saat ini belum ada data guru yang tersedia.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {teachers.links && (
                        <div className="flex justify-center mt-12 space-x-2">
                            {teachers.links.map((link: PaginationLink, index: number) => (
                                link.url && (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-4 py-2 rounded-lg border ${
                                            link.active
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 bg-blue-100">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                            📊 Statistik Tenaga Pengajar
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">👥</span>
                            </div>
                            <h4 className="text-2xl font-bold text-blue-900 mb-2">{teachers.meta?.total || 0}</h4>
                            <p className="text-blue-700">Total Guru Aktif</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">📚</span>
                            </div>
                            <h4 className="text-2xl font-bold text-blue-900 mb-2">{subjects.length}</h4>
                            <p className="text-blue-700">Mata Pelajaran</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">⭐</span>
                            </div>
                            <h4 className="text-2xl font-bold text-blue-900 mb-2">15+</h4>
                            <p className="text-blue-700">Rata-rata Pengalaman (Tahun)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-8 px-4 bg-blue-50">
                <div className="container mx-auto text-center">
                    <Link href="/">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            🏠 Kembali ke Beranda
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}