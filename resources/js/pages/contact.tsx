import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
import { CiMail } from 'react-icons/ci';

export default function Contact() {
    return (
        <>
            <Head title="Welcome" />
            <PortfolioLayout>
                <div
                    className={
                        'flex flex-col items-start justify-center gap-4 py-20 text-left'
                    }
                >
                    <div className={'flex items-center justify-between gap-4'}>
                        <CiMail className={'size-8'} />
                        <h1 className={'text-3xl font-bold'}>Contact me</h1>
                    </div>
                    <p className={'text-lg'}>
                        Feel free to reach out to me for questions, inquiries,
                        or collaborations. Open to new opportunities and
                        challenges.
                    </p>
                </div>
            </PortfolioLayout>
        </>
    );
}
