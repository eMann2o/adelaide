import Footer from "~/components/footer";

export default function Details() {
    return (
        <div className="bg-background font-display text-main-text">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-all duration-300">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-20 border-b border-secondary-text/20">
                                <a className="flex items-center gap-3" href="#">
                                    <div className="w-8 h-8 text-secondary-text">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold tracking-tight text-main-text">The Artist</span>
                                </a>
                                <nav className="hidden lg:flex items-center gap-8">
                                    <a className="text-sm font-medium text-main-text hover:text-secondary-text transition-colors" href="#">Work</a>
                                    <a className="text-sm font-medium text-main-text hover:text-secondary-text transition-colors" href="#">Series</a>
                                    <a className="text-sm font-medium text-main-text hover:text-secondary-text transition-colors" href="#">About</a>
                                    <a className="text-sm font-medium text-main-text hover:text-secondary-text transition-colors" href="#">Contact</a>
                                </nav>
                                <div className="flex items-center gap-4">
                                    <button className="hidden lg:flex items-center justify-center rounded-full h-10 w-10 text-secondary-text hover:bg-secondary-text/10 transition-colors">
                                        <span className="material-symbols-outlined text-xl">search</span>
                                    </button>
                                    <button className="flex items-center justify-center rounded-full h-10 w-10 text-secondary-text hover:bg-secondary-text/10 transition-colors">
                                        <span className="material-symbols-outlined text-xl">shopping_bag</span>
                                    </button>
                                    <button className="lg:hidden flex items-center justify-center rounded-full h-10 w-10 text-secondary-text hover:bg-secondary-text/10 transition-colors">
                                        <span className="material-symbols-outlined text-2xl">menu</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2">
                                <a className="text-secondary-text text-sm font-medium leading-normal hover:text-main-text" href="#">Work</a>
                                <span className="text-secondary-text text-sm font-medium leading-normal">/</span>
                                <a className="text-secondary-text text-sm font-medium leading-normal hover:text-main-text" href="#">Abstract Series</a>
                                <span className="text-secondary-text text-sm font-medium leading-normal">/</span>
                                <span className="text-sm font-medium leading-normal text-main-text">Abstract Forms No. 5</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                            <div className="flex flex-col gap-4">
                                <div className="relative group w-full aspect-[4/5] bg-background rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Main view of Abstract Forms No. 5, an oil on canvas painting with bold shapes and a rich color palette." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWlVI3Okzwo2Nl350ZprR204v_afJjGGZO5CVMiGgjP1EUsW_thMKnhszECYkKGh6P9VGPyZd-tsc-DGdm7JfAD4DgKj-UPYpJudpHlUyqMsPfPvYrJ09V3dyW39uHgA1s_-EWpELdlPm3qRfkJx0WdEIxAhVPF6N_R51-F6XC__qKp08Wgj9xqABlklkQ2lFw-sc5CwCLVPsRJp8HRzmSB1Np-tLOPL5YXbBPAiEmUalYIKTRsU59SxAuHAplY1T7H7sZ7wDiVBI");' }}></div>
                                    <div className="absolute inset-0 bg-main-text/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <span className="material-symbols-outlined text-white text-5xl">zoom_in</span>
                                    </div>
                                    <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40">
                                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                                    </button>
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40">
                                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded border-2 border-secondary-text" data-alt="Detail shot of the painting's texture." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4gBSPABXY9qDph99Y0Ygmg7CrpwvXo0nnkSjVSXprmRLaHTIY8tDImfbFIN7xDD5co1l6oAmXb5Qk5s14Fjknddkl-oPq_cZNg0wjZveULg3GL_BVyamMWgGQc4F-fCgKa3u6L-qU_7LHJjy3gPvlqFBelEgns15I8LQsygV6QgoGmRp0ZgCzRduGqrQ9yKpMBgKdlaiW4ico77_WtdusckSFPPGVWfsralnS_Wtu_4iToYAbWjlw_v-vAbu1Vp1Dk0G72fRa1wE");' }}></div>
                                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer border-2 border-transparent hover:border-secondary-text" data-alt="The artwork shown framed and hanging on a wall." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBP6MFRsOsMk0RBSOR7WTGdi8-b8UJG3x-eJJ-B-8LxUQ4qsG_hrK2s2VPKyVH849ZKxYJmtqtvg62dWz4DJav1NEpmWVzo4_-CAbYfzqFQ4OSWeUtdjVfUd8Bfb8onnHe2wE_5KIETpHne8KsMMXEifmho7i_qhrawelXW_Yn3E5m2J7D9DOUgaZadyPm8CA0P-rsMaC8DS074KwPRBzoXIZn3HFFIp19RcMQ8dRG-qykPiAh0ffmThpxfsklZFjnQT-h__rr5ndI");' }}></div>
                                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer border-2 border-transparent hover:border-secondary-text" data-alt="A close-up of the artist's signature." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhQ0_RN52H0vrsWb9GAfdVeAzxxMSG83_yVYisUKEeDgjxmQRB36CGecglAfGpGcGUUlC49vifqSZhhpyNb2na6zHBlPAfEU7bJKkGbECzwit7sasN0Mg0fMK5npgTjABbFZm-8po_oxhnXAobvnZ5Df5eM-9I__Q8Moj7fkWKxkmAd621cPWQrIJQRYqU8_12k2oEkhXnV5Qn2SLzQTvU4PwEenRUsZ-tGLbfOLuCUEWlx1DvU_bCQ0uD4M0YHPK2eSiJBCHNUxM");' }}></div>
                                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer border-2 border-transparent hover:border-secondary-text" data-alt="Side angle view of the canvas." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7ByEQ8Or3RAOhrPNVYhjwFoO3AJcIcCDOhSqAwgJ-fayHKYUlxGvJpR0UW4ANI9_MN6OQFKW0fqD-tIwocBmY6pI0WBNNs_aszvoKBzS2F6e4Yog0e0Qp-4VpvaBzY-hhdZ_p80Q7tX-3X-sQ6MuEl1_K8N4sIl9iA4j8DUcb1pZhp1NP4L45KW6csQE4Cs-u5O7ycMtnmj1q805sFqjaH8OTB_NTArvOrbgNiZEVK_TKKIBGQPdm8cCQjWU_fqbxCnUQaPlVGa0");' }}></div>
                                </div>
                            </div>
                            <div className="lg:sticky top-28 h-fit mt-8 lg:mt-0">
                                <div className="flex flex-col gap-6">
                                    <p className="text-sm font-normal text-secondary-text">Artist Name</p>
                                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-main-text">Abstract Forms No. 5</h1>
                                    <ul className="flex flex-col gap-1 text-secondary-text text-sm">
                                        <li>Oil on Canvas</li>
                                        <li>48" x 60"</li>
                                        <li>2023</li>
                                    </ul>
                                    <p className="text-2xl font-bold text-accent">$8,500 USD</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="flex w-full sm:w-auto items-center justify-center rounded-full h-12 px-8 bg-primary-button text-main-text text-sm font-bold hover:bg-opacity-90 transition-colors">Inquire About This Piece</button>
                                        <button className="flex w-full sm:w-auto items-center justify-center rounded-full h-12 px-8 bg-secondary-text/10 text-secondary-text font-bold hover:bg-secondary-text/20 transition-colors text-sm">Request Pricing</button>
                                    </div>
                                    <div className="border-t border-secondary-text/20 pt-6">
                                        <p className="text-base text-main-text">A vibrant exploration of color and form, this piece captures the dynamic energy of spontaneous creation. Each brushstroke is a testament to the interplay between controlled intention and chaotic beauty.</p>
                                    </div>
                                    <div className="border-t border-secondary-text/20">
                                        <details className="group">
                                            <summary className="flex justify-between items-center py-4 cursor-pointer list-none">
                                                <h3 className="text-lg font-bold text-main-text">The Story Behind The Work</h3>
                                                <div className="transition-transform duration-300 group-open:rotate-180 text-secondary-text">
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </div>
                                            </summary>
                                            <div className="pb-4 text-sm text-secondary-text space-y-3">
                                                <p>This work was conceived during a tempestuous spring morning, inspired by the dramatic shifts in light and shadow. The initial layers were applied with a palette knife, creating a rugged foundation that speaks to resilience. Subsequent layers of thinned oil paint were poured and manipulated, allowing gravity and chance to co-author the final composition.</p>
                                                <p>The title, "Abstract Forms No. 5," reflects its place in a series dedicated to deconstructing traditional landscapes into pure emotional expression. It's a dialogue between memory and the present moment, inviting the viewer to find their own narrative within its depths.</p>
                                            </div>
                                        </details>
                                    </div>
                                    <div className="border-t border-secondary-text/20 pt-6 flex items-center gap-4">
                                        <p className="text-sm font-medium">Share:</p>
                                        <div className="flex gap-2">
                                            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-background border border-secondary-text/20 text-secondary-text hover:bg-secondary-text/10 hover:text-secondary-text transition-colors">
                                                <span className="material-symbols-outlined text-xl">share</span>
                                            </button>
                                            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-background border border-secondary-text/20 text-secondary-text hover:bg-primary-button/20 hover:text-primary-button transition-colors">
                                                <span className="material-symbols-outlined text-xl">favorite_border</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-24 md:mt-32">
                            <div className="border-t border-secondary-text/20 pt-8 mb-8">
                                <h2 className="text-3xl font-bold text-main-text">You May Also Like</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-4 group">
                                    <div className="overflow-hidden rounded-lg">
                                        <div className="w-full aspect-[4/5] bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-300" data-alt="Abstract painting with blue and gold tones." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdWGJ_c-VzhGKqcxqHjpnVgwbYsk30wkVvfSqCNYV2EtK97Ff6LdvpLEfcYwNxPuYdYyWszTefCXBHRg9jQ7P6-PyewvZWaJ4NIoLCgz-3d4wyxJwwVgMefBt3k-v4hrGAWEZwqOPA4YNWcDO00IW-VDnXaACnEZrLJV8wUpxqoRerQABgO0SJYLXdnjh98Imlz8aOPsItSNQbg20uFN2x3E3lhxOKeDInyCfB715I9y01gJMmO_mqRYkQh1KXB4Dko31N-zAF22Q");' }}></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-main-text">Ethereal Motion II</h3>
                                        <p className="text-sm text-secondary-text">Acrylic on Linen, 2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 group">
                                    <div className="overflow-hidden rounded-lg">
                                        <div className="w-full aspect-[4/5] bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-300" data-alt="Abstract painting with geometric shapes and red accents." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-fRSeYFW_ITaF3_2Qf_FLafBPHv3Suj1nd8dACQzk2HT44rCPyvww_gPHY0aF_eTQB2wux6bxyKZskSjfSp3JBEUH0sEglB9DLh83axN-mJOJMKjrBHoI1rYndTc5MGLyCNfqzy7w-0wMM7v57_JD_jKnlCLoTsbRmhmbvyENPrv45frbtaCd5yfDSmiES7cWEEsu_RsonP0jlMwUjGa5KxbBqqZGQkZy212FyTujd5367zUiNwlujt1hiwW_632Eqq-SrsI8f2U");' }}></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-main-text">Construct No. 3</h3>
                                        <p className="text-sm text-secondary-text">Mixed Media, 2023</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 group">
                                    <div className="overflow-hidden rounded-lg">
                                        <div className="w-full aspect-[4/5] bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-300" data-alt="Monochromatic abstract painting with heavy texture." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_VOQ50Rm9xQqOMeC3lC6_c73akPsGLbPydmF4GaOwpJ1I1nfcQWDy3xzSRmhLtRIEqmXdhTdsKCYjG_wcj4aGiEyDsx8zsLePDVEOlFZ8cRfuTR_w3yfsZKIJrWY8KJatE1DPc0xVaYKM3519ez593bNLtUY0WwdfvvAKiPFE_Xv_ikdONdT-OMyP4Qpk_lWNbFWVTfJDnJWykezDwsNxliCZ4XV2Nwd6oggyNwTVCZSviLM9Z4UZ4q0IRsxPEBHaAqdhnxyvwaU");' }}></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-main-text">Chiaroscuro Study I</h3>
                                        <p className="text-sm text-secondary-text">Charcoal on Paper, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}