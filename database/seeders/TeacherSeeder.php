<?php

namespace Database\Seeders;

use App\Models\Teacher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teachers = [
            [
                'name' => 'Dr. Sari Indrawati, M.Pd.',
                'nip' => '196512301990032001',
                'subject' => 'Matematika',
                'education' => 'S3 Pendidikan Matematika - Universitas Indonesia',
                'biography' => 'Guru matematika berpengalaman dengan spesialisasi dalam metode pembelajaran inovatif. Aktif dalam penelitian pendidikan matematika dan telah menerbitkan berbagai artikel ilmiah.',
                'photo_url' => 'https://images.unsplash.com/photo-1494790108755-2616c9b0b469?w=400&h=400&fit=crop&crop=face',
                'email' => 'sari.indrawati@sekolah.id',
                'phone' => '081234567890',
                'teaching_experience' => 15,
                'specializations' => ['Aljabar', 'Geometri', 'Statistika'],
                'status' => 'active',
            ],
            [
                'name' => 'Ahmad Fauzi, S.Pd., M.Si.',
                'nip' => '197803151998021002',
                'subject' => 'Fisika',
                'education' => 'S2 Fisika - Institut Teknologi Bandung',
                'biography' => 'Pendidik fisika yang passionate dalam mengajarkan konsep-konsep fisika dengan pendekatan praktis dan eksperimen. Membimbing siswa dalam berbagai kompetisi sains.',
                'photo_url' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                'email' => 'ahmad.fauzi@sekolah.id',
                'phone' => '081234567891',
                'teaching_experience' => 12,
                'specializations' => ['Mekanika', 'Elektromagnetik', 'Fisika Modern'],
                'status' => 'active',
            ],
            [
                'name' => 'Rina Sari Dewi, S.Pd.',
                'nip' => '198205201005012003',
                'subject' => 'Bahasa Indonesia',
                'education' => 'S1 Pendidikan Bahasa Indonesia - Universitas Gadjah Mada',
                'biography' => 'Guru bahasa Indonesia yang berdedikasi tinggi dalam mengembangkan kemampuan literasi siswa. Aktif dalam kegiatan penulisan dan apresiasi sastra.',
                'photo_url' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                'email' => 'rina.dewi@sekolah.id',
                'phone' => '081234567892',
                'teaching_experience' => 8,
                'specializations' => ['Sastra', 'Linguistik', 'Jurnalistik'],
                'status' => 'active',
            ],
            [
                'name' => 'Budi Hartanto, M.Pd.',
                'nip' => '197609101999031001',
                'subject' => 'Sejarah',
                'education' => 'S2 Pendidikan Sejarah - Universitas Negeri Jakarta',
                'biography' => 'Sejarawan dan pendidik yang memiliki keahlian khusus dalam sejarah Indonesia. Sering menjadi narasumber dalam berbagai forum diskusi sejarah.',
                'photo_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
                'email' => 'budi.hartanto@sekolah.id',
                'phone' => '081234567893',
                'teaching_experience' => 18,
                'specializations' => ['Sejarah Indonesia', 'Sejarah Dunia', 'Arkeologi'],
                'status' => 'active',
            ],
            [
                'name' => 'Maya Puspitasari, S.Pd., M.Sc.',
                'nip' => '198407121008012004',
                'subject' => 'Biologi',
                'education' => 'S2 Biologi - Universitas Indonesia',
                'biography' => 'Peneliti dan pendidik biologi dengan fokus pada ekologi dan konservasi. Membimbing siswa dalam penelitian ilmiah dan olimpiade sains.',
                'photo_url' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
                'email' => 'maya.puspita@sekolah.id',
                'phone' => '081234567894',
                'teaching_experience' => 10,
                'specializations' => ['Ekologi', 'Genetika', 'Mikrobiologi'],
                'status' => 'active',
            ],
            [
                'name' => 'Doni Pratama, S.Pd.',
                'nip' => '199001051012011003',
                'subject' => 'Pendidikan Jasmani',
                'education' => 'S1 Pendidikan Jasmani - Universitas Negeri Semarang',
                'biography' => 'Pelatih olahraga berpengalaman yang telah membawa siswa meraih berbagai prestasi di tingkat regional dan nasional dalam cabang atletik dan sepak bola.',
                'photo_url' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
                'email' => 'doni.pratama@sekolah.id',
                'phone' => '081234567895',
                'teaching_experience' => 7,
                'specializations' => ['Atletik', 'Sepak Bola', 'Bola Basket'],
                'status' => 'active',
            ],
        ];

        foreach ($teachers as $teacher) {
            Teacher::create($teacher);
        }
    }
}