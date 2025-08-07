<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Admission;
use Inertia\Inertia;

class AdmissionController extends Controller
{
    /**
     * Display admission information.
     */
    public function index()
    {
        $currentAdmission = Admission::active()
            ->current()
            ->first();

        $upcomingAdmissions = Admission::active()
            ->where('is_current', false)
            ->where('registration_start', '>', now())
            ->orderBy('registration_start')
            ->take(3)
            ->get();

        $pastAdmissions = Admission::where('status', '!=', 'active')
            ->orWhere('registration_end', '<', now())
            ->latest('academic_year')
            ->take(5)
            ->get();

        return Inertia::render('admissions/index', [
            'currentAdmission' => $currentAdmission,
            'upcomingAdmissions' => $upcomingAdmissions,
            'pastAdmissions' => $pastAdmissions,
        ]);
    }

    /**
     * Display the specified admission.
     */
    public function show(Admission $admission)
    {
        $relatedAdmissions = Admission::where('id', '!=', $admission->id)
            ->active()
            ->latest('academic_year')
            ->take(3)
            ->get();

        return Inertia::render('admissions/show', [
            'admission' => $admission,
            'relatedAdmissions' => $relatedAdmissions,
        ]);
    }
}