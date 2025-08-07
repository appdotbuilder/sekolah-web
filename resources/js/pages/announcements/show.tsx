import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Announcement {
    id: number;
    title: string;
    content: string;
    excerpt: string | null;
    published_at: string;
    is_featured: boolean;
}

interface Props {
    announcement: Announcement;
    relatedAnnouncements: Announcement[];
    [key: string]: unknown;
}

export default function AnnouncementShow({ announcement, relatedAnnouncements }: Props) {
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
                                <p className="text-sm text-blue-600">Detail Pengumuman</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                                🏠 Beranda
                            </Link>
                            <Link href="/announcements" className="text-blue-700 hover:text-blue-900 font-medium">
                                📢 Pengumuman
                            </Link>
                            <Link href="/teachers" className="text-blue-700 hover:text-blue-900 font-medium">
                                👨‍🏫 Profil Guru
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
                        <Link href="/announcements" className="hover:text-blue-900">📢 Pengumuman</Link>
                        <span>›</span>
                        <span className="text-blue-900 font-medium">Detail</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <article className="bg-white rounded-lg shadow-lg p-8">
                        {/* Article Header */}
                        <header className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-3">📌</span>
                                {announcement.is_featured && (
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                        ⭐ UNGGULAN
                                    </span>
                                )}
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    📢 Pengumuman
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold text-blue-900 mb-4 leading-tight">
                                {announcement.title}
                            </h1>
                            <div className="flex items-center text-blue-600 text-sm">
                                <span className="mr-4">📅 Dipublikasikan pada {
                                    new Date(announcement.published_at).toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                                }</span>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-blue-800 leading-relaxed whitespace-pre-wrap">
                                {announcement.content}
                            </div>
                        </div>

                        {/* Article Footer */}
                        <footer className="mt-8 pt-6 border-t border-blue-100">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="mb-4 sm:mb-0">
                                    <p className="text-blue-600 text-sm">
                                        📍 SMA Negeri 1 Harapan - Tim Humas
                                    </p>
                                </div>
                                <div className="flex space-x-4">
                                    <Link href="/announcements">
                                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                            📋 Lihat Semua Pengumuman
                                        </Button>
                                    </Link>
                                    <Link href="/">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            🏠 Ke Beranda
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </footer>
                    </article>
                </div>
            </section>

            {/* Related Announcements */}
            {relatedAnnouncements.length > 0 && (
                <section className="py-12 px-4 bg-blue-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                📰 Pengumuman Lainnya
                            </h3>
                            <p className="text-blue-700">Informasi terbaru yang mungkin Anda minati</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedAnnouncements.map((related) => (
                                <Link 
                                    key={related.id} 
                                    href={`/announcements/${related.id}`}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="flex items-center mb-3">
                                        <span className="text-lg mr-2">📄</span>
                                        {related.is_featured && (
                                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                                                ⭐
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-blue-700">
                                        {related.title}
                                    </h4>
                                    <p className="text-blue-700 text-sm mb-4 line-clamp-3">
                                        {related.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-blue-500 text-xs">
                                            {new Date(related.published_at).toLocaleDateString('id-ID')}
                                        </p>
                                        <span className="text-blue-600 text-sm group-hover:text-blue-800">
                                            Baca →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}