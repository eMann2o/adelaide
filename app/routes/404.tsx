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
            <Footer />
        </div>
    )
}