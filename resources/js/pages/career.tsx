import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
import { BadgeCheckIcon } from 'lucide-react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface IconLink {
    href: string;
    label: string;
    icon: React.JSX.Element;
}

const iconsLinks: IconLink[] = [
    {
        href: 'https://linkedin.com/in/luca-fabbietti',
        label: 'LinkedIn',
        icon: (
            <FaLinkedin
                className={'size-8 fill-foreground dark:fill-foreground'}
            />
        ),
    },
    {
        href: 'https://github.com/luca-fabbietti',
        label: 'GitHub',
        icon: (
            <FaGithub
                className={'size-8 fill-foreground dark:fill-foreground'}
            />
        ),
    },
    {
        href: '/contact',
        label: 'E-mail',
        icon: (
            <MdEmail
                className={'size-8 fill-foreground dark:fill-foreground'}
            />
        ),
    },
];

export default function Career() {
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
                        'flex flex-col items-start justify-center gap-4 py-20 text-left'
                    }
                >
                    <div className={'flex items-center justify-center'}>
                        <Avatar className={'size-28 border shadow'}>
                            <AvatarImage src="/android-chrome-512x512.png" />
                            <AvatarFallback>LF</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className={'flex items-center justify-center gap-4'}>
                        <h1 className={'text-3xl font-black'}>
                            Luca Fabbietti
                        </h1>
                        <Button
                            variant="default"
                            size={null}
                            className="hidden rounded-full px-2 py-1 font-mono text-xs font-bold transition-all duration-300 ease-in-out hover:scale-105 md:block"
                            asChild
                        >
                            <a
                                href="https://linkedin.com/in/luca-fabbietti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex"
                            >
                                Available
                            </a>
                        </Button>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="https://linkedin.com/in/luca-fabbietti"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={'Available'}
                                    className="flex rounded-full transition-all duration-300 ease-in-out hover:scale-105 md:hidden"
                                >
                                    <BadgeCheckIcon className="size-6 fill-blue-300 stroke-[1.5] dark:fill-blue-400" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{'Available'}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className={'flex items-center justify-center'}>
                        <p
                            className={
                                'max-w-2xl text-lg font-medium text-muted-foreground'
                            }
                        >
                            Hi, I’m Luca, a Back-end & DevOps Developer with 4+
                            years of experience. I craft resilient services and
                            design reliable databases to keep applications
                            running smoothly. In DevOps, I manage systems,
                            servers, containers, logs, and CI/CD pipelines,
                            ensuring robust, seamless infrastructure. I’m
                            passionate about building powerful, user-friendly
                            products. Let’s connect and talk about our shared
                            passion for creating beautiful digital experiences.
                        </p>
                    </div>
                    <div className={'flex items-center justify-center gap-4'}>
                        {iconsLinks.map((iconLink) => {
                            return <IconLinkComponent iconLink={iconLink} />;
                        })}
                    </div>
                </div>
            </PortfolioLayout>
        </>
    );
}

function IconLinkComponent({ iconLink: iconLink }: { iconLink: IconLink }) {
    return (
        <Button
            variant="outline"
            key={iconLink.href}
            className={'h-auto! rounded-md border border-ring p-2!'}
            onClick={() =>
                window.open(iconLink.href, '_blank', 'noopener,noreferrer')
            }
            aria-label={iconLink.label}
        >
            <div className={'flex items-center justify-center gap-2'}>
                {iconLink.icon}
                <p className={'hidden text-sm font-bold md:block'}>
                    {iconLink.label}
                </p>
            </div>
        </Button>
    );
}
