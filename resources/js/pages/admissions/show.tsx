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
    admission: Admission;
    relatedAdmissions: Admission[];
    [key: string]: unknown;
}

export default function AdmissionShow({ admission, relatedAdmissions }: Props) {
    const isActive = admission.is_current && new Date() <= new Date(admission.registration_end);

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
                                <p className="text-sm text-blue-600">Detail PPDB</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
                                🏠 Beranda
                            </Link>
                            <Link href="/admissions" className="text-blue-700 hover:text-blue-900 font-medium">
                                🎓 PPDB
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
                        <Link href="/admissions" className="hover:text-blue-900">🎓 PPDB</Link>
                        <span>›</span>
                        <span className="text-blue-900 font-medium">Detail</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* Header Card */}
                    <div className={`rounded-lg shadow-lg overflow-hidden mb-12 ${
                        isActive 
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                            : 'bg-white border-2 border-gray-200'
                    }`}>
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🎓</span>
                                <div>
                                    <div className="mb-2">
                                        {isActive ? (
                                            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                                🔥 PENDAFTARAN AKTIF
                                            </span>
                                        ) : (
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                📅 {admission.is_current ? 'PERIODE BERAKHIR' : 'ARSIP'}
                                            </span>
                                        )}
                                    </div>
                                    <h1 className={`text-3xl font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
                                        {admission.title}
                                    </h1>
                                    <p className={`text-lg mt-2 ${isActive ? 'text-blue-100' : 'text-blue-700'}`}>
                                        {admission.academic_year}
                                    </p>
                                </div>
                            </div>
                            
                            <p className={`text-lg mb-8 leading-relaxed ${isActive ? 'text-blue-100' : 'text-blue-800'}`}>
                                {admission.description}
                            </p>

                            {/* Key Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className={`rounded-lg p-4 ${isActive ? 'bg-white/20 backdrop-blur' : 'bg-blue-50'}`}>
                                        <span className="text-2xl block mb-2">📅</span>
                                        <p className={`text-sm mb-1 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>Pendaftaran Dibuka</p>
                                        <p className={`font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
                                            {new Date(admission.registration_start).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className={`rounded-lg p-4 ${isActive ? 'bg-white/20 backdrop-blur' : 'bg-blue-50'}`}>
                                        <span className="text-2xl block mb-2">⏰</span>
                                        <p className={`text-sm mb-1 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>Pendaftaran Ditutup</p>
                                        <p className={`font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
                                            {new Date(admission.registration_end).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                                {admission.test_date && (
                                    <div className="text-center">
                                        <div className={`rounded-lg p-4 ${isActive ? 'bg-white/20 backdrop-blur' : 'bg-blue-50'}`}>
                                            <span className="text-2xl block mb-2">✏️</span>
                                            <p className={`text-sm mb-1 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>Tes Seleksi</p>
                                            <p className={`font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
                                                {new Date(admission.test_date).toLocaleDateString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div className="text-center">
                                    <div className={`rounded-lg p-4 ${isActive ? 'bg-white/20 backdrop-blur' : 'bg-blue-50'}`}>
                                        <span className="text-2xl block mb-2">💰</span>
                                        <p className={`text-sm mb-1 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>Biaya Pendaftaran</p>
                                        <p className={`font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
                                            Rp {admission.registration_fee.toLocaleString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Requirements and Procedures */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Requirements */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <span className="mr-3">📋</span>
                                Persyaratan Pendaftaran
                            </h3>
                            <div className="space-y-4">
                                {admission.requirements.map((requirement, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                                        <p className="text-blue-800 leading-relaxed">{requirement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Procedures */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <span className="mr-3">📝</span>
                                Prosedur Pendaftaran
                            </h3>
                            <div className="space-y-4">
                                {admission.procedures.map((procedure, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <p className="text-blue-800 leading-relaxed">{procedure}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    {admission.contact_info && (
                        <div className="bg-blue-100 rounded-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center">
                                <span className="mr-3">📞</span>
                                Informasi Kontak
                            </h3>
                            <div className="text-center">
                                <div className="bg-white rounded-lg p-6 inline-block shadow-md">
                                    <span className="text-4xl block mb-4">🤝</span>
                                    <p className="text-blue-800 whitespace-pre-line leading-relaxed">
                                        {admission.contact_info}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="text-center">
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/admissions">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                                    🎓 Lihat Semua PPDB
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                                    🏠 Kembali ke Beranda
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Admissions */}
            {relatedAdmissions.length > 0 && (
                <section className="py-12 px-4 bg-blue-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                📚 Informasi PPDB Lainnya
                            </h3>
                            <p className="text-blue-700">Riwayat penerimaan peserta didik baru</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedAdmissions.map((related) => (
                                <Link 
                                    key={related.id} 
                                    href={`/admissions/${related.id}`}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="text-center">
                                        <span className="text-3xl block mb-3">🎯</span>
                                        <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                                            {related.title}
                                        </h4>
                                        <p className="text-blue-700 text-sm mb-4">{related.academic_year}</p>
                                        <div className="text-center">
                                            {related.is_current ? (
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                                    📢 Aktif
                                                </span>
                                            ) : (
                                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                                    📅 Arsip
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action */}
            {isActive && (
                <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h3 className="text-3xl font-bold mb-4">🚀 Siap Bergabung Dengan Kami?</h3>
                        <p className="text-xl text-blue-100 mb-8">
                            Jangan lewatkan kesempatan emas untuk menjadi bagian dari keluarga besar SMA Negeri 1 Harapan. 
                            Daftarkan diri Anda sekarang juga!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex items-center justify-center">
                                <span className="mr-2">⏰</span>
                                <span>Pendaftaran berakhir: {new Date(admission.registration_end).toLocaleDateString('id-ID')}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}