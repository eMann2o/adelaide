export default function Portfolio() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-primary-text dark:text-background-light">
            <div className="relative flex min-h-screen w-full flex-col">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-secondary-text/20 py-6">
                            <div className="flex items-center gap-3">
                                <div className="size-6 text-primary-text dark:text-background-light">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="text-primary-text dark:text-background-light text-xl font-bold leading-tight">Artist Name</h2>
                            </div>
                            <nav className="hidden items-center gap-8 md:flex">
                                <a className="text-primary-text dark:text-background-light text-sm font-medium leading-normal transition-colors hover:text-primary-text/70 dark:hover:text-background-light/70" href="#">Home</a>
                                <a className="text-primary-text dark:text-background-light text-sm font-bold leading-normal" href="#">Portfolio</a>
                                <a className="text-primary-text dark:text-background-light text-sm font-medium leading-normal transition-colors hover:text-primary-text/70 dark:hover:text-background-light/70" href="#">About</a>
                                <a className="text-primary-text dark:text-background-light text-sm font-medium leading-normal transition-colors hover:text-primary-text/70 dark:hover:text-background-light/70" href="#">Contact</a>
                            </nav>
                        </header>
                        <main className="py-16 sm:py-24">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="flex max-w-2xl flex-col gap-4">
                                    <h1 className="text-primary-text dark:text-background-light text-5xl font-black leading-tight tracking-tighter md:text-6xl">Portfolio</h1>
                                    <p className="text-secondary-text text-base font-normal leading-relaxed">A concise, centered artist statement or introductory paragraph introducing the collection's theme and the artist's focus.</p>
                                </div>
                            </div>
                            <div className="sticky top-0 z-10 border-b border-secondary-text/20 bg-background-light/80 py-4 backdrop-blur-sm dark:bg-background-dark/80 mt-12">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-text px-5 text-sm font-medium text-background-light dark:bg-background-light dark:text-primary-text">All</button>
                                        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent px-5 text-sm font-medium text-secondary-text ring-1 ring-inset ring-secondary-text/50 transition-colors hover:bg-primary-text/10 dark:hover:bg-background-light/10">Paintings</button>
                                        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent px-5 text-sm font-medium text-secondary-text ring-1 ring-inset ring-secondary-text/50 transition-colors hover:bg-primary-text/10 dark:hover:bg-background-light/10">Sculptures</button>
                                        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent px-5 text-sm font-medium text-secondary-text ring-1 ring-inset ring-secondary-text/50 transition-colors hover:bg-primary-text/10 dark:hover:bg-background-light/10">2023</button>
                                        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent px-5 text-sm font-medium text-secondary-text ring-1 ring-inset ring-secondary-text/50 transition-colors hover:bg-primary-text/10 dark:hover:bg-background-light/10">2022</button>
                                    </div>
                                    <p className="text-secondary-text text-sm font-normal leading-normal">Showing 24 works</p>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ ['--masonry-gap' as any]: '1.5rem', columnGap: 'var(--masonry-gap)' }}>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="Abstract painting with yellow, blue, and red strokes on a white canvas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNEsffXJcD9YciUI-2ZlJAFh9GrwXsXZi0C0BrPo1KiT6c5of7On6YBSpWdrpVCiUYbW0JT0heQyaMJN5wWMT5XT6wVgB3TSogN2BqPRAWmp96GOZwa4uXIzlribP_XFTAroWOMIM5PcZq2q_sN5jCnf-HqQkcf8KWw8F1Pfw-AvqRrpGl-7aFaOcJ0fQB1sPNDWLtbKjg1AykGEQv_oJAiuZuu-YRgkFf_9C8FJNc2JSEFgfsbF-OX4XvQLJ4OW4Yf-S3xSiDCDo" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Chromatic Dream</h3>
                                        <p className="text-sm text-secondary-text">Oil on Canvas, 2023</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="Vibrant painting of flowers in a vase with intricate details and colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACPwbPFi-UTZT9DAAmBEkJxY_sM_5rhQHZe31ura7PwKa9S_VSWHeU304JEvhL6KwUsJF3laMKafsjVZO5gCjaPk0WR9wJEzQJgxJ1I8czviewyuEgm3A7dCA2iOz7EA4ectvTteOtIylLkkHULsltOinJ1ryW1XRaOg4o8ZmWRs3pk5BO_ttTf_AHktrtDx56dpBFoMVZDsCBXMHIt500k19UTjro6RNxwz8Slc_IDcman_bIBpUsNIJVsUVZN_y9KwKGHo0nMAA" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Ephemeral Bloom</h3>
                                        <p className="text-sm text-secondary-text">Acrylic on Wood, 2022</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="Close-up of a textured abstract painting with thick layers of white and gray paint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY3z8DJY-TCnbKQA5eQoNGler7C4yhoX06H3gKopg8bAFW22lYwwJs8-BJGF2-SFDxyQnK0UX6vfS0CfUUS8xKM2liyPIp8yTQ7KzGtkccTO3QL8Ln5XYuF1ZO0Z5rrM0EH7IawLyLNSpisbMvPe2PH4lBV6uf7OyRd3fYlQLDVEkmt81Qhr2yFgCJFBq7k9ZiJgnxya3npoBuVf30FNyUKvairKQRLqKQU9tYVpGtdDG1SEPinIAxZC9rLYM0VwuDP0L-adqhwWQ" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Winter's Breath</h3>
                                        <p className="text-sm text-secondary-text">Mixed Media, 2023</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="A bronze sculpture of a contorted human figure on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4WhJ2O_WhvRops-VXPw15R7PNRsOPtRy91YXfsNoVuDKc7ZBSmikW2aAgvB4SiWsTzSxnIrrOFyI8j35KQNZDt5C4V3l-kCzeV9EQ7VUiEcYcBWcOw_10B1wfF3oRXIa1Vh0ZrDFkL_PaomF2mmcIphwkw4ZfItbydcBG-IPCZSH4ufbD8NuBaB_YhVzsQzI9mbwG0kabrL8HrTQO2goCNry1A0nDJtrtaMOiMj_FqNC26kuUhyuaJ3IIbLNHpIVQD-soKqR5BHM" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">The Thinker</h3>
                                        <p className="text-sm text-secondary-text">Bronze Sculpture, 2021</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="Abstract art with swirling blue, green, and gold colors, resembling a galaxy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAZmvFegdcLXrFc3dy_MmPBf-ts4JoicdwRXHa95e12-8uVH1-xQbmBrZf7TCKUdtk188BsAN9IY0u1EsYqjcka6DZsUzypdoX1Pjat6aM2S7yYWBNNgv27yMwp7T7XTkKuzcKjzjhySQ8Zr1pRn3eJUvavSwa5XTBbcBl5mLr4F-9hMJAslbpTLAqzX3NAQYEtog2dqDzg7ZchI8c60uCcOqxgCllugLAK7nFFSmwGtfQrXvvNewD9maZgYNRkseoL7CxPH6c-w" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Cosmic Dance</h3>
                                        <p className="text-sm text-secondary-text">Resin on Canvas, 2022</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="A detailed portrait of a woman with red hair, painted in a classNameical style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHxOP1FshL40OTMAcbvYObxiBB5luMzi22Wv0hxWQ_dltv_easd4HPvUYE3mkR0Jm89xjMppHy0wvmEyWZYE5sRIz8BHkaYkYdBAd2vj3ToMNl3_nd8pblYdlibpZTPziH8HboNLZlohAWLbJuoWoM2yT8uwj__fKBvpGnNDDuw5mmuCoQe0A6nXFDc63g-sFBt1eUAaW8DcaXY86zaXLF1oBsBAvQwDS6DfYaz_L41SEFNfGosUm4RrLkTlNPV52PeXWSbJtpOl0" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Portrait of a Lady</h3>
                                        <p className="text-sm text-secondary-text">Oil on Linen, 2023</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="Modern art piece featuring geometric shapes in black, white, and red" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxt_KLQu7IvInySFyxFg4azGtCQ7yrxv6zF5kmVpRRVUk_PdrJRF9mm5dEU8F6RvmUPB17F8X2De7wi6hmz0-gofEWyNXy4PSoKESie34HWUosIpwB43in252kUU6WV-9nAcOsj5D5aq1uHMEkhU4JyGJKQV8EMNi2yXH4ZsqlttGoO12TQMiIF3QJciYsZkKhSKMPTNKsUr4kcop5XMYp_R6PfdKYmsX_05Xvvyv5XwF-7jC9qkPr-oiMtuLPsUyIlSEvzQttKT4" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Order and Chaos</h3>
                                        <p className="text-sm text-secondary-text">Digital Print, 2023</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden break-inside-avoid" style={{ marginBottom: "var(--masonry-gap)" }}>
                                    <img className="w-full object-cover" data-alt="A ceramic sculpture with a smooth, flowing, organic shape in an off-white color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB62HjvURWUs0wtSrZ7_6iQ0ZtpzO0U57aQTLn0nb-xiZtzg9Nq6wBqVOe_2wqtScp0DMS48P4cKqkeWOSr02J1DObSdCp9DUhyM_IS7UIA23qSnxCgurmw6IgefZIoxiDrhj2EmYVwO6liqNIxdBjEU1FwU55qBV9Cz7LEdiYtBVxOvdHvXsi0W7wnOl4VZuZ-uYFSk12_JZckzvUBXLNERKSYT7QsM5Q_hdp4U0TJZtarmfoq_DY7W_f6jdFygKbp8kAS9DiPdIs" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-overlay p-6 text-background-light opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h3 className="text-xl font-bold">Serenity Form</h3>
                                        <p className="text-sm text-secondary-text">Ceramic Sculpture, 2022</p>
                                        <a className="mt-4 text-sm font-semibold uppercase tracking-wider" href="#">View Details</a>
                                        <button className="absolute right-4 top-4 text-background-light/70 transition-colors hover:text-background-light">
                                            <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 flex justify-center">
                                <button className="flex h-12 items-center justify-center rounded-full bg-primary-text px-8 text-sm font-medium text-background-light transition-opacity hover:opacity-80 dark:bg-background-light dark:text-primary-text">Load More Works</button>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}