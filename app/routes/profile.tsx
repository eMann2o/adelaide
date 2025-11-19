

// Main Profile Component
export default function Profile() {
  return (
    <body class="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
<div class="relative flex min-h-screen w-full flex-col">
<!-- Header -->
<header class="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-background-light/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-background-dark/80">
<div class="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
<a class="flex items-center gap-3" href="#">
<h1 class="font-serif text-xl font-bold text-secondary dark:text-gray-200">Elara Vance</h1>
</a>
<nav class="hidden items-center gap-8 md:flex">
<a class="link-underline text-sm font-medium text-primary" href="#">Work</a>
<a class="link-underline text-sm font-medium text-primary" href="#">About</a>
<a class="link-underline text-sm font-medium text-primary" href="#">Contact</a>
</nav>
<button class="md:hidden">
<span class="material-symbols-outlined"> menu </span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="w-full grow">
<div class="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
<div class="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
<!-- Artist Portrait -->
<div class="lg:col-span-5">
<div class="aspect-[4/5] w-full bg-cover bg-center" data-alt="A close-up, black and white portrait of a thoughtful female artist in her studio, with soft, natural light." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuPeC5IRWrl619OTMvirBaEp_2DSeBNfkLVwfKABgg7gBi-38GbNcSa9x2R2U4o7RQU5nNDpL6rFrCJLTOTY0e86_uD8pHRdG1aJbQ6vofp4mVra19sYRvVyE3Rw1wrglrVfIOnJhbZ-_UaabGIz_o9yIq56u6wvPXXH0CD9Y3PusAEBgZ0grFsbW9X1n1n_kiO2p4UPGES336zZYHCy-LKMBhyaiJJ9eUHbFQDanPKqV0Kj5Ba3R2-ahlZ0k_8m4u-8L2BphVPa4");'></div>
</div>
<!-- Biography Section -->
<div class="flex flex-col justify-center lg:col-span-7">
<h2 class="font-serif text-4xl font-bold text-secondary dark:text-gray-200 md:text-5xl">About the Artist</h2>
<p class="mt-8 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">A concise professional biography covering the artist's background, education, key achievements, and the evolution of their artistic practice. This text should be clean, highly readable, and set in a sans-serif font like Inter to ensure optimal readability. The narrative guides the reader through the artist's journey from early inspirations to their current body of work.</p>
<p class="mt-4 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">Elara's work explores the delicate interplay between memory and landscape, capturing fleeting moments of atmospheric change. With a background in classical painting and a passion for contemporary abstraction, she creates pieces that are both timeless and immediate.</p>
</div>
</div>
</div>
<!-- Artist Statement Section -->
<section class="w-full bg-tertiary/20 py-20 dark:bg-tertiary/10 md:py-32">
<div class="mx-auto max-w-4xl px-6 md:px-10">
<h3 class="text-center font-serif text-3xl font-bold text-secondary dark:text-gray-200 md:text-4xl">Artist Statement</h3>
<blockquote class="mt-12 border-l-4 border-primary pl-6 italic">
<p class="font-serif text-2xl leading-snug text-primary dark:text-primary/90 md:text-3xl">"My art is a conversation with the unseen, an attempt to give form to the echoes of places and the whispers of time."</p>
</blockquote>
<p class="mt-12 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">In my practice, I delve into the ephemeral nature of the natural world. I am fascinated by how light can transform a landscape, how a shadow can hold a story, and how color can evoke a powerful emotional response. Each brushstroke is an act of translation, moving from the sensory experience of a moment to a tangible form on canvas. My goal is not to replicate reality, but to distill its essence, inviting the viewer into a space of contemplation and connection.</p>
</div>
</section>
<!-- Studio Gallery Section (Optional) -->
<section class="w-full bg-background-light py-20 dark:bg-background-dark md:py-32">
<div class="mx-auto max-w-[1440px] px-6 md:px-10">
<h3 class="text-center font-serif text-3xl font-bold text-secondary dark:text-gray-200 md:text-4xl">From the Studio</h3>
<div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div class="aspect-square w-full bg-cover bg-center" data-alt="An artist's studio with paint brushes in jars and canvases in the background." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqyRRu_JBIwP_nEdIC09vJO06ypO0yO4okTKqu68xJAbO7C_JfX-oMwXfoOWSTqM2XgSNiyyDCi15zjKEIOmLCa73nKjzJmENPuXvLthluDMAE0CG0HB9g4oiJ92SFqVX8Fv3HOLXDAOq7DeZWHAspfa4HJD0r69Mukm4x6z2k73PLL6-s6kBqnA_zc8u4FR9HKuV-tsQUUBgGfj5svCFeh2FWc_guolFVCHfuAKBJDdb1S4fI1GUmt2ZaEuSRZPYea7D5pfDiAKs");'></div>
<div class="aspect-square w-full bg-cover bg-center" data-alt="Close up on a palette with mixed oil paints of various vibrant colors." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmsezbzPbGEOwdAwFbFpJRLemyDE9h5exn4d5m9r63NfzkqQveq1YN2E6lXjwWzvPbqOEb2lKX6qpsgsEiGKq0as1R-zyDph2l_DQ3ro52TNXFPEopAaRltKE4_a6x_3fiqrY_SvNH0QRniQmb8vJ15OgwSiyA658GraRX7faDK_dVXP0MAyl_5q4FWGItbcoWJ81K5UJs0zQ3_S4UM7LRYRbGbh4g20yZGxI86CsEtoQbUziR3ubWmf8fyQIfZiGnX0Mt3O74zWE");'></div>
<div class="aspect-square w-full bg-cover bg-center" data-alt="A finished abstract painting with textured blue and gold strokes leaning against a white wall." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVsNmLkxwJ-59K63eTrPeaGA4Z0cAbtYMJm-UrH46-BQmlSBsLtWIzcWgbp6fU6h7m2kXzLnxf5tD7Px7Om1ggt-31JkYuzoC9OsTttrfKQK-ZbC5OrRNcad840F2zvoXjtStTd7yFmXzA1Rv0BI0txmpA8X10j1KsbQA9hSPa72LU76l7AjYO3NXEvGpj9_3gyPhu8a44r6Bkt4jLqLyDoeqSAL_UWSxwEkwywM5EiMYdHfIQyKxDwdl_uWzSB_8xOQGcu00_8Lk");'></div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t border-gray-200/50 bg-background-light dark:border-gray-800/50">
<div class="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
<p class="text-sm text-text-light/60 dark:text-text-dark/60">© 2024 Elara Vance. All Rights Reserved.</p>
<div class="flex items-center gap-4">
<a class="text-text-light/60 hover:text-primary dark:text-text-dark/60 dark:hover:text-primary" href="#">Instagram</a>
<a class="text-text-light/60 hover:text-primary dark:text-text-dark/60 dark:hover:text-primary" href="#">Twitter</a>
<a class="text-text-light/60 hover:text-primary dark:text-text-dark/60 dark:hover:text-primary" href="#">Behance</a>
</div>
</div>
</footer>
</div>
</body>
  );
}