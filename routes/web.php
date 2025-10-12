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
        return back()->withErrors(['recaptcha' => 'reCAPTCHA verification failed.']);
    }

    \Illuminate\Support\Facades\Mail::send(new ContactReceived($request->email, $request->text));
    return back()->with('success', 'Thanks for contacting us!');
})->middleware('throttle:1,1');
