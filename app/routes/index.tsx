export default function Homepage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-secondary/80 dark:text-background-light/80">
            <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
                <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 lg:px-16 py-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm transition-colors duration-300">
                    <a className="flex items-center gap-4 text-secondary dark:text-background-light" href="#">
                        <h2 className="text-xl font-bold font-serif-display leading-tight tracking-[-0.015em]">Olivia Chen</h2>
                    </a>
                    <nav className="hidden md:flex items-center gap-10">
                        <a className="text-secondary dark:text-background-light text-sm font-medium leading-normal hover-underline-accent" href="#">Work</a>
                        <a className="text-secondary dark:text-background-light text-sm font-medium leading-normal hover-underline-accent" href="#">About</a>
                        <a className="text-secondary dark:text-background-light text-sm font-medium leading-normal hover-underline-accent" href="#">Contact</a>
                    </nav>
                    <button className="md:hidden text-secondary dark:text-background-light">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </header>
                <main className="flex flex-col">
                    <section className="flex min-h-screen flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center" data-alt="Abstract painting with swirling blues and golds, evoking a sense of calm and movement." style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuyGGDS3HSfb4WjuXzsoIZwFkY67AuaubzH5UgnYt5AFC6-9RF9ZKN51IHALYqd20aBpiOcsXOuWk8qKeb2htDHBi4t2x7Asqw63ot2GKeY2sRzNtvnPV4FTIixmabeOKjD1i5WVD-LHKEBQjs01wt39aCb5eFnRQ2femIQbnhQmTYWScmqPgBkgrQgGfK1IhRKGycIaVLJpTKHLbpwcCJ2hq6UmsFNWlKACFRG59M_-TuW2-i0cGKwNzCtT1F_FpTaLBVy5u7SHk");' }}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white text-5xl font-black font-serif-display leading-tight tracking-tight md:text-7xl">
                                Olivia Chen
                            </h1>
                            <h2 className="text-white text-base font-normal leading-normal md:text-lg">Contemporary Painter &amp; Mixed Media Artist</h2>
                        </div>
                    </section>
                    <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
                        <section className="py-20 md:py-32 bg-tertiary/[.15] -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16">
                            <div className="mx-auto w-full max-w-[1280px]">
                                <h2 className="text-secondary dark:text-background-light text-3xl font-bold font-serif-display leading-tight tracking-tight text-center mb-12">Featured Works</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="group relative overflow-hidden rounded-lg">
                                        <img className="w-full h-full object-cover aspect-[4/5] transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Abstract painting titled 'Serenity in Blue' with cool tones and soft brushstrokes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1zO2BRYjcIYZbQ0Qhc9AXrS8FBHbqtW8YPgXvhk3gSupYbJquHnJsKZC9F6p4DkP66jY7NCEQevlRyRkeRARS8ANNilyWrfDL8FYi0-l-wEryzeMQA758r34AQfl9MNpww6HI2DmkfgkSpkZta-gcRNq0lyiCVGOPbi03QJ6qxm6rx38FUE4srCStLjiG5f5-6PgB1uAfzQyyv-iosT5DKzLSgCZfbIfVEbjfrJvWhXTyT0h-p7jeV32Z8lQ9RLTB3ylbY6N7VxE" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-white text-lg font-bold leading-tight">Serenity in Blue</p>
                                        </div>
                                    </div>
                                    <div className="group relative overflow-hidden rounded-lg">
                                        <img className="w-full h-full object-cover aspect-[4/5] transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Abstract painting titled 'Golden Hour Fields' with warm yellows, oranges, and deep reds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8qI2DSBPFEesFp7V_YwYYX_5lJ908JIqWN-YQ0Tws7Fp8KlYA9rEUuCVYzYaqJ8K60Yh_XIoFM_mOBAdl-n1RXsFwnBmOOYCxzynJOfZ1ikJkwz1bYYVm8qC4Qb3Cep3-ZUnWJjBksB6vyEBigqgEPN7dCydHfSnRwZuayuKJnyYFZ2eq20brYeU3Yhq7KX3uEI-XP-oiScZAQi9Q_LwOGXEFws1e_q1Cd5J2uVDn3OUPSxtfAMUk4sRkf-z1EkbhdcBR7PU-Xo" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-white text-lg font-bold leading-tight">Golden Hour Fields</p>
                                        </div>
                                    </div>
                                    <div className="group relative overflow-hidden rounded-lg">
                                        <img className="w-full h-full object-cover aspect-[4/5] transition-transform duration-300 ease-in-out group-hover:scale-105" data-alt="Vibrant abstract painting titled 'Urban Reflection' with chaotic yet harmonious splashes of color." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBplRm-ceHbN3rB37LK9CjyXSRt3EXiHmAUOxZsd4JUksZ7_RAeSGgO_DBpWgie-bleolQ1iIycyCa72avsJ-YaY1-KFj-XyBZSbRiywrmcSj97ioFVbkz9OYlj2m50fv28Wpu6lNl5flfuSjjbdHefCD2aooV8M2vBUUhwhcdg9hhM-Y_x1gdP3hPXu5cHfEmkgdekfHKGQaQr-Pc2ywlJTP79ceZHO1qQYqZ4CIEKKT9wzpEr3bUW59Z7XeIsngbxoX37V4UJI-Y" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-white text-lg font-bold leading-tight">Urban Reflection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-20 md:py-32">
                            <div className="flex flex-col justify-end gap-8 text-center items-center">
                                <div className="flex flex-col gap-4 max-w-3xl">
                                    <h2 className="text-secondary dark:text-background-light text-3xl font-bold font-serif-display leading-tight tracking-tight md:text-4xl">
                                        Interested in a commission or have an inquiry?
                                    </h2>
                                    <p className="text-secondary/80 dark:text-background-light/80 text-base font-normal leading-relaxed">
                                        I'm available for new projects and collaborations. Let's create something beautiful together.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 justify-center mt-4">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">View Full Portfolio</span>
                                    </button>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary/10 dark:bg-background-light/10 text-secondary dark:text-background-light text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/20 dark:hover:bg-background-light/20 transition-colors">
                                        <span className="truncate">Contact the Artist</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="bg-background-light dark:bg-background-dark border-t border-secondary/10 dark:border-background-light/10 py-12">
                        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <p className="text-xs text-secondary/60 dark:text-background-light/60">© 2024 Olivia Chen. All Rights Reserved.</p>
                            <div className="flex items-center gap-5">
                                <a className="text-secondary/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c-4.42 0-8 3.58-8 8a8.003 8.003 0 0 0 4.582 7.168.6.6 0 0 0 .618-.42.6.6 0 0 0-.226-.658A5.961 5.961 0 0 1 6.315 10c0-3.313 2.687-6 6-6s6 2.687 6 6c0 2.22-.602 4.298-2.032 5.922a.6.6 0 0 0-.226.658.6.6 0 0 0 .618.42A8.003 8.003 0 0 0 20.315 10c0-4.42-3.58-8-8-8Z" fill-rule="evenodd"></path><path d="M11.685 15.399a.6.6 0 0 1 .6-.6h.06a.6.6 0 0 1 .6.6v3.468a.6.6 0 0 1-.6.6h-.06a.6.6 0 0 1-.6-.6v-3.468Z"></path><path d="M12.315 22c-1.285 0-2.518-.305-3.618-.855A.6.6 0 0 1 8.25 20.5a.6.6 0 0 1 .445.195A6.803 6.803 0 0 0 12.315 22a6.803 6.803 0 0 0 3.62-.655.6.6 0 0 1 .445-.195.6.6 0 0 1 .447.645c-1.1.55-2.333.855-3.617.855Z"></path></svg>
                                    <span className="sr-only">Artsy</span>
                                </a>
                                <a className="text-secondary/70 dark:text-background-light/70 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm3.23.407c.477.17.94.385 1.38.642a.6.6 0 0 1 .28.94l-1.03 1.833a.6.6 0 0 1-.94.28c-.524-.294-1.09-.51-1.68-.642a.6.6 0 0 1-.48-.718l.47-1.932a.6.6 0 0 1 .7-.403Zm-8.86 1.48a.6.6 0 0 1 .94-.28l1.03 1.833a.6.6 0 0 1-.28.94c-.59.333-1.137.74-1.627 1.22a.6.6 0 0 1-.848-.152l-.91-1.423a.6.6 0 0 1 .09-.765c.49-.48.987-.9.155-1.273Zm3.4 15.54a.6.6 0 0 1 .403.7l-.47 1.932a.6.6 0 0 1-.718.48c-.59-.132-1.157-.348-1.68-.642a.6.6 0 0 1-.28-.94l1.03-1.833a.6.6 0 0 1 .94-.28c.44.257.897.472 1.375.643Zm5.636-2.545a.6.6 0 0 1 .765.09l.91 1.423a.6.6 0 0 1-.152.848c-.48.48-.996.89-1.558 1.273a.6.6 0 0 1-.94-.28l-1.03-1.833a.6.6 0 0 1 .28-.94c.49-.28 1.037-.687 1.627-1.22ZM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill-rule="evenodd"></path></svg>
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}