import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Admission {
    id: number;
    academic_year: string;
    title: string;
    description: string;
    registration_start: string;
    registration_end: string;
    test_date: string | null;
    announcement_date: string | null;
    requirements: string[];
    procedures: string[];
    registration_fee: number;
    contact_info: string | null;
    is_current: boolean;
}

interface Props {
    currentAdmission: Admission | null;
    upcomingAdmissions: Admission[];
    pastAdmissions: Admission[];
    [key: string]: unknown;
}

export default function AdmissionsIndex({ currentAdmission, upcomingAdmissions, pastAdmissions }: Props) {
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
                                <p className="text-sm text-blue-600">Penerimaan Peserta Didik Baru</p>
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

            {/* Page Header */}
            <section className="py-12 px-4 bg-blue-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        🎓 Penerimaan Peserta Didik Baru
                    </h2>
                    <p className="text-xl text-blue-700">
                        Bergabunglah dengan keluarga besar SMA Negeri 1 Harapan
                    </p>
                </div>
            </section>

            {/* Current Admission */}
            {currentAdmission && (
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <span className="text-4xl mr-4">🎯</span>
                                    <div>
                                        <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                                            📢 PENDAFTARAN AKTIF
                                        </span>
                                        <h3 className="text-3xl font-bold">{currentAdmission.title}</h3>
                                        <p className="text-blue-100 text-lg mt-2">{currentAdmission.academic_year}</p>
                                    </div>
                                </div>
                                
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                    {currentAdmission.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                                            <span className="text-2xl block mb-2">📅</span>
                                            <p className="text-sm text-blue-200 mb-1">Pendaftaran Dibuka</p>
                                            <p className="font-bold">
                                                {new Date(currentAdmission.registration_start).toLocaleDateString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                                            <span className="text-2xl block mb-2">⏰</span>
                                            <p className="text-sm text-blue-200 mb-1">Pendaftaran Ditutup</p>
                                            <p className="font-bold">
                                                {new Date(currentAdmission.registration_end).toLocaleDateString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                    {currentAdmission.test_date && (
                                        <div className="text-center">
                                            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                                                <span className="text-2xl block mb-2">✏️</span>
                                                <p className="text-sm text-blue-200 mb-1">Tes Seleksi</p>
                                                <p className="font-bold">
                                                    {new Date(currentAdmission.test_date).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                                            <span className="text-2xl block mb-2">💰</span>
                                            <p className="text-sm text-blue-200 mb-1">Biaya Pendaftaran</p>
                                            <p className="font-bold">
                                                Rp {currentAdmission.registration_fee.toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link href={`/admissions/${currentAdmission.id}`}>
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4">
                                            📝 Lihat Informasi Lengkap
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Us */}
            <section className="py-12 px-4 bg-blue-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">
                            ✨ Mengapa Memilih SMA Negeri 1 Harapan?
                        </h3>
                        <p className="text-blue-700 text-lg">Keunggulan yang membuat kami berbeda</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-3xl">🏆</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-3">Prestasi Unggul</h4>
                            <p className="text-blue-700">Siswa-siswi kami meraih berbagai prestasi akademik dan non-akademik di tingkat regional dan nasional.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-3xl">👨‍🏫</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-3">Guru Berkualitas</h4>
                            <p className="text-blue-700">Tenaga pengajar profesional dengan kualifikasi S2 dan pengalaman mengajar yang luas.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-3xl">🔬</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-3">Fasilitas Modern</h4>
                            <p className="text-blue-700">Laboratorium lengkap, perpustakaan digital, dan ruang kelas ber-AC dengan teknologi terkini.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-3xl">🎯</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-900 mb-3">Program Unggulan</h4>
                            <p className="text-blue-700">Kelas olimpiade, program bilingual, dan ekstrakurikuler yang mendukung pengembangan bakat siswa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Timeline */}
            {currentAdmission && (
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                📅 Timeline Penerimaan Siswa Baru
                            </h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                                    1
                                </div>
                                <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                                    <h4 className="font-bold text-blue-900 mb-2">Pendaftaran Online</h4>
                                    <p className="text-blue-700 text-sm">
                                        {new Date(currentAdmission.registration_start).toLocaleDateString('id-ID')} - {new Date(currentAdmission.registration_end).toLocaleDateString('id-ID')}
                                    </p>
                                </div>
                            </div>
                            {currentAdmission.test_date && (
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                                        2
                                    </div>
                                    <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                                        <h4 className="font-bold text-blue-900 mb-2">Tes Seleksi</h4>
                                        <p className="text-blue-700 text-sm">
                                            {new Date(currentAdmission.test_date).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {currentAdmission.announcement_date && (
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                                        3
                                    </div>
                                    <div className="flex-1 bg-white rounded-lg shadow-md p-4">
                                        <h4 className="font-bold text-blue-900 mb-2">Pengumuman Hasil</h4>
                                        <p className="text-blue-700 text-sm">
                                            {new Date(currentAdmission.announcement_date).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Upcoming Admissions */}
            {upcomingAdmissions.length > 0 && (
                <section className="py-12 px-4 bg-blue-50">
                    <div className="container mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                🔔 Informasi Pendaftaran Mendatang
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {upcomingAdmissions.map((admission) => (
                                <div key={admission.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="text-center mb-4">
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                            🕒 Segera Dibuka
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-2">{admission.title}</h4>
                                    <p className="text-blue-700 text-sm mb-4">{admission.academic_year}</p>
                                    <div className="text-center">
                                        <p className="text-blue-600 text-sm mb-2">Dibuka pada:</p>
                                        <p className="font-bold text-blue-900">
                                            {new Date(admission.registration_start).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Past Admissions */}
            {pastAdmissions.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                📚 Riwayat Penerimaan Siswa
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {pastAdmissions.map((admission) => (
                                <div key={admission.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">{admission.title}</h4>
                                        <p className="text-blue-700 text-sm">{admission.academic_year}</p>
                                    </div>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        ✅ Selesai
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact Information */}
            {currentAdmission?.contact_info && (
                <section className="py-12 px-4 bg-blue-100">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                    📞 Butuh Bantuan?
                                </h3>
                                <p className="text-blue-700">Hubungi panitia PPDB untuk informasi lebih lanjut</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-50 rounded-lg p-6 inline-block">
                                    <span className="text-3xl block mb-4">🤝</span>
                                    <p className="text-blue-800 whitespace-pre-line">{currentAdmission.contact_info}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

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