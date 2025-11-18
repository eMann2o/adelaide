import Footer from "~/components/footer";

export default function Homepage() {
    return (
        <div className="bg-background-main font-display text-text-main">
            <div className="relative flex min-h-screen w-full flex-col">
                <header className="sticky top-0 z-50 w-full bg-background-main/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 sm:px-10">
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                        <a className="flex items-center gap-2" href="#">
                            <div className="size-7 text-accent">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-text-main">Aurelia Sinclair</span>
                        </a>
                        <nav className="hidden items-center gap-x-8 md:flex">
                            <a className="relative text-sm font-medium text-text-main transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-secondary hover:after:w-full" href="#">Portfolio</a>
                            <a className="relative text-sm font-medium text-text-main transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-secondary hover:after:w-full" href="#">About</a>
                            <a className="relative text-sm font-medium text-text-main transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-secondary hover:after:w-full" href="#">Contact</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary/20"><span className="material-symbols-outlined">search</span></button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-secondary/20 md:hidden"><span className="material-symbols-outlined">menu</span></button>
                        </div>
                    </div>
                </header>
                <main className="flex h-full grow flex-col">
                    <section className="relative h-screen w-full">
                        <div className="absolute inset-0 bg-cover bg-center" data-alt="Abstract artwork with flowing golden and dark charcoal strokes." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeKHmLC2zLS8YAfjVp-btptUp25ksYFZa-8-mbSnEnVsmX9ulBuWsQfFZAHQTWJEOEc0y3eEdE3kjdQJzS7sg6P2r8djLfiL2VI6EWGByjdaYOhBPp4J3XqM42OQvUyhIIQ9EWf-MTbvRxdTs92lUE1KoBD_kBhm8YBNoUhfsRivEdNbKj773hVBeBToaUpV-b098wK41M2O_s0DIHvGmYKOTylDNIAhyHbYcfubXWzIGZzPrAA__pAgO5ApH5leArQTCjMgIMlSY");' }}></div>
                        <div className="absolute inset-0 bg-text-main/70"></div>
                        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
                            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-7xl">Aurelia Sinclair</h1>
                            <p className="mt-4 text-lg font-normal leading-normal sm:text-2xl">Exploring the intersection of light and form.</p>
                        </div>
                    </section>
                    <div className="mx-auto w-full max-w-6xl px-4">
                        <section className="py-16 sm:py-24">
                            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                                <div className="order-2 flex flex-col gap-6 md:order-1">
                                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-main">An exploration of emotional landscapes</h2>
                                    <p className="text-base font-normal leading-relaxed text-secondary">I'm Aurelia Sinclair, a contemporary abstract artist working primarily with oil and mixed media. My work is a continuous exploration of emotional landscapes, capturing the transient moments where light, color, and texture converge to tell a story. Each canvas is a dialogue between impulse and intention, a journey into the abstract realms of feeling and memory.</p>
                                    <button className="flex h-12 w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:brightness-110">
                                        <span className="truncate">More About The Artist</span>
                                    </button>
                                </div>
                                <div className="order-1 flex justify-center md:order-2">
                                    <div className="relative aspect-square w-full max-w-sm">
                                        <div className="h-full w-full rounded-full bg-cover bg-center" data-alt="A professional headshot of the artist, Aurelia Sinclair, in her studio." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXY5ZfZRaFPxHiweiemWueGkevfOJBK19bx4KXPIv0HSN20iJ2YceYlIf7gL6xVpvjh91avbe59RtNyaTVy_2PloNfjz_yqYFuYD3gG6r6lxTnB2IIxrDIEgrYUuAeCxJ8e2_eGcWpjlwHGygY1-MIF21ORz0pCFA6Uop2WTCdDHmqWm6LvRRfdVkPzVqHtayu2h8hBC0TvMdOjPuC4a__1Dl52EHoJPxORGglHmIBkCFN-QKmadhQWfn_PdOwV5bMJT-CXqt3r9s");' }}></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 sm:py-24">
                            <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-text-main">Featured Works</h2>
                            <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="Abstract painting with deep blue and gold textures" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHBBwxy85kKpFYdBxblfor4GxqeyKg9gNQY8U3PX7vHIkvnFIutHIvdHuO0Cl8Nq5JT44VXysp4m4RLyg1moZ3qM7GyTvSPNzHQPEp4ETV5ueqJkz7Y4plg5R-3Ee_0KHUcy0V7f2Uv2y4cEPiQrBQMM2gRmw_lBlfnfdJVBuAd4jUdCwDqOPKsivwyabpX6YrH1wYpSHUujQTuBgPBWmTZGGP_L4hAUcqWBpfLL9H34fAzOKaSaUaAP4b9U4XDfJiJgNyVDbp1to" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">Nocturne in Blue</h3>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="Vibrant abstract piece with splashes of red and yellow" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq1Cxo65ZBeLyQ7WvlV_p-pZT6l4uhCaDK_mZPhv88dtQfi0833mnJh9OhntXv4HAsFot8NJkhOCAqrqMvm2a1vw8hbtiiG9OYBh0uTD-mNoxiX7--nVpLG95eiTloO-GVyfHsmG6yjU9sB6hdUBdJxK2WmWcfjjixuSqsW8RKu1cq5l3UcQyOnUWVxzpNEZ6esZGIEnpfY--OzqgtFgQAPgCiTirIalTToPlfhYdjB2AJXqBuIc3tafqqId_mLW2a5oz3lrBd1fk" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">Solar Flare</h3>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="A portrait with surrealist elements in muted tones" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ryswH-4-D7NTxuH9pQ9fJ30q6ZMjJsmpLAzQFT6vOJUAz2eOTbp4c9HDhufXWge-bXrFJ9tAV3HDA3ezkquv8Hj9COLLQQN4mWTWCnbC-OhDJqAGMbQDY3nGyu91IKDRe5eMr2rPk7lN1LXs6i3Q0eBSbrwg8ReP-kL0AR6_Y3hnWWUi9cyRtSc0Fbc6s9QgY4MjQE6lSE1dJns4u8kTLAbBWxOGcMmGLTCtSBPt7ZuvWk7CYVjOVnJl85QcfJBt4vp5YfGmWGg" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">The Observer</h3>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="Monochromatic textured artwork with grey tones" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc0nLPe_VC8WSRQbLAjIJd_Qz3dQ8YItyimUBXiC0U38ix4Nsr5HE1SpD7xFYUVWtTi1Zilt81ABgVm96Lc9FwUkgFj1ZYw-EYZAj9MYpaPSsI0SVFS5rPdsNTloWZZxh0qiP74ybrl40gYkrffYonQejDRWHmB7vsoYOtMqehR3KNqyMgNYROL0zw9TsAF920yJfLxKFV2BOODWKcb0g2DYA1Gky11t4dFN6bL9N_5poMIPK758yRTxvnZNX6tArSatq0vLu3EqQ" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">Ashen Memory</h3>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="A textured abstract piece in earthy tones of brown and green" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnD9KuJqDxmOS0nfDQfwmEou70JTl0RZLB1LnCKoBOXUgmIhN3rkSu5XkDg-EbiDEBPG_bjoDUDBsQO_R6HYhpxDBxYcHTdsan31ZzsWARWBoUn3U8SFniqsvbhkzhn4_sgxHciTOJr_s9aUV416T3qk2_lLwXKrvIvPv23IZt6x7qW0W76QzgO3_3-v-rzc2JXioL8EwXl-BJrrKlnMGxNWQNKOcvO9tLPhliBQuag3e7KoLq79hOLx1qUlhOQJB261PA4lNHUv4" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">Terra Firma</h3>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg break-inside-avoid">
                                    <img alt="Artwork with soft pastel colors and geometric shapes" className="transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORHxGEJZdSg1fp4pA4cK1i-cC3qvRCSqpg8XPMDVA0qPFZt-FaGxB0eMeNndBMbiok1NQT34h-AvP1UmkwtQG_Oz8ma2Rx-omIPWad5nXgtU3Ui_WEoEqz4d_Fopsvv4byzSS2IZr6Ff2i2OcTfPtuO-lawF-fxwQv22K6Woo1CarAJEtRfnpGX_4n-1gGRrlt-SBSJHUpPUaFznieF2Z6zk4ATaZJBG-R8cs_-C-XVz0ltjXdZWC4DHq7HzKgt1Em9EdAWzOwa8" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text-main/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <h3 className="font-bold text-white">Whispers of Dawn</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16 sm:py-24">
                            <h2 className="mb-16 text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-text-main">Exhibition Highlights</h2>
                            <div className="relative">
                                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20"></div>
                                <div className="space-y-16">
                                    <div className="relative flex items-center md:items-start">
                                        <div className="w-1/2 pr-8 text-right md:pr-12">
                                            <p className="font-bold text-accent">2023</p>
                                            <h3 className="mt-1 text-lg font-semibold text-text-main">"Ascension" Commission</h3>
                                            <p className="mt-1 text-sm text-secondary">Corporate Headquarters, NYC</p>
                                        </div>
                                        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background-main bg-primary"></div>
                                    </div>
                                    <div className="relative flex items-center md:items-start">
                                        <div className="w-1/2"></div>
                                        <div className="w-1/2 pl-8 md:pl-12">
                                            <p className="font-bold text-accent">2020</p>
                                            <h3 className="mt-1 text-lg font-semibold text-text-main">Vanguard Artist Award</h3>
                                            <p className="mt-1 text-sm text-secondary">International Contemporary Art Fair</p>
                                        </div>
                                        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background-main bg-primary"></div>
                                    </div>
                                    <div className="relative flex items-center md:items-start">
                                        <div className="w-1/2 pr-8 text-right md:pr-12">
                                            <p className="font-bold text-accent">2018</p>
                                            <h3 className="mt-1 text-lg font-semibold text-text-main">"Ethereal Echoes"</h3>
                                            <p className="mt-1 text-sm text-secondary">Galerie d'Art Moderne, Paris</p>
                                        </div>
                                        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background-main bg-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="bg-primary/10 py-16 sm:py-20">
                        <div className="mx-auto max-w-6xl px-4 text-center">
                            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-main">Bespoke Commissions</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary">Transform your space with a unique piece of art tailored to your vision. I work closely with clients to create bespoke commissions that resonate with their personal aesthetic and environment.</p>
                            <button className="mx-auto mt-8 flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:brightness-110">
                                <span className="truncate">Inquire About a Commission</span>
                            </button>
                        </div>
                    </section>
                    <div className="mx-auto w-full max-w-6xl px-4">
                        <section className="py-16 text-center sm:py-24">
                            <h2 className="mb-2 text-3xl font-bold leading-tight tracking-[-0.015em] text-text-main">Follow The Process</h2>
                            <p className="mb-8 text-secondary">Latest updates from the studio on Instagram <a className="font-semibold text-accent" href="#">@aureliasinciairart</a></p>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div className="group aspect-square overflow-hidden rounded-lg bg-cover bg-center">
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A close-up of wet paint on a canvas, showing texture." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCB_B2or9g0zrn8X7BjQQ0-TC66h8bB1YNLjbjZ8Iq8_KU0SHU0j0zZ2L8NxxoJRA8mKcuTP49GdFrKGoKTMk2Jqxpdxwyxm6vE1UOSE3znUDvZnUO3ExW9hH-dV108VIQIO72m5ULdQ5qW8hDmBkjHyU3YVxHtFiphbhDgZMlepC7EY0zY48sBSKjnjToSh5eg6Tb7rZpnGE9GgunfHIptAnieYywjqN0bpeTe1INzZnoqIIpCaDNrncDlbgT4nkEkRQaoWnm2JBA");' }}></div>
                                </div>
                                <div className="group aspect-square overflow-hidden rounded-lg bg-cover bg-center">
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="The artist's hand holding a palette knife with blue paint." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWmavQhe_9UAd_im1Di-Gfv8oF3E6lSqKXLiZCA6XhvGueRWslt8Gh-wSXVS5NV5yFx3siOybIghlakGZIin2L2RvsY1HcZUNsamucmFOjuHTvlHYZcB8v_v4lSwXnr_jBlM_Hnb2augGeo51rHok8ppWB9K9rqJ_XaMsJZq0uMh1r7BK56_6H6dpKw3QmIIHcp0yXeb-aqr9E9hYyB5vY8M9syZYxU0-fmaeOB2V2FgU0EPM37YGvP5nwLyxs8rxKVLzH_kwxQHM");' }}></div>
                                </div>
                                <div className="group aspect-square overflow-hidden rounded-lg bg-cover bg-center">
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A new, large-scale work in progress on an easel." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAporbz2u7ufe296mjRp3x80YiDi2Kv-J9QMkgGFNiL5EIyAwBa-3mkwlC9-Yih4Ud3LcesbI7mbANiwNE-ODOmV5FyPZxI_BLR_OcoxWJ1Ym2e0O2h3mIZIF8OtpRV5jkCpA6M_oAH0a3TX4yjfPValQkmeludb8IUzONNb8fXfJZTFXhvomLjk0Ub_1o-47iKr0mDaqzMGQqRL5_BhQ5VN6G3QRSchld1KinZxBGtIJlkQgpvp5fhrWzTuAtVsLiwhsPwnbdclXI");' }}></div>
                                </div>
                                <div className="group aspect-square overflow-hidden rounded-lg bg-cover bg-center">
                                    <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A shot of the artist's studio, filled with canvases and art supplies." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLom2kFcXSPsxjwCavUnC2gcYun6GVuwW1rTXYkW3OOyRR-mnWgLK1d53BvJCtxJuVZXkPWQBj6BMKlF_ROQ2bcw6fZS5U_1fAAjMCiNGbdDt25AnmBEhgl0o9trhMsAd7Ucmvrfp1dvlqDjWueVCeV5e0AJG90GLf7FHCpjMkdlSbqnSiBOt_NU4v_O451SS8lV_j5SNdlxgFLhp2Ax3UdAfqGcAH6GJ2zXHDtVhQJxCzmBdPzZFEOm_KRo298N3WAMtsSAMmjDY");' }}></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>

        </div>
    );
}