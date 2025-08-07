<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admissions', function (Blueprint $table) {
            $table->id();
            $table->string('academic_year')->comment('Tahun ajaran');
            $table->string('title');
            $table->text('description');
            $table->date('registration_start');
            $table->date('registration_end');
            $table->date('test_date')->nullable();
            $table->date('announcement_date')->nullable();
            $table->json('requirements')->comment('Persyaratan pendaftaran');
            $table->json('procedures')->comment('Prosedur pendaftaran');
            $table->decimal('registration_fee', 10, 2)->default(0);
            $table->text('contact_info')->nullable();
            $table->string('status')->default('active')->comment('Status: active, inactive, closed');
            $table->boolean('is_current')->default(false)->comment('Pendaftaran saat ini');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('academic_year');
            $table->index('status');
            $table->index('is_current');
            $table->index(['status', 'academic_year']);
            $table->index('registration_start');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};