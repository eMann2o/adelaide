import React, { useState } from "react";
import { Link } from "react-router";
import Footer from "~/components/footer";

export default function ArtworkDetail() {
    return (
        <body class="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- TopNavBar Component -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 lg:px-20 py-4">
<div class="flex items-center gap-4">
<div class="size-6 text-secondary dark:text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-secondary dark:text-text-dark text-lg font-bold font-serif leading-tight tracking-[-0.015em]">Eleanor Vance</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal link-underline" href="#">Home</a>
<a class="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Portfolio</a>
<a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal link-underline" href="#">About</a>
<a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal link-underline" href="#">Contact</a>
</nav>
</div>
<div class="md:hidden">
<button class="text-text-light dark:text-text-dark">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 py-10 lg:py-16">
<!-- Breadcrumbs Component -->
<div class="mb-8">
<div class="flex flex-wrap items-center gap-2">
<a class="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal hover:text-primary" href="#">Portfolio</a>
<span class="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal">/</span>
<a class="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal hover:text-primary" href="#">Coastal Abstracts</a>
<span class="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal">/</span>
<span class="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Tidal Whispers</span>
</div>
</div>
<!-- Main Content Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-12">
<!-- Left Column: Image -->
<div class="w-full">
<!-- HeaderImage Component -->
<div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden min-h-[400px] sm:min-h-[600px] lg:min-h-[700px] bg-[#ececef] dark:bg-gray-800" data-alt="An abstract oil painting with swirling blues, greens, and sandy beige tones, evoking a coastal landscape." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRg6u9es2fP8m6AOjfaqW2KTZ8P0kSiJKvWbNtaV-c_h9z0yuaITgdfSFyMBtBl1jX9MIqCIBGQc8IZdM_lipvpq27nptWez4BhVOifGJ99muFXi3HdinYTHezAkkrfBHhacjuGyQoJfVSSpAQdzfQWh9xBCdGriBB6uohMuZHtlQDaKt6Kpz5-t9of6d_r1WKxmbEYwDaS9rtfyLQEpTE1ifTj3RIuMMIfhziJ2RIadqJht_8NwGZCjwYAR5aFDtXPJ0DYlAD3vI");'></div>
</div>
<!-- Right Column: Details -->
<div class="flex flex-col pt-4">
<!-- HeadlineText Component -->
<h1 class="font-serif text-secondary dark:text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight pb-6">Tidal Whispers</h1>
<!-- DescriptionList Component -->
<div class="grid grid-cols-[100px_1fr] gap-x-6 mb-8">
<div class="col-span-2 grid grid-cols-subgrid border-t border-border-light dark:border-border-dark py-4">
<p class="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Year</p>
<p class="text-text-light dark:text-text-dark text-sm font-normal leading-normal">2023</p>
</div>
<div class="col-span-2 grid grid-cols-subgrid border-t border-border-light dark:border-border-dark py-4">
<p class="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Medium</p>
<p class="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Oil and mixed media on canvas</p>
</div>
<div class="col-span-2 grid grid-cols-subgrid border-t border-t-border-light dark:border-border-dark border-b border-b-border-light dark:border-b-border-dark py-4">
<p class="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Dimensions</p>
<p class="text-text-light dark:text-text-dark text-sm font-normal leading-normal">48 x 72 in (122 x 183 cm)</p>
</div>
</div>
<!-- Artist Notes Component -->
<div class="space-y-4 text-base leading-relaxed text-text-light dark:text-text-dark mb-10">
<p>"Tidal Whispers" captures the fleeting moments where sea foam kisses the shore, a dialogue between water and land. The piece explores the transient beauty of the coastline, using layers of oil paint and sand to build a tangible texture that mirrors the gritty, yet fluid, nature of the beach.</p>
<p>It is a reflection on memory and the constant state of flux that defines our natural world.</p>
</div>
<!-- CTA Button Component -->
<button class="flex min-w-[84px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
<span class="truncate">Purchase Inquiry</span>
</button>
</div>
</div>
<!-- Related Artworks Section -->
<div class="mt-24 lg:mt-32">
<h3 class="font-serif text-secondary dark:text-white text-3xl font-bold mb-8">Related Works</h3>
<div class="relative">
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
<!-- Related Item 1 -->
<a class="group" href="#">
<div class="overflow-hidden mb-4">
<div class="w-full h-64 bg-center bg-cover bg-[#ececef] dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105" data-alt="Abstract painting with deep blue and gold leaf accents." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzYiLbt-0obdaCa8WcatvaSyx4uTsrqHAWqxIDpaRw5QpaqVqT9mjtm50ElWonDuSurmGRTkTiaAvbyjzXWTMPBBQztelHUTYFwAqxV7FHKtKrZP1AW34X6H7nJ7HVocStsi4FH2vAaer9z_DlAfIEPLqsTBquIQwNwf0Jnho1TJqha2G_HhQt2Yc2VVjeSIAvF85GHm4SGCJgexI0MqCpTjNZODtshcJkTwitI7YN1hrpjVjTqMMcytKwVmUA6XheMskhWV0XJFs');"></div>
</div>
<h4 class="font-medium text-text-light dark:text-text-dark group-hover:text-primary">Ocean's Breath</h4>
<p class="text-sm text-subtle-light dark:text-subtle-dark">2022</p>
</a>
<!-- Related Item 2 -->
<a class="group" href="#">
<div class="overflow-hidden mb-4">
<div class="w-full h-64 bg-center bg-cover bg-[#ececef] dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105" data-alt="Minimalist abstract art with shades of grey and a single streak of white." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKrvD3jqX35yGSJNP3lO22s_CSRa8FPUFKv4uCgW19wg_KssapIMoCYjoltiiFAtiFl40IDDi-I4CMdP6lHz6PbGIeVXSK0TiaNCk1ftPgeqv1MF-3msRvPaW-Kb7-IufQWFIIZnqa-fZBcihNBGGKyEiTIKH5p3WNAT-qRN9GR43OstQ4WLaZ0t8VTE6MTg5tdxGNL6DP_V5Z7MSHPCtoHBAM97Kx9esegvYOGdcHda8gYW62KNiAZs3FdPL60lqA7ZA-DHy96H8');"></div>
</div>
<h4 class="font-medium text-text-light dark:text-text-dark group-hover:text-primary">Shoreline Study</h4>
<p class="text-sm text-subtle-light dark:text-subtle-dark">2023</p>
</a>
<!-- Related Item 3 -->
<a class="group" href="#">
<div class="overflow-hidden mb-4">
<div class="w-full h-64 bg-center bg-cover bg-[#ececef] dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105" data-alt="Abstract artwork with fluid, marble-like patterns in white and soft gray." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnP202wc8UqAhA5v9Vsa1cMtUSUGkJMlUCNwtBACYkVacqwDXj3id-R41a39hYp6kbkC2sapup3TN1SN_2Yj2ViesqdAfrfhJu3aSzqKp77xbzrF6F3asrDBO-WehT1GwwtitPh_1IU_2sWZfcgUMhTs88IfUoQ3BSv9Q1Zu2K8uSOrSpbjuhnUoUajNn4gXSr_5E_WT8UKYiDf74x8j0yE8e6CwX2ANUejDUJOGnmgEFXIKbI4DbYTvyYSD5sO2m2pY4vlfbrGN8');"></div>
</div>
<h4 class="font-medium text-text-light dark:text-text-dark group-hover:text-primary">Salt Flats</h4>
<p class="text-sm text-subtle-light dark:text-subtle-dark">2021</p>
</a>
<!-- Related Item 4 (hidden on md and smaller) -->
<a class="group hidden lg:block" href="#">
<div class="overflow-hidden mb-4">
<div class="w-full h-64 bg-center bg-cover bg-[#ececef] dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105" data-alt="Colorful abstract gradient of blues, purples, and yellows." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjmrNjKOGDJ_DsYtrxAPwHZJmiWnhQtiyxzK1OiNwYstb1xYQxT0iANsSTUthzcqmvAYIvdvZLlmj0OKcQl2L2VwaLyaIH5pi4rw7BhHoW4dU9-NPXj33Zza1UYSPa1xMxJsC0jiGGlnlgdAHEdfBvMtNBBo9ICwmMDFsvSWO7VeD_745W5JCNGhwi0H8g0LWWTvipavEuhbPYeCGkMTafojlEnBnu47q6Tr8ep2W5uS6PcMlG_dOhkofQW49lFgJ3ozfvytCZF4w');"></div>
</div>
<h4 class="font-medium text-text-light dark:text-text-dark group-hover:text-primary">Morning Mist</h4>
<p class="text-sm text-subtle-light dark:text-subtle-dark">2023</p>
</a>
</div>
<button class="absolute -left-4 top-1/2 -translate-y-1/2 transform bg-background-light/80 dark:bg-background-dark/80 rounded-full p-2 hidden md:flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition">
<span class="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
</button>
<button class="absolute -right-4 top-1/2 -translate-y-1/2 transform bg-background-light/80 dark:bg-background-dark/80 rounded-full p-2 hidden md:flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition">
<span class="material-symbols-outlined text-text-light dark:text-text-dark">arrow_forward</span>
</button>
</div>
</div>
</main>
<!-- Footer Component -->
<footer class="w-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20 py-10 mt-16 border-t border-border-light dark:border-border-dark">
<div class="flex flex-col md:flex-row justify-between items-center gap-6">
<p class="text-sm text-subtle-light dark:text-subtle-dark">© 2024 Eleanor Vance. All Rights Reserved.</p>
<div class="flex items-center gap-6">
<a class="text-subtle-light dark:text-subtle-dark hover:text-primary" href="#">Instagram</a>
<a class="text-subtle-light dark:text-subtle-dark hover:text-primary" href="#">Twitter</a>
<a class="text-subtle-light dark:text-subtle-dark hover:text-primary" href="#">Contact</a>
</div>
</div>
</footer>
</div>
</div>
</body>
    );
}