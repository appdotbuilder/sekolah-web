import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Announcement {
    id: number;
    title: string;
    excerpt: string | null;
    published_at: string;
    is_featured: boolean;
}

interface Teacher {
    id: number;
    name: string;
    subject: string;
    photo_url: string | null;
    teaching_experience: number;
}

interface GalleryPhoto {
    id: number;
    title: string;
    photo_url: string;
    category: string;
}

interface Admission {
    id: number;
    title: string;
    description: string;
    registration_start: string;
    registration_end: string;
    academic_year: string;
}

interface Props {
    featuredAnnouncements: Announcement[];
    latestAnnouncements: Announcement[];
    featuredPhotos: GalleryPhoto[];
    currentAdmission: Admission | null;
    featuredTeachers: Teacher[];
    [key: string]: unknown;
}

export default function Welcome({ 
    featuredAnnouncements, 
    featuredPhotos, 
    currentAdmission, 
    featuredTeachers 
}: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-blue-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🏫</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-blue-900">SMA Negeri 1 Harapan</h1>
                                <p className="text-sm text-blue-600">Unggul dalam Prestasi, Santun dalam Budi Pekerti</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/announcements" className="text-blue-700 hover:text-blue-900 font-medium">
                                📢 Pengumuman
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
                            <Link href="/login">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Masuk
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold text-blue-900 mb-6">
                        🌟 Selamat Datang di SMA Negeri 1 Harapan
                    </h2>
                    <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
                        Membentuk generasi unggul dengan pendidikan berkualitas, 
                        fasilitas modern, dan lingkungan pembelajaran yang inspiring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                                🎓 Daftar Sekarang
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                                📸 Lihat Galeri
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Current Admission */}
            {currentAdmission && (
                <section className="py-12 bg-blue-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                🎓 Penerimaan Peserta Didik Baru
                            </h3>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-blue-900 mb-4">{currentAdmission.title}</h4>
                                <p className="text-blue-700 mb-6">{currentAdmission.description}</p>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
                                    <div className="text-center">
                                        <p className="text-sm text-blue-600">Pendaftaran Dibuka</p>
                                        <p className="font-bold text-blue-900">
                                            {new Date(currentAdmission.registration_start).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                    <div className="hidden sm:block w-px h-8 bg-blue-300"></div>
                                    <div className="text-center">
                                        <p className="text-sm text-blue-600">Pendaftaran Ditutup</p>
                                        <p className="font-bold text-blue-900">
                                            {new Date(currentAdmission.registration_end).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                                <Link href={`/admissions/${currentAdmission.id}`}>
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                        📝 Informasi Lengkap
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Announcements */}
            {featuredAnnouncements.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                📢 Pengumuman Terbaru
                            </h3>
                            <p className="text-blue-700">Informasi terkini dari sekolah</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {featuredAnnouncements.map((announcement) => (
                                <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                    <h4 className="text-lg font-bold text-blue-900 mb-3 line-clamp-2">
                                        {announcement.title}
                                    </h4>
                                    <p className="text-blue-700 text-sm mb-4 line-clamp-3">
                                        {announcement.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-blue-500">
                                            {new Date(announcement.published_at).toLocaleDateString('id-ID')}
                                        </p>
                                        <Link 
                                            href={`/announcements/${announcement.id}`}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Baca Selengkapnya →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/announcements">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    📋 Lihat Semua Pengumuman
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Photos */}
            {featuredPhotos.length > 0 && (
                <section className="py-12 bg-blue-50 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                📸 Galeri Foto Sekolah
                            </h3>
                            <p className="text-blue-700">Momen-momen berharga di sekolah kami</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {featuredPhotos.map((photo) => (
                                <Link 
                                    key={photo.id} 
                                    href={`/gallery/${photo.id}`}
                                    className="group relative aspect-square overflow-hidden rounded-lg"
                                >
                                    <img 
                                        src={photo.photo_url} 
                                        alt={photo.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white text-sm font-medium line-clamp-2">{photo.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/gallery">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    🖼️ Lihat Semua Foto
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Teachers */}
            {featuredTeachers.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                👨‍🏫 Profil Guru Berpengalaman
                            </h3>
                            <p className="text-blue-700">Tenaga pengajar profesional dan berdedikasi</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredTeachers.map((teacher) => (
                                <Link 
                                    key={teacher.id} 
                                    href={`/teachers/${teacher.id}`}
                                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow group"
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                                        <img 
                                            src={teacher.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'} 
                                            alt={teacher.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <h4 className="font-bold text-blue-900 mb-1">{teacher.name}</h4>
                                    <p className="text-blue-700 text-sm mb-2">{teacher.subject}</p>
                                    <p className="text-blue-500 text-xs">
                                        {teacher.teaching_experience} tahun mengajar
                                    </p>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/teachers">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    👥 Lihat Semua Guru
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Key Features */}
            <section className="py-12 bg-blue-100 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">
                            ✨ Keunggulan Sekolah Kami
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🏆</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Prestasi Akademik</h4>
                            <p className="text-blue-700 text-sm">Siswa-siswi kami meraih berbagai prestasi di tingkat regional dan nasional</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🔬</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Fasilitas Modern</h4>
                            <p className="text-blue-700 text-sm">Laboratorium lengkap, perpustakaan digital, dan ruang kelas yang nyaman</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">👨‍🏫</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Guru Berkualitas</h4>
                            <p className="text-blue-700 text-sm">Tenaga pengajar profesional dengan pengalaman dan dedikasi tinggi</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🎯</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Ekstrakurikuler</h4>
                            <p className="text-blue-700 text-sm">Beragam kegiatan untuk mengembangkan bakat dan minat siswa</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">📍 Alamat</h4>
                            <p className="text-blue-100">
                                Jl. Pendidikan No. 123<br/>
                                Kota Harapan, Jawa Barat<br/>
                                Kode Pos 12345
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">📞 Kontak</h4>
                            <p className="text-blue-100">
                                Telepon: (021) 1234567<br/>
                                Email: info@sman1harapan.sch.id<br/>
                                Website: www.sman1harapan.sch.id
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">⏰ Jam Operasional</h4>
                            <p className="text-blue-100">
                                Senin - Jumat: 07:00 - 15:00<br/>
                                Sabtu: 07:00 - 12:00<br/>
                                Minggu: Tutup
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
                        <p>&copy; 2024 SMA Negeri 1 Harapan. Hak Cipta Dilindungi.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}