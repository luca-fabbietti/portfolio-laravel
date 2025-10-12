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

export default function Home() {
    return (
        <>
            <Head title="Welcome" />
            <PortfolioLayout>
                <div
                    className={
                        'flex flex-col items-start justify-center gap-4 text-left'
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
                        <div className="max-w-2xl space-y-4 text-lg font-medium text-muted-foreground">
                            <p>
                                Hi 👋! I’m Luca, a Backend Developer with over 4
                                years of experience building scalable,
                                high-performance web applications.
                            </p>
                            <p>
                                I specialize in PHP and Laravel, designing
                                robust architectures and crafting efficient,
                                reliable databases that keep systems running
                                smoothly. Beyond development, I manage servers,
                                containers, CI/CD pipelines, and observability
                                tools, ensuring stable and secure
                                infrastructure.
                            </p>
                            <p>
                                I’m passionate about creating elegant,
                                user-focused digital products that blend
                                technical excellence with great user experience.
                                Let’s connect and collaborate on building
                                something exceptional.
                            </p>
                        </div>
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

function IconLinkComponent({ iconLink }: { iconLink: IconLink }) {
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
