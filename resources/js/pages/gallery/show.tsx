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

interface Props {
    photo: GalleryPhoto;
    relatedPhotos: GalleryPhoto[];
    [key: string]: unknown;
}

export default function GalleryShow({ photo, relatedPhotos }: Props) {
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
                                <p className="text-sm text-blue-600">Detail Foto</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                                🏠 Beranda
                            </Link>
                            <Link href="/gallery" className="text-blue-700 hover:text-blue-900 font-medium">
                                📸 Galeri
                            </Link>
                            <Link href="/announcements" className="text-blue-700 hover:text-blue-900 font-medium">
                                📢 Pengumuman
                            </Link>
                            <Link href="/teachers" className="text-blue-700 hover:text-blue-900 font-medium">
                                👨‍🏫 Profil Guru
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
                        <Link href="/gallery" className="hover:text-blue-900">📸 Galeri</Link>
                        <span>›</span>
                        <span className="text-blue-900 font-medium">Detail Foto</span>
                    </div>
                </div>
            </section>

            {/* Main Photo */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Photo Header */}
                        <div className="p-6 border-b border-blue-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">📸</span>
                                    {photo.is_featured && (
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                            ⭐ Foto Unggulan
                                        </span>
                                    )}
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {getCategoryLabel(photo.category)}
                                    </span>
                                </div>
                                <div className="text-blue-600 text-sm">
                                    {photo.taken_at && (
                                        <span>📅 {new Date(photo.taken_at).toLocaleDateString('id-ID')}</span>
                                    )}
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-blue-900 mb-2">{photo.title}</h1>
                            {photo.description && (
                                <p className="text-blue-700 text-lg">{photo.description}</p>
                            )}
                        </div>

                        {/* Photo Display */}
                        <div className="relative">
                            <img 
                                src={photo.photo_url} 
                                alt={photo.title}
                                className="w-full h-auto max-h-96 object-contain bg-blue-50"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>

                        {/* Photo Actions */}
                        <div className="p-6 bg-blue-50">
                            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                                <div className="text-blue-700 text-sm">
                                    <p>📍 Dokumentasi kegiatan SMA Negeri 1 Harapan</p>
                                </div>
                                <div className="flex space-x-4">
                                    <Link href="/gallery">
                                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                            🖼️ Lihat Semua Foto
                                        </Button>
                                    </Link>
                                    <Link href="/">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            🏠 Ke Beranda
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Photos */}
            {relatedPhotos.length > 0 && (
                <section className="py-12 px-4 bg-blue-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                📷 Foto Terkait
                            </h3>
                            <p className="text-blue-700">Foto lainnya yang mungkin menarik untuk Anda</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {relatedPhotos.map((related) => (
                                <Link 
                                    key={related.id} 
                                    href={`/gallery/${related.id}`}
                                    className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <img 
                                        src={related.photo_url} 
                                        alt={related.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white text-sm font-medium line-clamp-2">{related.title}</p>
                                            {related.is_featured && (
                                                <div className="flex items-center mt-1">
                                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
                                                        ⭐
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center mt-8">
                            <Link href="/gallery">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    📸 Jelajahi Semua Foto
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Photo Info Box */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-3">ℹ️</span>
                            <h4 className="text-lg font-bold text-blue-900">Informasi Foto</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <p className="text-blue-600 font-medium mb-1">📂 Kategori:</p>
                                <p className="text-blue-800">{getCategoryLabel(photo.category)}</p>
                            </div>
                            {photo.taken_at && (
                                <div>
                                    <p className="text-blue-600 font-medium mb-1">📅 Tanggal:</p>
                                    <p className="text-blue-800">
                                        {new Date(photo.taken_at).toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            )}
                            <div>
                                <p className="text-blue-600 font-medium mb-1">🏫 Lokasi:</p>
                                <p className="text-blue-800">SMA Negeri 1 Harapan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function getCategoryLabel(category: string): string {
    const categoryMap: Record<string, string> = {
        'academic': '📚 Akademik',
        'sports': '⚽ Olahraga', 
        'events': '🎉 Acara',
        'facilities': '🏢 Fasilitas',
        'general': '📸 Umum'
    };
    return categoryMap[category] || '📸 Umum';
}