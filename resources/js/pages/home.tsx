import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
export default function Home() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <PortfolioLayout>
                <div
                    className={
                        'flex flex-col items-start justify-center gap-3 py-20 text-left'
                    }
                >
                    <div className={'flex size-28 items-center justify-center'}>
                        <img
                            src="https://picsum.photos/1000/1000"
                            alt="Image"
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className={'flex items-center justify-center gap-4'}>
                        <h1 className={'text-3xl font-black'}>
                            Luca Fabbietti
                        </h1>
                        <a
                            href="https://www.linkedin.com/in/luca-fabbietti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden items-center justify-center rounded-full bg-primary px-2 py-1 font-mono text-xs font-bold whitespace-nowrap text-primary-foreground ring-offset-background transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:flex"
                        >
                            Available
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luca-fabbietti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Available"
                            className="flex rounded-full transition-all duration-300 ease-in-out hover:scale-105 md:hidden"
                            data-state="closed"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-badge-check size-6 fill-blue-300 stroke-[1.5] dark:fill-blue-400"
                            >
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                        </a>
                    </div>
                    <p
                        className={
                            'mb-8 max-w-2xl text-lg text-muted-foreground'
                        }
                    >
                        This is a simple portfolio website built with React,
                        Inertia.js, and Tailwind CSS. Explore my projects,
                        skills, and experience.
                    </p>
                </div>
            </PortfolioLayout>
        </>
    );
}
