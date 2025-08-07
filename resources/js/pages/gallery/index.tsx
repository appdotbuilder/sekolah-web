import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface GalleryPhoto {
    id: number;
    title: string;
    description: string | null;
    photo_url: string;
    category: string;
    taken_at: string | null;
    is_featured: boolean;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    photos: {
        data: GalleryPhoto[];
        links: PaginationLink[];
        meta: {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
        };
    };
    categories: Record<string, string>;
    currentCategory: string;
    featuredPhotos: GalleryPhoto[];
    [key: string]: unknown;
}

export default function GalleryIndex({ photos, categories, currentCategory, featuredPhotos }: Props) {
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
                                <p className="text-sm text-blue-600">Galeri Foto</p>
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
                        📸 Galeri Foto Sekolah
                    </h2>
                    <p className="text-xl text-blue-700">
                        Dokumentasi kegiatan dan momen berharga di SMA Negeri 1 Harapan
                    </p>
                </div>
            </section>

            {/* Featured Photos */}
            {featuredPhotos.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">✨ Foto Unggulan</h3>
                            <p className="text-blue-700">Momen-momen terbaik dari kegiatan sekolah</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {featuredPhotos.map((photo) => (
                                <Link 
                                    key={photo.id} 
                                    href={`/gallery/${photo.id}`}
                                    className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <img 
                                        src={photo.photo_url} 
                                        alt={photo.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white text-sm font-medium line-clamp-2">{photo.title}</p>
                                            <div className="flex items-center mt-1">
                                                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                                                    ⭐ Unggulan
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className="py-8 px-4 bg-white border-b border-blue-100">
                <div className="container mx-auto">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">🏷️ Filter Kategori</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {Object.entries(categories).map(([key, label]) => (
                            <Link
                                key={key}
                                href={`/gallery${key !== 'all' ? `?category=${key}` : ''}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    currentCategory === key
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                            📷 {categories[currentCategory] || 'Semua Foto'}
                        </h3>
                        <p className="text-blue-700">
                            {photos.meta.total} foto tersedia
                        </p>
                    </div>

                    {photos.data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {photos.data.map((photo) => (
                                <Link 
                                    key={photo.id} 
                                    href={`/gallery/${photo.id}`}
                                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all bg-white"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img 
                                            src={photo.photo_url} 
                                            alt={photo.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                                photo.is_featured 
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-blue-100 text-blue-800'
                                            }`}>
                                                {photo.is_featured ? '⭐ Unggulan' : getCategoryEmoji(photo.category)}
                                            </span>
                                        </div>
                                        
                                        <h4 className="font-bold text-blue-900 mb-2 line-clamp-2 group-hover:text-blue-700">
                                            {photo.title}
                                        </h4>
                                        
                                        {photo.description && (
                                            <p className="text-blue-700 text-sm mb-3 line-clamp-2">
                                                {photo.description}
                                            </p>
                                        )}
                                        
                                        {photo.taken_at && (
                                            <p className="text-blue-500 text-xs">
                                                📅 {new Date(photo.taken_at).toLocaleDateString('id-ID')}
                                            </p>
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 pointer-events-none"></div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <span className="text-6xl mb-4 block">📷</span>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Belum Ada Foto</h3>
                            <p className="text-blue-700">Foto untuk kategori ini belum tersedia.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {photos.links && (
                        <div className="flex justify-center mt-12 space-x-2">
                            {photos.links.map((link: PaginationLink, index: number) => (
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

function getCategoryEmoji(category: string): string {
    const emojiMap: Record<string, string> = {
        'academic': '📚 Akademik',
        'sports': '⚽ Olahraga',
        'events': '🎉 Acara',
        'facilities': '🏢 Fasilitas',
        'general': '📸 Umum'
    };
    return emojiMap[category] || '📸 Umum';
}