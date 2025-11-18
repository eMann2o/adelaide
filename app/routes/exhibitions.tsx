import Footer from "~/components/footer";

export default function Exhibition() {
    return (
        <div className="bg-background font-display text-main-text">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-light transition-transform duration-300 ease-in-out" id="global-header">
                    <nav className="mx-auto flex max-w-[960px] items-center justify-between px-4 sm:px-8 md:px-10 lg:px-0 py-3">
                        <a aria-label="Elara Vance Home" className="flex items-center gap-3" href="#">
                            <div className="size-8 text-accent">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-main-text">Elara Vance</h2>
                        </a>
                        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
                            <div className="flex items-center gap-9">
                                <a className="text-sm font-medium leading-normal text-main-text hover:text-accent transition-colors" href="#">Work</a>
                                <a className="text-sm font-medium leading-normal text-accent" href="#">Exhibitions</a>
                                <a className="text-sm font-medium leading-normal text-main-text hover:text-accent transition-colors" href="#">About</a>
                                <a className="text-sm font-medium leading-normal text-main-text hover:text-accent transition-colors" href="#">Contact</a>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary-button text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                <span className="truncate">Inquire</span>
                            </button>
                        </div>
                        <button aria-label="Open menu" className="md:hidden p-2 rounded-full hover:bg-black/10">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </nav>
                </header>
                <div className="layout-container flex h-full grow flex-col pt-[65px]">
                    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                            <main className="flex flex-col gap-16 md:gap-24">
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <p className="text-main-text text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] w-full">Exhibitions &amp; Press</p>
                                </div>
                                <section className="flex flex-col gap-8">
                                    <h2 className="text-secondary-text text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Exhibitions</h2>
                                    <div className="flex flex-col gap-8">
                                        <div className="p-4">
                                            <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-lg bg-surface p-6 ring-1 ring-border-light hover:ring-accent hover:shadow-xl transition-all duration-300">
                                                <div className="flex flex-[1_1_400px] flex-col gap-4 justify-center">
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-main-text text-xl font-bold leading-tight">Ephemeral Structures</p>
                                                        <p className="text-secondary-text text-base font-normal leading-normal">Galerie Moderne, Paris, France</p>
                                                        <p className="text-accent text-sm font-medium leading-normal">October 15 - November 30, 2024</p>
                                                    </div>
                                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary-button text-white text-sm font-bold leading-normal w-fit mt-4 hover:opacity-90 transition-opacity">
                                                        <span className="truncate">View Details</span>
                                                    </button>
                                                </div>
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-w-[280px]" data-alt="Abstract painting with bold brushstrokes in shades of blue and gold" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmIMQYFMoeG5TKo_CunCwIV3KJnmOLSSOdg8UPWS60jhAi41skH42LtK5nEZXkJn7wvZERaIeS1iOODPR7gTbvKnUY3t4kAz6UbVT5EjLXejGzDNlyyLhtlanUbYwKRBlalW42dc_pzE0r-E61HZhoMvWnleTvQiNAwzw8epJSx86rmuqsYuawnU8xx_-yTdmZAwlvrGmDLMsEJTVDwUaqlISIGDGfHzH8X4Iz6vIuhUgCwjw8s6DrOJnwreGBuFqwLHkGuWi0S74");' }}></div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex flex-col md:flex-row-reverse items-stretch justify-between gap-8 rounded-lg bg-surface p-6 ring-1 ring-border-light hover:ring-accent hover:shadow-xl transition-all duration-300">
                                                <div className="flex flex-[1_1_400px] flex-col gap-4 justify-center">
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-main-text text-xl font-bold leading-tight">Liminal Spaces</p>
                                                        <p className="text-secondary-text text-base font-normal leading-normal">Aperture Gallery, New York, USA</p>
                                                        <p className="text-accent text-sm font-medium leading-normal">January 10 - February 28, 2025</p>
                                                    </div>
                                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary-button text-white text-sm font-bold leading-normal w-fit mt-4 hover:opacity-90 transition-opacity">
                                                        <span className="truncate">RSVP</span>
                                                    </button>
                                                </div>
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-w-[280px]" data-alt="Close-up of a textured canvas with layers of white and grey paint" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLfTL-8Uh2ezaiOt3cs_E4njg-6hg0XwIRjklXwMGpi9a4-5xML06xlEwy0whZFScP0MxIi8gS8c5NOpgqetADwsB3duFEDPA8MX3Yv3NhpBbJ49BCHySFSgRkvzVLt3d6qS8zLn2hcgGbH8eCTAsNbKfz5N7rsIshbX2SXzP7yG89M1fWfkoqB2ZoxjTxcuS0IjwmVbGF0ABKKMJVlVK3nQ9wogrFiP2WKeMoBmtmOOgWP1_w2oxfTu4wdQxSunjnNQEL4rrSlRI");' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-6">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 pt-5">
                                        <h2 className="text-secondary-text text-2xl font-bold leading-tight tracking-[-0.015em]">Past Exhibitions</h2>
                                        <div className="flex items-center gap-2 rounded-full p-1 bg-border-light/60">
                                            <button className="flex items-center justify-center rounded-full h-8 w-8 text-accent bg-surface">
                                                <span className="material-symbols-outlined">grid_view</span>
                                            </button>
                                            <button className="flex items-center justify-center rounded-full h-8 w-8 text-secondary-text hover:text-accent">
                                                <span className="material-symbols-outlined">list</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 p-4">
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2023</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A colorful abstract piece with geometric shapes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpcDLDKG45E9SYsqamzwZL2fGUdhzxhOZYHx5aGzTCDepmOefzGrhdzu4VjQmbAFPUxu8Pz68XO_wrUe11YYQeVRkglu4IYqvWHXkYcf4SrTOKmMaGLCABeSrV5Ijt8bPZYszfc0ShpEy3MrEnvQfRFmzwvR5BWmyx9GI4M75M4tu41pF8Ez6UoCT4TWIqjr2G_rqaA7Kx8jVw38t4bKoN9qVeA8a7SjUVtkjQkL-nUuxz_3ag6RuzXuVhUPzZTfD_Jo-BL1v6TWM");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">Chroma Variations</p>
                                                <p className="text-sm text-secondary-text">The Color Factory, London</p>
                                            </div>
                                        </div>
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2022</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A minimalist sculpture in a bright gallery space" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt-rdXGzkcqJ7W-oeP1Zzs9Zn0MdihCqw0Srz99BBoLF9WhJcXLG6ljXnFLTlZPl7bA3YwZ-EhfSHnr48QjlzOEuwmbd8UT-bA3X-o7KRaI5qlw0uwumS_ZxukUDRU_DM-LFhtQ6UruqaoyFJ5nxlioMTo7PCkoI-bju9hjxUSSxmqnV_hUzCIaBtpjuObNa8dqtqY_e8hvG2_rhdfadD1KwmgOMexWBmJ3QUK62QU27_ObbvuQOSEKBM49NY-SoPFL_I9Y6eyBsU");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">Forms in Silence</p>
                                                <p className="text-sm text-secondary-text">Serene Art Space, Tokyo</p>
                                            </div>
                                        </div>
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2021</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="An installation view of several large paintings" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXKkHm7OCwq77F-p0x4I4y-s-eVIe39n0LSREwbOzkabaMRxTo0hsoshAoISxacF6s1BEnlPFdp-e3Z_xGWDkjVstMLZ34hLXh-PQ9XD_BbRyqBwt870Tbouubkd_Y3FZY0ZV3MAujIfqNYKaxLfppl-EiuRCE0sqKEwvYENQdNFU2VbTOyOY68a925JMGLQHZSbBVlwN9k79WfveuJxg9NC0v8OBxvHNn4WoggmN1VGWv-EwUI-wWEcc5-9MBwK9OJH7hewGVUBk");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">Retrospective</p>
                                                <p className="text-sm text-secondary-text">Contemporary Arts Museum, Berlin</p>
                                            </div>
                                        </div>
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2020</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="Abstract painting with red and black" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0vzzjjnuqhxvLnGY1tN0h_lJex-lMbNe_IRlxzk5wGC5k5cvsD3tl56Vy5HyjF2cIVrj8RiXR9nFMrqwdBjkmjRBSI8JUfK1mCwwO89CwPtgdcN_yxA_zfLQmKhKlSPKpS4zwCiAV4T47rV3Mkt6Nau116m5i0TD44UuOD8TrVvVzuxtNOgBc-c5MxC9KhwIdE69q3tIbx4li7wYdM7qyjqx9bjYiuseHlQalpir2KzuNuFyF12aXcxQzHOGKZfp9t0cEOmFJLGU");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">New Works</p>
                                                <p className="text-sm text-secondary-text">Gallery 42, Sydney</p>
                                            </div>
                                        </div>
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2019</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="Monochromatic textured artwork" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlBBJQ467_jY76GLzh7mS3kRYnv6irt2ASYMkRhb1M6EucZ3MZnBJvJKq6S8sM1BkrLzqne15nzP7alZLLRm4LoxGzAIGV2K3BVI88N9VAiKSVs9idL_yKJzwb6lbeumdJahvPalp2UWJ-RGDyk-JMbxhzv1EspOjOK3HcVJjF1kyWfVgN7ejuCWqvCTPy78Y5J8HV_PFoLvw781E71Tqzbtylhw-JBJBmXj4ne7XWediusHBbtRUQNM_kQAvymkWCpXOE0MO-ddY");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">Monochrome Meditations</p>
                                                <p className="text-sm text-secondary-text">The White Room, Chicago</p>
                                            </div>
                                        </div>
                                        <div className="group relative flex flex-col gap-3 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                            <div className="absolute top-3 right-3 z-10 rounded-full bg-main-text/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">2018</div>
                                            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-lg" data-alt="Large canvas with earthy tones and textures" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbaW0pn_jREQMKMERNiFkhe9J6kIkIf606VapWYCOUiMpiKC-GwYNNIaQP7NNZH9_dkdB1xiEtAzw1Fy1cY1zfnKKOW7R8ZkpLXqny_BQ6BterdF-EIzROxmwNOmFSDfKqO_so3roNkR2pcsI0bt_EtMjJX5iXccG1RKfy-MG76sS4chrSTMANHkhfCTGTT7wIn1OSownPd6FTW2ErVmN6YAj-Az5Tbz8cHpD7-WrzcFB6foyuu9rUg1BOhIMega6cdHNPwfdVDPE");' }}></div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-main-text text-base leading-snug">Terra Firma</p>
                                                <p className="text-sm text-secondary-text">Earth Arts Collective, São Paulo</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-8">
                                    <h2 className="text-secondary-text text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Press Mentions</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                        <div className="flex flex-col gap-4 rounded-lg bg-surface p-6 transition-shadow hover:shadow-lg ring-1 ring-border-light hover:ring-accent/50">
                                            <img alt="Artforum Logo" className="h-6 w-auto self-start" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUip6RtfDOtGg4oL3OvlX0bM92TkO4tH8xj-KhkTdAMqz8QuLnn_P0ZTH0SVZUJ_XBayY9QUSk-7wUBc5h7NMhOr6gZF5e_ygYqNPS7VnhCK6LbG1p8SqY5MdWvXAjalvWFuEMweKZrq_ZOjkJ-nVWYkonMgUg9nPF3xw-D6aVysGZ1smt-TCh41ql6kxx_YPrJ_gBcsPcYGrHKtL1st0CKqEpVM63Wqv0bhrinM1fNGMWXQdfD6DxrIdb8tcaxuMlvo0ykFZs5-c" />
                                            <blockquote className="text-main-text border-l-2 border-accent pl-4 italic text-base">
                                                "A breathtaking display of texture and form that challenges the viewer's perception of space."
                                            </blockquote>
                                            <a className="text-sm font-bold text-accent hover:underline group inline-flex items-center gap-1" href="#">Read Full Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                                        </div>
                                        <div className="flex flex-col gap-4 rounded-lg bg-surface p-6 transition-shadow hover:shadow-lg ring-1 ring-border-light hover:ring-accent/50">
                                            <img alt="Frieze Magazine Logo" className="h-6 w-auto self-start" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSG1q2vD5sP2DUhVrzy2HDcRCljkIMb4FG1SH0U735isWiDMYXFJWuq32evnbiyosl7NA7q8c13RS6Eb1_Q4Apnz4kK2bRamfHnb4sCWl2nr51H_g8_PAy6ZNf8QyI7w-Z7VY1xnLjQR8ASS-05f2FpX3UTvh4OtQFn4C7DunrgdcyXbwqeRj7Mbz2AE1KBHAZ42rz3aSkPZEG_xY0WurO6sPzl7zsDP-GI6Q9kOyQgJOSYyicv6MdcIskZGR5-Syz7ioBcZIKpVg" />
                                            <blockquote className="text-main-text border-l-2 border-accent pl-4 italic text-base">
                                                "Vance's new series is a masterful evolution, proving her voice is one of the most vital in contemporary art."
                                            </blockquote>
                                            <a className="text-sm font-bold text-accent hover:underline group inline-flex items-center gap-1" href="#">Read Full Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                                        </div>
                                        <div className="flex flex-col gap-4 rounded-lg bg-surface p-6 transition-shadow hover:shadow-lg ring-1 ring-border-light hover:ring-accent/50">
                                            <img alt="New York Times Arts Logo" className="h-6 w-auto self-start" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSBbrxoXyRrAOq8h_uH6HtfAbCruohEZSSzZFt0gHL4td_HAKdmtAlBxJjkKuyodTUfh9_iLkUrY4GsLcLMdeUI_8sBUhFCpJr-DNSlxy-opFAALnjnVefukyd6Ekcop_fLeAzTUnGLK3IElU0MGPyWfYCcdzidfcc4Hya9HmwVnQcYZzSSVvQqDKhnf81xwjBkemDQPMHyb2NRqhLHN-q-JJEAzxyoLTphrvAgng-gDPC-x7ckBvawZVR-Kq2NGT9xpR-18c7aDU" />
                                            <blockquote className="text-main-text border-l-2 border-accent pl-4 italic text-base">
                                                "The exhibition is a quiet storm, a subtle yet powerful collection that resonates long after you leave."
                                            </blockquote>
                                            <a className="text-sm font-bold text-accent hover:underline group inline-flex items-center gap-1" href="#">Read Full Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}