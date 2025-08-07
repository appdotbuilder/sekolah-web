import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Announcement {
    id: number;
    title: string;
    excerpt: string | null;
    content: string;
    published_at: string;
    is_featured: boolean;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    announcements: {
        data: Announcement[];
        links: PaginationLink[];
        meta: {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
        };
    };
    featuredAnnouncements: Announcement[];
    [key: string]: unknown;
}

export default function AnnouncementsIndex({ announcements, featuredAnnouncements }: Props) {
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
                                <p className="text-sm text-blue-600">Pengumuman Sekolah</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                                🏠 Beranda
                            </Link>
                            <Link href="/teachers" className="text-blue-700 hover:text-blue-900 font-medium">
                                👨‍🏫 Profil Guru
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
                        📢 Pengumuman Sekolah
                    </h2>
                    <p className="text-xl text-blue-700">
                        Informasi terbaru dan penting dari SMA Negeri 1 Harapan
                    </p>
                </div>
            </section>

            {/* Featured Announcements */}
            {featuredAnnouncements.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">✨ Pengumuman Unggulan</h3>
                            <p className="text-blue-700">Informasi penting yang perlu diperhatikan</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {featuredAnnouncements.map((announcement) => (
                                <div key={announcement.id} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-2">⭐</span>
                                        <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                            UNGGULAN
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 line-clamp-2">
                                        {announcement.title}
                                    </h4>
                                    <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                                        {announcement.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-blue-200 text-xs">
                                            {new Date(announcement.published_at).toLocaleDateString('id-ID')}
                                        </p>
                                        <Link 
                                            href={`/announcements/${announcement.id}`}
                                            className="text-white hover:text-blue-200 text-sm font-medium underline"
                                        >
                                            Baca Selengkapnya →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Announcements */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">📋 Semua Pengumuman</h3>
                        <p className="text-blue-700">Daftar lengkap pengumuman sekolah</p>
                    </div>

                    {announcements.data.length > 0 ? (
                        <div className="space-y-6">
                            {announcements.data.map((announcement) => (
                                <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                <span className="text-blue-500 text-lg mr-2">📌</span>
                                                <h4 className="text-xl font-bold text-blue-900 line-clamp-2">
                                                    {announcement.title}
                                                </h4>
                                                {announcement.is_featured && (
                                                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                                                        ⭐ UNGGULAN
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-blue-700 mb-4 line-clamp-3">
                                                {announcement.excerpt || announcement.content.substring(0, 200) + '...'}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-blue-500 text-sm">
                                                    📅 {new Date(announcement.published_at).toLocaleDateString('id-ID', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <Link 
                                                    href={`/announcements/${announcement.id}`}
                                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    Baca Selengkapnya →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <span className="text-6xl mb-4 block">📭</span>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Belum Ada Pengumuman</h3>
                            <p className="text-blue-700">Pengumuman akan muncul di sini ketika tersedia.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {announcements.links && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {announcements.links.map((link: PaginationLink, index: number) => (
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