import Footer from "~/components/footer";

export default function Contact() {
    return (
        <div className="font-display bg-background text-text-main">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden group/design-root">
                <div className="layout-container flex h-full grow flex-col">
                    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-text-main/10">
                        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                            <a className="text-xl font-black tracking-tighter text-text-main" href="#">ARTIST NAME</a>
                            <nav className="hidden items-center space-x-8 lg:flex">
                                <a className="text-base font-medium text-text-secondary hover:text-accent transition-colors" href="#">Portfolio</a>
                                <a className="text-base font-medium text-text-secondary hover:text-accent transition-colors" href="#">About</a>
                                <a className="text-base font-medium text-text-secondary hover:text-accent transition-colors" href="#">Exhibitions</a>
                                <a className="text-base font-medium text-accent" href="#">Contact</a>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <button className="hidden lg:inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Inquire
                                </button><button aria-label="Open menu" className="lg:hidden">
                                    <span className="material-symbols-outlined text-3xl text-text-main">menu</span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1">
                        <section className="px-4 py-16 md:px-8 md:py-24 lg:px-16">
                            <div className="mx-auto max-w-6xl">
                                <div className="mb-12 text-center md:mb-16">
                                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-main sm:text-5xl md:text-6xl">Get in Touch</h1>
                                    <p className="mt-4 max-w-2xl mx-auto text-base font-normal leading-normal text-text-secondary">For inquiries, commissions, or general questions, please use the form below or contact me directly. I look forward to hearing from you.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                                    <div className="lg:col-span-3">
                                        <form action="#" className="space-y-6" method="POST">
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                <label className="flex flex-col">
                                                    <p className="text-base font-medium leading-normal pb-2 text-text-main">Full Name</p>
                                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:ring-0 h-14 placeholder:text-text-secondary/70 p-[15px] text-base font-normal leading-normal" placeholder="Enter your full name" type="text" />
                                                </label>
                                                <label className="flex flex-col">
                                                    <p className="text-base font-medium leading-normal pb-2 text-text-main">Email Address</p>
                                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:ring-0 h-14 placeholder:text-text-secondary/70 p-[15px] text-base font-normal leading-normal" placeholder="Enter your email" type="email" />
                                                </label>
                                            </div>
                                            <label className="flex flex-col">
                                                <p className="text-base font-medium leading-normal pb-2 text-text-main">Subject</p>
                                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:ring-0 h-14 placeholder:text-text-secondary/70 p-[15px] text-base font-normal leading-normal" placeholder="e.g., Commission Inquiry" type="text" />
                                            </label>
                                            <label className="flex flex-col">
                                                <p className="text-base font-medium leading-normal pb-2 text-text-main">Message</p>
                                                <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-main focus:ring-0 min-h-36 placeholder:text-text-secondary/70 p-[15px] text-base font-normal leading-normal" placeholder="Write your message here..."></textarea>
                                            </label>
                                            <div>
                                                <label className="flex items-center gap-x-3 py-3">
                                                    <input className="checkbox-custom h-5 w-5 rounded border-2 bg-transparent focus:ring-0 focus:ring-offset-0" type="checkbox" />
                                                    <p className="text-base font-normal leading-normal text-text-secondary">Subscribe to the newsletter for studio updates and exhibition news.</p>
                                                </label>
                                            </div>
                                            <div>
                                                <button className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="lg:col-span-2 space-y-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <span className="material-symbols-outlined text-accent text-3xl">mail</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg text-text-main">Email</h3>
                                                    <a className="text-text-secondary hover:text-accent transition-colors" href="mailto:hello@artistname.com">hello@artistname.com</a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <span className="material-symbols-outlined text-accent text-3xl">phone</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg text-text-main">Phone</h3>
                                                    <a className="text-text-secondary hover:text-accent transition-colors" href="tel:+1234567890">+1 (234) 567-890</a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <span className="material-symbols-outlined text-accent text-3xl">location_on</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg text-text-main">Studio</h3>
                                                    <p className="text-text-secondary">123 Art Avenue, Creativity City, 10101</p>
                                                    <a className="mt-1 inline-block font-medium text-accent hover:underline" data-location="Creativity City" href="#">Get Directions</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-lg border border-text-main/10 bg-white/50 p-5">
                                            <h4 className="font-semibold text-text-main">Typical Response Time</h4>
                                            <p className="mt-1 text-text-secondary">Usually responds within 2-3 business days.</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3 text-text-main">Follow Me</h3>
                                            <div className="flex space-x-4">
                                                <a className="text-text-secondary hover:text-accent transition-colors" data-alt="Instagram social media link" href="#">
                                                    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 15.098 2 14.744 2 12.315s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.902 2.013 9.256 2 11.685 2h.63zM12 6.865a5.152 5.152 0 100 10.304 5.152 5.152 0 000-10.304zM12 15.318a3.318 3.318 0 110-6.636 3.318 3.318 0 010 6.636zM18.205 6.99a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill-rule="evenodd"></path>
                                                    </svg>
                                                </a>
                                                <a className="text-text-secondary hover:text-accent transition-colors" data-alt="Pinterest social media link" href="#">
                                                    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.344-.595-2.2-2.647-2.2-4.21 0-3.41 2.51-6.217 6.945-6.217 3.658 0 6.169 2.611 6.169 5.775 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.29-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white/50 px-4 py-16 md:px-8 md:py-24 lg:px-16">
                            <div className="mx-auto max-w-6xl">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Latest on Instagram</h2>
                                </div>
                                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
                                    <a className="group block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Abstract painting with swirls of orange and blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUa58rr8RZ8aaiPglA04Mxw___9GR4k4wBG-P8zbktj7Mh9NgmSGRosfaZ6mAk18m-ix6CBy0ESCJcxMKteYmUb8nrTct_RkI_zI5OBMxqwf8iotswhhdKpX1v_3Q1hiDbl-OXWYq7A32GensQLj3iI0zgByept0uZhDCBOngs3Pob7y3wKKeI0YvXtlvFLZ7VL6bFh-R6_KH16khzIX-Jv6GhWIiFDh1QeRSCalddRYG9eerK-jG0smgPERO1YGbX_hR-_KHz_ms" />
                                    </a>
                                    <a className="group block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Vibrant still life painting of flowers in a vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6AfUitYUdHh18fN6a8e57gBVLhQekWm8_T70lp4yYTvX9m64PLG_b3Q9fZx3WTVwuy9aoPi6S7_UcX4Ql3k7JQSICr00JOERRjQfSzi9JaqwVZT9tQitdSGDCPOs3UcpYEDWdpTCIZxoRMssm6H3uRRAWaoRbM5sX2h_2OvTlpqw05psiN1XAHV5CDXowPFDN9Q2ZdNNcC6HJf5fqXmVyqcSzEWdOnRR0aYZcSLv27WPmIRLsIIyDzoPY0FCI-C_fBp1jpIZxOMA" />
                                    </a>
                                    <a className="group block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Close up detail of a textured abstract artwork" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBol8sKEmvlAuTKTk0d2UqEr1x37FLaOZau7hFijFeYVgpWVhkQ6j-Q1B3YIDDEngd0QQeDm310aQswnRqZeeCAFsG4st0rRaz5RKjjEkIn6EACR8OWeEa3j-9HVXigkF0DdzyKVMGPY8K9tGTwbt5VZGYQoJ6_MeOgKVJE8MT8yB1EYa4bNRyfaX8ep7_NmmPxGUq00Rejx1m876-wFgXC1jUuKqrFHkMbDo22E0frxwnFDJY4ZoNbmVVhRLjq5PevQCWr0Q2nEKI" />
                                    </a>
                                    <a className="group hidden md:block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Artist's studio with canvases and paint brushes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFHnidlNKvevYLOseRLSk0I6fBeqRQwBsrDG0ba5DCWkxmpq577aFDBgfWooqFkniTU2j4u-rJBoMnDYZrd-h18X-Y4pKwHSmwpZFvYo01x3vakGD9HHA6YLJj31Zdj67H3HmMk6Ucu2NWvgsFkGmhgF0lcOf2jyfmKARGnlAV7zWHWyptaEGzU8AJ3KdmXpurhiEH89u-BwQgIoIhgStf4TiOa7ASgyiCjoSoHkxCujjOQyiXrKvHDmGu8RFyd27oo1dUbFSYCLs" />
                                    </a>
                                    <a className="group hidden md:block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Monochromatic abstract piece with black and white tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWI4gLqP16bdjlmjHC_iePn4vTBC4s4Z4DjbNXESlARwvcheDwDzew94NsBKtFFvBE0rYNrQQTVPW026waYDWEmW_dYnE_Jdt4tuk7kAUVy8_dpnQX-QoZtTr_Xbd5BVwM9iePQwDLtUYfrd3B_VrwfWoASDg--cZ8m_vSQZgxpTNJ5Fk9epXPqFelUbbYTFCbg6sTiQ2qjjqdXs0fgP_V-D15BDpS7TOHemiDEJtlAxmex4NKJF_Q7RS8H-vN_c31HpDJWO8HVus" />
                                    </a>
                                    <a className="group hidden md:block overflow-hidden rounded-lg" href="#">
                                        <img className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Colorful geometric abstract painting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9aC-T6t8NmlsLHXrU459VusUgZ2R5FYRCEY9JggVWV0uPiHzLndcAWsfBH933bFLuVcRH7goisNBEW4gm7bpf7LK5WCp64wA2zMHj63FxExNoE7tS7W73ZntWfVU86RvJtZIiCQ0Fz-baLmUumq_BsozLu55EuMd7kra5eLWFx2l4lG5SlFd4f9anV5MZSUz0yoLaLfL-icL2usJOSUPgzAU8tC5VlWhYrSkw95YJkJHNDu_5AJfSm4BacpQ2iaZzFi28WH3TQg" />
                                    </a>
                                </div>
                                <div className="mt-12 text-center">
                                    <a className="inline-block rounded-lg border border-primary px-8 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">Follow on Instagram</a>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            </div>

        </div>
    )
}