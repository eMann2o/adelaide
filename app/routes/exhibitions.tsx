import Footer from "~/components/footer";

export default function Exhibition() {
    return (
        <body class="font-display bg-background-light dark:bg-background-dark text-body-text dark:text-gray-200">
<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-12 lg:px-16">
<div class="layout-content-container flex flex-col w-full max-w-screen-xl flex-1">
<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 py-6 md:px-10">
<div class="flex items-center gap-4">
<h2 class="text-secondary dark:text-gray-100 font-serif text-xl font-bold leading-tight tracking-wide">Eleanor Vance</h2>
</div>
<nav class="hidden md:flex flex-1 justify-center gap-8">
<a class="text-primary text-sm font-medium leading-normal relative group" href="#">
<span>Portfolio</span>
<span class="absolute bottom-0 left-0 h-px w-full scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a class="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal relative group" href="#">
<span>About</span>
<span class="absolute bottom-0 left-0 h-px w-full scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a class="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal relative group" href="#">
<span>Contact</span>
<span class="absolute bottom-0 left-0 h-px w-full scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
</nav>
<div class="flex items-center justify-end">
<button class="md:hidden p-2 text-secondary dark:text-gray-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-1">
<!-- PageHeading -->
<div class="flex flex-wrap justify-between items-center gap-6 p-4 md:p-10 my-8">
<div class="flex flex-col gap-3">
<p class="text-secondary dark:text-gray-100 font-serif text-5xl md:text-6xl font-bold leading-tight tracking-normal">Works</p>
<p class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal max-w-lg">A curated collection of pieces exploring form, color, and texture across various mediums and series.</p>
</div>
</div>
<!-- Chips / Filters -->
<div class="flex gap-3 p-4 md:px-10 flex-wrap items-center">
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-secondary dark:text-gray-300 text-sm font-medium leading-normal">Medium</p>
<span class="material-symbols-outlined text-secondary dark:text-gray-300 text-lg">expand_more</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-secondary dark:text-gray-300 text-sm font-medium leading-normal">Series</p>
<span class="material-symbols-outlined text-secondary dark:text-gray-300 text-lg">expand_more</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-secondary dark:text-gray-300 text-sm font-medium leading-normal">Year</p>
<span class="material-symbols-outlined text-secondary dark:text-gray-300 text-lg">expand_more</span>
</button>
<div class="flex-grow"></div>
<button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
                                Clear All
                            </button>
</div>
<!-- ImageGrid -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 md:p-10">
<!-- Artwork Cards -->
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Abstract painting with bold strokes of yellow, blue, and red on a textured canvas." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfNA6cXHtEHT6txXRE6ASThbjQ2XOXoJVTr9ezxqI0OKHnnTUSSlraaWpU6IuEz5lLhEPb2bJz3CEsBbQnBe9dyyXnBXiuPK9l62mVPMLY9Xxu4QZ1SURreQJCF8n7ZUTY4wH_v8n62PVQ7x-HmcO8OcEQLJCC6omm4UsHnYdup0p-8UlfOcgisCzZIUBSEGLBfHh83XsmlTLcrtwgS3sIGGVrALyWFqRMXgzxZX4MiJ17D6hoxLhVLfBHjS38UHjXzpQhwWq47tI');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Untitled I, 2023</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Vibrant floral still life painting with a dark, moody background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW4bzoN0DeOlQxlNsgRBaW48baN55STvK0PpBJIReP-N9GpThw2Td9uTeSrj_GRR-z69emztAmaCR7Z620xDriBL39Mh72T2jIkOiTfI8jxVwyZOjX8YTJBfl_o1avlkKmWFfhZQwqX9PmHkrjW42WMI4z5tDmNxwTXXG-UaP5tyJCABWYaqjkTFOAejiYY8xpFZvAvDZLQkAQ7UfbVyaQpu7uwRVQrD5oFiPfcc5Nhi_lJv6SVwNrBQDHyPQcNp9SDwnV-KisDhw');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Ephemeral Bloom, 2022</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[1/1] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Close-up of a classical-style sculpture of a face." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6-yxpP2KvHyS3_mI4GLhrf6HjuVHaW0GXCxfOC-WUP85jGDAhxhEkbbh8JpP3YbbcSEdFudNWlQsIPuJ0c80UUSKE7dBhT-XIZIs74uKRcQCEZqOeQRQHQYTRxXompH3_OOffK9uAZ7NX7UCfW5N2wnfqZI6qw3CsG2p9_EaN0nA9WXhTdKM0bVpm5_acEk5HfOo6bhl2b9LR3hBvyew2vdlHDOlbuvaoelyQX6kV97s_qLi19UZ3Os-0ciBUNkTBNDJyAOsS3DA');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Visage, 2021</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Colorful abstract watercolor painting with fluid shapes." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCik5Xnzvr4Nvprfb5l1Byg_SEMZxC4FrK5eIy0VyXkSO1ZowwK4y2aCJtIusyfBSf1tD96wbysCLz00VucVwGW9q49XC4rTBFCu93SNQ9GtM4ynA1LqjrxbNA9ImkT2Vb_Y5ZEF48O7MxzZUFoQBOY98NQrQk_gCFsksxi8-3PXqp1oqaY2pd_92Z_LnZ0jAMLsFDhMsficJBx75JWLiaSOcsjMXkEK41-Ead7pXokSg7Gh8KjXC87XUjiaTObuYW_bqPGgcFvLBc');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Convergence, 2023</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="A pop art style painting of a cat wearing sunglasses against a bright pink background." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtczbM1Vifvwc360jX8W6xawyeG1FCJN8XnRcntHHHNDuhyZHLlMu9yhI-AOqB-AgnzAiu8PULQZfCO_m3X2B-UJ0P5gz7Hu0L7b02nhQGgCrBb2PZzFUnFMX-3LFTFFo2Q58e4VwNduU_w0bQf0AHWLJ_1q_290DvOV2HL_-Gl7piJfmkHvrTgU5nipSFYu0ZBQQtgthb3VMQtwrvzIhIjgEAMh1JhtpQin39KZUMhFNt0bpFd5lra8OZbFHmUvPEoiHapYMLN64');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Feline Cool, 2020</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="A minimalist abstract piece with black lines on a beige canvas." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP3Kgo21ekBSkUgg17HfHXUGgvLjPcua87jHWPmF_A5bKIcPaJQsnMCjQ58x4my33Fqp2hXDHPceqoXPv2j98WtL4bGfV4_KWtSQzjMq-3Zox3NTtaPzmJarcUGHdTECRRzQysQu997nubSpqwzaNQ6dtMniB49yurj7uyoLNw6ycXyPahCqpC_C2gve5k2EFk_pG7YkoA24L1xnAuX4fvidkJHW3woB1QKAwfZWhnF-aLRtKwAm8qe5Fbc51tXoJ1NCu0jtdbu8Y');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Linear Study II, 2022</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="An impressionistic landscape painting of a field at sunset." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA15NNeNvZxbVhrAA7GVwtYFPX6c-5bzAVG3Q1POGWEZ8cHU2YV7kw9ey2DuOU5rumYCa4Tr9ffndjTP1URERM7aJAy7ONi2WdkUSZdYCXIXDG-vLM4EruKHPH2Sk8aTsFKyZUyvFOMKQ-WbW7Ueh7VbVYoaDNlGOHdZGiREgJchIZzrTPQFevGE_5XVQCceJbEmOeiQ4zE4CfsprhExqouIksJ9Rqg2tW5eoQe1pgjq11cdgm-X6OWp8CMSKytxyn46EscxM3HVIc');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Golden Hour, 2021</p>
</div>
</div>
<div class="group relative overflow-hidden rounded-lg">
<div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="A portrait of a woman with her face partially obscured by paint splatters." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsMC7x-TQFWS50K_PRS8yIy3fGTUQeBSMIOVTi_TH0uTkY9Bg6HGn4unBcIok3B9RovdyR11upvjzrup2BGYY_jtlWOTquMKuByPjSO5x9iL_O4WWxdZNut3Noo1RS5rLZVk8vGwUxClh1gOgTl2sJ8uLX4DXN1DDVMizxICmhRXa-UjR6wswQh456ljQ8tXdccccaHhEt6Ooo4JCWZH-JAkTLQGOQ4K6jogv3KI3kriZaPzXUrAvCjhnelRUyzpZ2mYPJqJtlvGs');"></div>
<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<p class="text-white text-sm font-medium">Obscura, 2023</p>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex items-center justify-center p-4 md:p-10 my-8">
<a class="flex size-10 items-center justify-center text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-xl">chevron_left</span>
</a>
<a class="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white dark:text-gray-900 rounded-full bg-primary" href="#">1</a>
<a class="text-sm font-medium leading-normal flex size-10 items-center justify-center text-secondary dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" href="#">2</a>
<a class="text-sm font-medium leading-normal flex size-10 items-center justify-center text-secondary dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" href="#">3</a>
<span class="text-sm font-medium leading-normal flex size-10 items-center justify-center text-secondary dark:text-gray-300 rounded-full">...</span>
<a class="text-sm font-medium leading-normal flex size-10 items-center justify-center text-secondary dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" href="#">8</a>
<a class="flex size-10 items-center justify-center text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-xl">chevron_right</span>
</a>
</div>
</main>
</div>
</div>
</div>
<!-- Lightbox Modal -->
<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300" id="lightbox">
<div class="bg-background-light dark:bg-background-dark rounded-lg shadow-2xl w-full max-w-6xl h-auto max-h-[90vh] flex flex-col md:flex-row relative transform scale-95 transition-all duration-300">
<button class="absolute -top-4 -right-4 md:top-4 md:right-4 z-10 flex items-center justify-center size-10 bg-white dark:bg-gray-800 rounded-full text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary shadow-lg" id="close-lightbox">
<span class="material-symbols-outlined">close</span>
</button>
<div class="w-full md:w-2/3 h-64 md:h-auto bg-gray-200 dark:bg-gray-900 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
<img class="w-full h-full object-contain" data-alt="Abstract painting with bold strokes of yellow, blue, and red on a textured canvas." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8xNKvjZ1XVseLCWdn954c5nEeQFn9ig5SrsFwPubjzqxdOhJ4cIFM8PpbmrtB_Aw3KaIXWf_BKqpcnmtPXXzO4EsEcQAwhSKUlU5qXiRD-cNULmPdlsNm6e7r08BTjs-0KwkiV_Dtjtmf-5iy05DJgWHYumUz1kd92AmgMEZH42CrtYcO9DGMpLYb71e8tHsa4gufE4Nlwvx2FNo0P8xcCkrTZQolvq4q4_SR8oiQdTtkg1JwH3EUs7BxCgJnKYofQ4Kae52bIEs"/>
</div>
<div class="w-full md:w-1/3 p-8 overflow-y-auto">
<h3 class="font-serif text-secondary dark:text-gray-100 text-3xl font-bold mb-4">Untitled I</h3>
<div class="space-y-4 text-sm">
<div class="flex">
<p class="w-24 font-semibold text-gray-600 dark:text-gray-400">Year</p>
<p class="flex-1 text-body-text dark:text-gray-300">2023</p>
</div>
<div class="flex">
<p class="w-24 font-semibold text-gray-600 dark:text-gray-400">Medium</p>
<p class="flex-1 text-body-text dark:text-gray-300">Oil on Canvas</p>
</div>
<div class="flex">
<p class="w-24 font-semibold text-gray-600 dark:text-gray-400">Dimensions</p>
<p class="flex-1 text-body-text dark:text-gray-300">48" x 36"</p>
</div>
<div class="flex">
<p class="w-24 font-semibold text-gray-600 dark:text-gray-400">Series</p>
<p class="flex-1 text-body-text dark:text-gray-300">Chromatic Explorations</p>
</div>
</div>
<p class="text-gray-600 dark:text-gray-400 mt-8 text-base leading-relaxed">
                        This piece is an exploration of raw emotion translated through vibrant color and dynamic texture. The interplay of primary colors creates a sense of conflict and harmony, reflecting the complexities of the human experience.
                    </p>
</div>
<button class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 bg-white/80 dark:bg-gray-800/80 rounded-full text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary shadow-lg">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 bg-white/80 dark:bg-gray-800/80 rounded-full text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary shadow-lg">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- Dummy script to show lightbox functionality -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            const lightbox = document.getElementById('lightbox');
            const closeButton = document.getElementById('close-lightbox');
            const artworkCards = document.querySelectorAll('.group.relative');

            if (lightbox && closeButton && artworkCards) {
                artworkCards.forEach(card => {
                    card.addEventListener('click', (e) => {
                        e.preventDefault();
                        lightbox.classList.remove('opacity-0', 'pointer-events-none');
                        lightbox.querySelector('.transform').classList.remove('scale-95');
                    });
                });

                const closeLightbox = () => {
                    lightbox.classList.add('opacity-0', 'pointer-events-none');
                    lightbox.querySelector('.transform').classList.add('scale-95');
                };

                closeButton.addEventListener('click', closeLightbox);

                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        closeLightbox();
                    }
                });
            }
        });
    </script>
</body>
    )
}