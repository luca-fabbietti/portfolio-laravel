import AppearanceTabs from '@/components/appearance-tabs';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { type MenuComponent } from '@/types';
import { type ReactNode } from 'react';
interface PortfolioLayoutProps {
    children: ReactNode;
}

const menuComponents: MenuComponent[] = [
    {
        title: 'About',
        href: '/',
    },
    {
        title: 'Career',
        href: '/career',
    },
    {
        title: 'Contact',
        href: '/',
    },
];

const columnClasses = ' px-4 md:px-20 lg:px-40 xl:px-80';

export default function PortfolioLayout({
    children,
    ...props
}: PortfolioLayoutProps) {
    return (
        <div
            {...props}
            className={'flex h-dvh w-full flex-col justify-between'}
        >
            <div
                className={
                    'flex items-center justify-between border-b bg-primary-foreground py-4' +
                    columnClasses
                }
            >
                <div>
                    <Navbar menuComponents={menuComponents} />
                </div>

                <div>
                    <AppearanceTabs />
                </div>
            </div>
            <div className={columnClasses}>{children}</div>
            <div className={'py-4' + columnClasses}>
                <Footer menuComponents={menuComponents} />
            </div>
        </div>
    );
}
