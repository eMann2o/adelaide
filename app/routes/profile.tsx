import React, { useState } from "react";
import Footer from "~/components/footer";

export default function Profile() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-background font-display text-text-main">
            <div className="relative w-full overflow-x-hidden">
                <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color py-4">
                            <a className="flex items-center gap-4" href="#">
                                <div className="size-6 text-text-main">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="font-serif text-xl font-bold">Elara Vance</h2>
                            </a>
                            <nav className="hidden md:flex items-center gap-8">
                                <a className="text-sm font-medium hover:text-accent transition-colors" href="#">Work</a>
                                <a className="text-sm font-medium text-accent" href="#">About</a>
                                <a className="text-sm font-medium hover:text-accent transition-colors" href="#">Exhibitions</a>
                                <a className="text-sm font-medium hover:text-accent transition-colors" href="#">Press</a>
                                <a className="text-sm font-medium hover:text-accent transition-colors" href="#">Contact</a>
                            </nav>
                            <div className="flex items-center gap-2">
                                <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-button-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                    <span className="truncate">Inquire</span>
                                </button>
                                <button onClick={() => setOpen(o => !o)} className="md:hidden flex items-center justify-center size-10 rounded-full border border-border-color">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {open && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border-color">
                            <div className="flex flex-col gap-4 p-4">
                                <a className="text-base font-medium hover:text-accent transition-colors" href="#">Work</a>
                                <a className="text-base font-medium text-accent" href="#">About</a>
                                <a className="text-base font-medium hover:text-accent transition-colors" href="#">Exhibitions</a>
                                <a className="text-base font-medium hover:text-accent transition-colors" href="#">Press</a>
                                <a className="text-base font-medium hover:text-accent transition-colors" href="#">Contact</a>
                                <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-button-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity w-full">
                                    <span className="truncate">Inquire</span>
                                </button>
                            </div>
                        </div>
                    )}
                </header>
                <main className="pt-[73px]">
                    <section className="min-h-[calc(100vh-73px)] grid grid-cols-1 lg:grid-cols-2">
                        <div className="h-[50vh] lg:h-full w-full bg-cover bg-center" data-alt="A portrait of the artist Elara Vance in her sunlit studio, looking thoughtfully at the camera." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDihXkkIW0P3HtJaAjnbqmMLyqINVdT07iZebjkFrFwf459_qp8movb8CQW7ldEfwXpR2J55N2uQHw5TMXgxKgXf4zcFjCBNFQNLd9wNldv50u_renVlhUdalX-VDYbP1BCzCYZ75bvR8qx4prPrHxPdxWV4nY5LmNLFL_3s8ZzFvQ1mF20gD4fzLA6_D4Pa23d-VMalQ0nfdaYsxN4P7DbsMSYDFtn3ANHLVNtCxGn28enJci097ySBOlTUQQ8c7ZKqlerUMyDmwg")' }}>
                        </div>
                        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16">
                            <div className="max-w-md w-full flex flex-col gap-8">
                                <div className="flex flex-col gap-3 text-left">
                                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Elara Vance</h1>
                                    <p className="text-text-secondary text-base sm:text-lg">Painter &amp; Sculptor</p>
                                    <p className="text-base leading-relaxed mt-2 text-text-main">A brief, compelling introduction to the artist's discipline and focus. This text provides an immediate sense of their work and artistic identity.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-4 border-t border-border-color">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-text-secondary text-sm">Born</p>
                                        <p className="text-sm text-text-main">London, 1985</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-text-secondary text-sm">Based in</p>
                                        <p className="text-sm text-text-main">New York City</p>
                                    </div>
                                    <div className="flex flex-col gap-1 col-span-2">
                                        <p className="text-text-secondary text-sm">Education</p>
                                        <p className="text-sm text-text-main">MFA, Slade School of Fine Art</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
                            <div className="lg:col-span-2">
                                <p className="text-base lg:text-lg leading-relaxed text-text-secondary">
                                    A well-written, narrative-style biography detailing the artist's journey, influences, and career progression. It delves into the conceptual underpinnings of their work and traces the evolution of their practice over time, highlighting key moments and breakthroughs that have shaped their artistic trajectory.
                                </p>
                                <p className="mt-6 text-base lg:text-lg leading-relaxed text-text-secondary">
                                    This extended biography provides deeper insight into the artist's philosophy and methodology. It discusses specific series of works, exhibitions, and collaborations that have been pivotal to their development. The narrative connects personal history with artistic output, creating a comprehensive portrait of the artist as both an individual and a creative force in the contemporary art world.
                                </p>
                            </div>
                            <div className="mt-12 lg:mt-0">
                                <div className="sticky top-28 space-y-6 p-6 border border-border-color rounded-lg bg-background/50">
                                    <h3 className="font-serif text-2xl font-bold">At a Glance</h3>
                                    <button className="w-full flex items-center justify-center gap-2 text-sm font-bold h-12 px-5 rounded-full bg-button-primary text-white hover:opacity-90 transition-opacity">
                                        <span>Download CV</span>
                                        <span className="material-symbols-outlined text-base">download</span>
                                    </button>
                                    <div className="flex justify-center gap-4 pt-2">
                                        <a className="text-text-secondary hover:text-accent transition-colors" href="#">Instagram</a>
                                        <a className="text-text-secondary hover:text-accent transition-colors" href="#">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white/50 py-16 lg:py-24">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Artist's Philosophy</h2>
                            <p className="mt-6 text-base lg:text-lg leading-relaxed text-text-secondary">
                                A statement from the artist about their creative process, themes, and motivations. This section gives voice to the artist, allowing them to directly communicate the core ideas that drive their work, offering a personal and intimate perspective on their practice.
                            </p>
                        </div>
                    </section>
                    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Exhibition History</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-text-secondary">A curated list of significant solo and group exhibitions.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border-color hidden md:block"></div>
                            <div className="space-y-12">
                                <div className="relative flex flex-col md:flex-row items-center gap-8">
                                    <div className="md:w-1/2 flex md:justify-end">
                                        <div className="w-full md:max-w-sm p-6 border border-border-color rounded-lg md:text-right">
                                            <p className="font-bold text-accent text-lg">2023</p>
                                            <h3 className="font-serif text-xl font-bold mt-1">Echoes in Silence</h3>
                                            <p className="text-sm text-text-secondary mt-1">Solo Exhibition, Gagosian Gallery, New York</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-accent border-4 border-background"></div>
                                    <div className="md:w-1/2"></div>
                                </div>
                                <div className="relative flex flex-col md:flex-row items-center gap-8">
                                    <div className="md:w-1/2 order-last md:order-first"></div>
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-accent border-4 border-background"></div>
                                    <div className="md:w-1/2 flex md:justify-start">
                                        <div className="w-full md:max-w-sm p-6 border border-border-color rounded-lg">
                                            <p className="font-bold text-accent text-lg">2021</p>
                                            <h3 className="font-serif text-xl font-bold mt-1">Form &amp; Void</h3>
                                            <p className="text-sm text-text-secondary mt-1">Group Show, Tate Modern, London</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col md:flex-row items-center gap-8">
                                    <div className="md:w-1/2 flex md:justify-end">
                                        <div className="w-full md:max-w-sm p-6 border border-border-color rounded-lg md:text-right">
                                            <p className="font-bold text-accent text-lg">2019</p>
                                            <h3 className="font-serif text-xl font-bold mt-1">New Horizons</h3>
                                            <p className="text-sm text-text-secondary mt-1">Solo Exhibition, Pace Gallery, Geneva</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-accent border-4 border-background"></div>
                                    <div className="md:w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white/50 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="font-serif text-3xl sm:text-4xl font-bold">Press &amp; Recognition</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center" style={{ filter: 'grayscale(1) opacity(0.6) contrast(0.7)' }}>
                                <img alt="Artforum Logo" className="mx-auto" data-alt="Artforum logo in grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoACJTIav7m_Xtk6-4ffcIwyCoJEcB1dsaFb3bhcJ0sniwQEIdk99XY7mAAq17yFr6KuEvndb--_i2bXXo0J2FNOrwTeG9F-3gjRVvcMEVmb27rMyZsGo_-H6KqCm6nqQw0KtLFlqB1T6kdSz6cHBFGAe3xSVhLb8yNgpsRzJZ9BnCV5Ika9tlkBNSkuaa1L1nZj5DBmVq2Ywa3qObnG-nBx_NN7WpOQ48VLzuNaj4YXMwv4H3fIVOJzsOMcZAAt1tNCCk-PgjPvQ" />
                                <img alt="Frieze Logo" className="mx-auto" data-alt="Frieze magazine logo in grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtzLMTeHBA1da50y2g8J-EffX83IVRNKMrrOhIL3-guMDpN4JbLiNKwEBjFYZUOnGMutg4ajPMIU0yREhiVsqSLcrlzaWy7xNrWpUDTmV4zg8yTDobuFg6A8qERgTMu7QqCfY4rzaTtRy6GhamqwjOVMHsrfXykVKZwqwlGjZaux9iqnNrF3ky6JSeA4glKrAAcNZJpeYNBavD4F9huX0fjOYDPxt433LDshMEP1NAa4AdIB_bTIbRJhgO6cyQIt0oLoDwzyFrkik" />
                                <img alt="The New York Times Logo" className="mx-auto" data-alt="The New York Times logo in grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2l0qZfJcoVbz0-c4AJNkNTFMtkGmXONKRwFl8nx4r1xkDZivlb7Ba9i2cTTCtfYF_3fHaorw2pVp-wFBQSIF_bz6F8VHtWqq_IilJdOCU4YO64EuCVA-HEXxGH-OjKraJIRgAyqvKqLQadNOpgDuXzCuA63EJ4ASLbyGFFqzmLYfItWHcwrPaKLeTX_6A7sDFOZhQa3Pw2GtPIZwVYjz7e8QJNQ26WJaA5JFQ1qxecSJv_tsm7c-UzStEOk9KBUgmb4lD5622JnA" />
                                <img alt="Artnet News Logo" className="mx-auto" data-alt="Artnet News logo in grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2YanKvJYkFEn8J5v_aB4qbMqveDktZtaCLPmOXdDxgZIPDIHEfSgvHs600EM9ZrQ3lH5MhHsP4wUfGyAu5_gQ6Hg6T2RzrSkYVoUVwQ_94p3xQh6CH8udT2F9oX3EukEfYOrvEBuGY6lwCBtH2BUG0gGwCajix8-jpRkeFNY3kTe-gAGlamiXAOMyOoE76osBsjqrEvYBem5k86uSfXM78w9Y9CwNjU78F2PATeyF_7Lep_ARwuX5LBhQle0vb9Xo_DdzNUowRn4" />
                                <img alt="Juxtapoz Logo" className="mx-auto col-span-2 md:col-span-4 lg:col-span-1" data-alt="Juxtapoz logo in grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS7Gq71rWv3JVgqr1FPPgoU5hMP_xIcVue0feMIqa3coKkkDe6rOJrwQQF8U1FqeB55OzoEpGYney_wxx-WZ0YWnh-njfRpQR8UVO4PZmAdPWBlC7BOmUU0jRUFZNaJlIIpojES97-LWZ6xbP_88KHzR5zLGsrL0SUD_5bp_pIUputyNC8Dm9ZNVpSXQXtoR17SiWimCk2pv3K4bsH3GqghJya5oDbY9xl7IpjW74J8NQbIkWvhoOJ7DKwzvP1qGJQw3KbmgSC2eE" />
                            </div>
                            <div className="max-w-3xl mx-auto mt-16 text-center">
                                <blockquote className="text-xl lg:text-2xl font-serif italic text-text-main">
                                    “Vance's work is a profound exploration of memory and material, capturing the ephemeral nature of existence with breathtaking elegance.”
                                </blockquote>
                                <cite className="block mt-4 text-sm not-italic text-text-secondary">— Artforum, 2023</cite>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold">In the Studio</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-text-secondary">A glimpse into the creative process and workspace.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="grid gap-4">
                                <div><img alt="studio image 1" className="h-auto max-w-full rounded-lg" data-alt="A close-up shot of paintbrushes in jars in the artist's studio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfk5HQmF3aDBKRAgDWci_1tuexKiHyW6Aea908F2PMlzjlLAR3PJ5bvTcG-YdSUUHdbVKIdf2EwF8tdCIDYvAJUKLiWNxqUAwOpDGttdmXRbGD_wT-G5c20qIPizxMReO2mxWoehu2LpphLhIQdVN0-4fmiXk0eNcy92DLuPj94fd2_B0ixghjmJiDEiSXK7yXPLGa68TB5oyQAYFdSWgT5GFSgOxS4Q0jd-KDzg_ZXMk7UsvfMmr5ldq1qpzCELXHLeMjSSCE27Q" /></div>
                                <div><img alt="studio image 2" className="h-auto max-w-full rounded-lg" data-alt="A finished abstract painting with vibrant colors leaning against a studio wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACa9UlEI-atFhYTC9HdY5LNecpWNXu_yt6B5Eu275QXBcc_I1acguSCLu41xAvUATnNduw1VgIXphd4Lnxg2yx5fcAef93W0zorRl3lB6bEXjP8p6UThpQ3_yf0OX8yNTR3hS0SD6eXtH35YaLfLfrG1m1ZEsXtLcPQ0UQYzpsKGEpdQNg9v0liFS3HVDiLH6J6zxFwSwo8a35ThJEWzobh7723NQmhqINMzNEpnKEN5ZBu2lZQinZHQI-huwjKkqdrMl4-9UUFpc" /></div>
                            </div>
                            <div className="grid gap-4">
                                <div><img alt="studio image 3" className="h-auto max-w-full rounded-lg" data-alt="The artist's hands covered in clay, working on a sculpture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq91ZAq8V-LNEnaOJZH9p_AZpugB6Lwvge-x9vNMsch_Mkrhr9Zs-DbL5w-Khn33ocRN097goIjiov2T652ghp6wEoRaUO_BZcSdQ2OW7JJj08IS7Lup08EBBHjBmn6p2_8TNaCmSD4iQ57hwmRTotTKJHOzJaPttEILTNqb9dFbXAtQvd0o1A7iV_ORCBp9Vu-ojQsjDuOmjaHK6EhZ-W5X6OyA_4HFzpDXKdVKkbWxVpMyseeYk-y5A5-gPLhOhD5JPvTrfF9A4" /></div>
                                <div><img alt="studio image 4" className="h-auto max-w-full rounded-lg" data-alt="A wide shot of the artist's studio, showing canvases and sculptures in progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPOjDMDPBcPBrr5qN20lxXT-s-sQgV-fSruwARY2Y4He1Yo9HGVQPdOwvHs5oDojq_vYj6FanFCSiSxOZUdZuv7n9ATh9wtFw8TmozxPBLmUWzzXJD-qX2lFrEqy2rA2262TAZIpH3cBYjgjPJ7eS327WJsG-7klEB2JvQb_AermBO_jY5T8nLSWjewx5FfToOQO1S1oopyuiLQ6l9VCM0-p8GpACQK93r0P2r6dHN-STvtQRbArtB7VPHMMMEg-bDlugzAWbyx84" /></div>
                            </div>
                            <div className="grid gap-4">
                                <div><img alt="studio image 5" className="h-auto max-w-full rounded-lg" data-alt="A detailed shot of paint tubes and palettes on a wooden table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbIehqZUS5VifznSZPZ7pBYs_0-Zo5KI49vAs2sD_3mn4EXBzRUu5oYf3I1P-towtEklsouhc-VsXRRNlRf8BQ_gFwNekTgkA31J7kn2p8wPtO2n5VdrObxCW_f7hFUw6ToK0-JrVoC9bir36OvMA2yWwV_or0DbvyDUheu1b_93vUpFTRbYPole21a_BWFI9qfDgkEZGLCXyi5Ye5YMR0BAAfUOIQbp05FxBAVYvG3Drstcc0pcjFFfLiowaiLsVgfYYb6kyM9DM" /></div>
                                <div><img alt="studio image 6" className="h-auto max-w-full rounded-lg" data-alt="A shelf filled with art books and small sculptural studies." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8i7BNYZvgRoic8igFVLdI91q0MYWSxkCcuOEzJqklCNz0aPzyTHtN8tmDCu4WPWDzTLXxH3Om8KuklldoV7dzRKzDIq34Cgesmd5ONR9AJzyU508WP6c6sdQ15kuolcWMNduJOOFmAtmCW45MlcRn3pcenXuDxw3jHrRIUZQrWsrUK5cVEC7ZWhSVh2En520luld6Vo8FuSoZy1Ti_TR8Ln9GriVO2q8lSjVfpX8WCK7SXceWCn0isi8j0ydyq--E5tUdDsv4cUw" /></div>
                            </div>
                            <div className="grid gap-4">
                                <div><img alt="studio image 7" className="h-auto max-w-full rounded-lg" data-alt="Sunlight streaming through a large studio window, illuminating dust motes and a canvas." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbUhIVqX6BXkMg9wz_ACmKs9Gnd_x1n6OXVZserumhF1iLpZBCaLpy9fSuW2rYuALyXJ_y66Bl9DdCRdW6eFVnVZqjl8LA5cv6tuNwxElE07NCL7RV6R7g54nUtTUO4hQPpAU7H5icMdptPdaaaiWeCEtKqMiJNsfvj12konDd4K6roV0lAraVksEp2HN7YN-ovDag6UcoJ0Lt8GeQTb-rFK664OqDx1X7kjXUbKVvJL1_R_LqhM_Q7bD0Fz2eR9b6iC61KURXeE" /></div>
                                <div><img alt="studio image 8" className="h-auto max-w-full rounded-lg" data-alt="The artist standing back and contemplating a large work in progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTBBz4SGs8oeVJ_5oU7h6oMkEOzXKXnqdh-C0sUkwGVKD-x6F_4ltUOvb0p5OYElrqjzBGOUXqAdmPGa3OJTCtVtKGYE6o8MFosohdxCKm690r3anpAeGegYBAIeoqVVsbYjuWC9_F_3swEYGxLAXMeCeBZ5BJgAyDj6uqAmuzaeseOOouNkVbeZ1YvuwLFRQFxQTaezIVTyJ8OOLF8nuEM7ACF003U92gw0AWPQgUvMK-xlX2G5exTE-9fWv2Q2IQqWVmBW4LOc" /></div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>

        </div>
    )
}