<?php

use App\Mail\ContactReceived;
use App\Models\CareerItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/career', function () {
    return Inertia::render('career', [
        'careers' => CareerItem::all()->toArray(),
    ]);
})->name('career');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::post('/contact', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'text' => 'required|string',
        'recaptcha' => 'required|string',
    ]);

    $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
        'secret' => env('G_RECAPTCHA_SECRET_KEY'),
        'response' => $request->recaptcha,
    ]);

    if (!($response->json()['success'] ?? false)) {
        return Inertia::render('contact')->with(['errors' => ['reCAPTCHA verification failed.']]);
    }

    app()->terminating(function () use ($request) {
        try {
            \Illuminate\Support\Facades\Mail::send(new ContactReceived($request->email, $request->text));
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error('Post-response contact mail failed', ['error' => $e->getMessage()]);
        }
    });

    return Inertia::render('contact')->with(['success' => 'Thank you for contacting me!']);
})->middleware('throttle:1,1');
