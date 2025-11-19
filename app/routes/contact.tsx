import Footer from "~/components/footer";

export default function Contact() {
    return (
        <body class="font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="w-full max-w-[1280px] mx-auto px-8 md:px-16 py-6">
<nav class="flex items-center justify-between">
<a class="text-secondary dark:text-background-light text-xl font-bold font-sans tracking-tight" href="#">Artist Name</a>
<div class="hidden md:flex items-center gap-10">
<a class="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary relative group" href="#">
                        Work
                        <span class="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-in-out"></span>
</a>
<a class="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary relative group" href="#">
                        About
                        <span class="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-in-out"></span>
</a>
<a class="text-sm font-medium text-primary dark:text-primary relative group" href="#">
                        Contact
                        <span class="absolute bottom-0 left-0 w-full h-px bg-accent"></span>
</a>
</div>
<button class="md:hidden text-secondary dark:text-background-light">
<span class="material-symbols-outlined">menu</span>
</button>
</nav>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-[1280px] mx-auto px-8 md:px-16 py-16 md:py-24">
<div class="max-w-3xl mx-auto text-center">
<!-- Page Heading -->
<h1 class="font-display text-5xl md:text-6xl font-bold text-secondary dark:text-background-light tracking-tight">Get in Touch</h1>
<p class="mt-6 text-base md:text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
                    For questions, press, or commission inquiries, please use the form below. I look forward to hearing from you.
                </p>
<!-- Contact Form -->
<form class="mt-16 text-left space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Full Name -->
<div class="flex flex-col">
<label class="text-sm font-medium text-text-light dark:text-text-dark pb-2" for="full-name">Full Name</label>
<input class="form-input flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-base font-normal transition-all duration-300" id="full-name" placeholder="Enter your full name" type="text"/>
</div>
<!-- Email Address -->
<div class="flex flex-col">
<label class="text-sm font-medium text-text-light dark:text-text-dark pb-2" for="email">Email Address</label>
<input class="form-input flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-red-500 bg-background-light dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-base font-normal transition-all duration-300" id="email" placeholder="Enter your email address" type="email"/>
<p class="text-red-600 dark:text-red-400 text-xs mt-2">A valid email is required.</p>
</div>
</div>
<!-- Inquiry Type -->
<div class="flex flex-col">
<label class="text-sm font-medium text-text-light dark:text-text-dark pb-2" for="inquiry-type">Inquiry Type</label>
<select class="form-select appearance-none flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-base font-normal transition-all duration-300" id="inquiry-type">
<option>General Question</option>
<option>Commission Inquiry</option>
<option>Press Inquiry</option>
</select>
</div>
<!-- Message -->
<div class="flex flex-col">
<label class="text-sm font-medium text-text-light dark:text-text-dark pb-2" for="message">Message</label>
<textarea class="form-textarea flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary p-4 text-base font-normal transition-all duration-300" id="message" placeholder="Your message..." rows="5"></textarea>
</div>
<!-- Conditional Commission Details (Appears when 'Commission Inquiry' is selected) -->
<!-- This would require JS to show/hide. For this static design, it's shown for demonstration. -->
<div class="flex flex-col">
<label class="text-sm font-medium text-text-light dark:text-text-dark pb-2" for="commission-details">Commission Details</label>
<textarea class="form-textarea flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary p-4 text-base font-normal transition-all duration-300" id="commission-details" placeholder="Please describe the size, subject, and any other relevant details for your commission." rows="5"></textarea>
</div>
<!-- Submit Button -->
<div class="text-center pt-4">
<button class="flex min-w-[180px] w-full md:w-auto mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-medium leading-normal tracking-wide hover:bg-secondary dark:hover:bg-primary/80 transition-all duration-300 ease-in-out" type="submit">
                            Send Message
                        </button>
</div>
</form>
<!-- Success Message (to be shown after submission) -->
<div class="mt-16 p-6 text-center border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded-lg">
<div class="flex items-center justify-center gap-3">
<span class="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
<p class="text-green-800 dark:text-green-300 font-medium">Thank you for your message. I will be in touch shortly.</p>
</div>
</div>
</div>
</main>
<!-- Optional Photo Strip -->
<section class="w-full py-16 md:py-24 bg-background-light dark:bg-background-dark">
<div class="max-w-[1440px] mx-auto px-8 md:px-16">
<h2 class="font-display text-4xl font-bold text-secondary dark:text-background-light tracking-tight text-center mb-12">The Studio</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up of an artist's hands working with clay on a pottery wheel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHxU7AgLssOS49W9fSV1rS4ylYqn5ozDXywiRnaz5Sh-GImWiVHq9NgtJE9lR01dvxir6FMZa1Fj8DQZtQbdQkRoto6cPQtRHZ46MOOnDjp6TwrZmRCP8_NMil3D_7ZGmr10xNbuPtrTiUJwQUULtOy_Oz6LUsdWJu427tsngpI0xrADqUqMJl_VQiyfprf-vgXHqZFO9DlZoDDhAiP2a7uLw1dwNa8c3YfAl9dG5nkMLU1wA9wB7sieq58UQxSOxW4UZ8qZz3G4"/>
</div>
<div class="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A messy but organized artist's desk with various paints, brushes, and canvases" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgoeyoE6VBLKxasUbj1_GfD_Qiyt559MgFw9D1Knrw-SixCA4BqJ6KyGvjEwEPNppAKZhsU8PU7s_XPJKnQ5PVxeULWAKPZh7GEbZJ3y68V2p1i5fa25MX1MYIxA19IsoF5_QJhwqlbWP9i_ClbV1tc8u_E4x3ti0Uooe0hyHG8_MgsRS-G-nFbSY4FSBYqrEOKjVwKRMPFDDRHaQ_fRnHZudy_zMtxn4AT3J3Q9D2DE-x6o2tQK3VfHCYJbN9m2YTxtPMSQTJ0b4"/>
</div>
<div class="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A collection of finished paintings leaning against a gallery wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-39ra3JfGjvZGPvW0pSGqKRiG4A7FMVe7dZ0gMmxyr7AWW6CO_JaWrPRLoGRg_lNmLF1tva2Y0Td77d6-PceRxi_DH1YcURfPR2dNsDezfgAt9ro0J9x_s17Bq_9n3Aso0cslgIh65tRpIfM-rQYKCBgCNLsV7shqxwKIMUfOJXPtVBJrhCvy4LPvwT4QpjYnDI1j882KB4oH9TsobTHBziV3UrcTctDVxuYp0bCPl_m861Eb5U7PeBp4Y1xWRkk18qN0cL3u04"/>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="w-full max-w-[1280px] mx-auto px-8 md:px-16 py-12">
<div class="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 dark:border-gray-700 pt-8">
<p class="text-sm text-text-light/70 dark:text-text-dark/70">© 2024 Artist Name. All Rights Reserved.</p>
<div class="flex items-center gap-6">
<a class="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors" href="#">Instagram</a>
<a class="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors" href="#">LinkedIn</a>
<a class="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors" href="#">contact@artistname.com</a>
</div>
</div>
</footer>
</div>
</body>
    )
}