import Footer from "~/components/footer";

export default function Error() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <h1 aria-hidden="true" className="font-display text-[40vw] font-black text-gray-200/5 dark:text-white/5 select-none">404</h1>
                </div>
                <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
                    <h1 className="font-display text-7xl font-bold tracking-tighter text-primary sm:text-8xl lg:text-9xl">404</h1>
                    <div className="mt-6 w-full">
                        <p className="font-display text-3xl font-black leading-tight tracking-tight text-gray-800 dark:text-white sm:text-4xl">Lost in the Gallery</p>
                        <p className="font-display mt-2 text-base font-normal leading-normal text-gray-600 dark:text-[#b7b29e]">The piece you were looking for seems to have been misplaced.</p>
                    </div>
                    <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
                        <button className="font-display flex h-12 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-[#171611]">
                            <span className="truncate">Return to Home</span>
                        </button>
                        <button className="font-display flex h-12 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200/80 px-5 text-base font-bold leading-normal tracking-[0.015em] text-gray-800 dark:bg-[#383429] dark:text-white">
                            <span className="truncate">Browse Portfolio</span>
                        </button>
                    </div>
                    <div className="mt-10 w-full max-w-sm px-4 py-3">
                        <label className="flex h-12 w-full min-w-40 flex-col">
                            <div className="flex h-full w-full flex-1 items-stretch rounded-full">
                                <div className="flex items-center justify-center rounded-l-full border-none bg-[#383429] pl-4 text-[#b7b29e]">
                                    <span className="material-symbols-outlined" data-icon="MagnifyingGlass">search</span>
                                </div>
                                <input className="form-input h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full border-l-0 border-none bg-[#383429] px-4 pl-2 text-base font-normal leading-normal text-white placeholder:text-[#b7b29e] focus:border-none focus:outline-0 focus:ring-0" placeholder="Search for artwork..." value="" />
                            </div>
                        </label>
                    </div>
                    <div className="mt-4 flex items-center gap-6">
                        <a className="font-display text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-[#b7b29e] dark:hover:text-primary" href="#">Portfolio</a>
                        <a className="font-display text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-[#b7b29e] dark:hover:text-primary" href="#">About</a>
                        <a className="font-display text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-[#b7b29e] dark:hover:text-primary" href="#">Contact</a>
                    </div>
                </div>
            </div>
            <footer className="bg-secondary/5">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-10 sm:py-24">
                <div className="grid grid-cols-1 gap-12 border-b border-primary/20 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <div className="size-7 text-accent">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-text-main">Aurelia Sinclair</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-secondary/80">Contemporary abstract artist exploring the dance between color, light, and emotion.</p>
                    </div>
                    <div className="flex flex-col sm:items-start">
                        <h3 className="font-bold text-text-main">Explore</h3>
                        <nav className="mt-4 flex flex-col gap-3">
                            <Link to={"/portfolio"} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Portfolio</Link>
                            <Link to={"/profile"} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">About the Artist</Link>
                            <Link to={"/exhibitions"} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Exhibitions</Link>
                            <Link to={"/contact"} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Commissions</Link>
                            <Link to={"/contact"} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Contact</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-text-main">Connect</h3>
                        <div className="mt-4 flex flex-col gap-3">
                            <Link to={""} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Instagram</Link>
                            <Link to={""} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">Behance</Link>
                            <Link to={""} className="text-sm text-secondary/80 transition-colors duration-300 hover:text-accent">LinkedIn</Link>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <h3 className="font-bold text-text-main">Join the Newsletter</h3>
                        <p className="mt-4 text-sm leading-relaxed text-secondary/80">Receive updates on new works, studio insights, and upcoming exhibitions.</p>
                        <form className="mt-4 flex w-full">
                            <label className="sr-only" htmlFor="email-address">Email address</label>
                            <input className="w-full min-w-0 flex-1 rounded-l-md border-primary/30 bg-background-main px-3 py-2 text-sm placeholder:text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/50" id="email-address" name="email-address" placeholder="Enter your email" type="email" />
                            <button className="flex h-10 items-center justify-center rounded-r-md bg-primary px-4 text-sm font-bold text-white transition-all hover:brightness-110" type="submit">
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="pt-8 text-center sm:flex sm:items-center sm:justify-between">
                    <p className="text-xs text-secondary/60">© 2024 Aurelia Sinclair. All Rights Reserved.</p>
                    <div className="mt-4 flex justify-center gap-x-6 sm:mt-0">
                        <Link to={""} className="text-xs text-secondary/60 transition-colors hover:text-accent">Pricy</Link>
                        <Link to={""} className="text-xs text-secondary/60 transition-colors hover:text-accent">Tervice</Link>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}