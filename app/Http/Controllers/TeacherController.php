<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of teachers.
     */
    public function index()
    {
        $teachers = Teacher::active()
            ->orderBy('name')
            ->paginate(12);

        $subjects = Teacher::active()
            ->distinct()
            ->pluck('subject')
            ->sort()
            ->values();

        return Inertia::render('teachers/index', [
            'teachers' => $teachers,
            'subjects' => $subjects,
        ]);
    }

    /**
     * Display the specified teacher.
     */
    public function show(Teacher $teacher)
    {
        // Only show active teachers to public
        if ($teacher->status !== 'active') {
            abort(404);
        }

        $relatedTeachers = Teacher::active()
            ->where('id', '!=', $teacher->id)
            ->where('subject', $teacher->subject)
            ->take(3)
            ->get();

        if ($relatedTeachers->count() < 3) {
            $additionalTeachers = Teacher::active()
                ->where('id', '!=', $teacher->id)
                ->whereNotIn('id', $relatedTeachers->pluck('id'))
                ->take(3 - $relatedTeachers->count())
                ->get();

            $relatedTeachers = $relatedTeachers->merge($additionalTeachers);
        }

        return Inertia::render('teachers/show', [
            'teacher' => $teacher,
            'relatedTeachers' => $relatedTeachers,
        ]);
    }
}