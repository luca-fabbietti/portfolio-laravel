import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
import { IoDocumentTextOutline } from 'react-icons/io5';

interface CareerProps {
    company: string;
    role: string;
    period: string;
    description: string;
}

export default function Career({ careers }: { careers: CareerProps[] }) {
    return (
        <>
            <Head title="Career" />
            <PortfolioLayout>
                <div
                    className={
                        'flex flex-col items-start justify-center gap-4 text-left'
                    }
                >
                    <div className={'flex items-center justify-between gap-4'}>
                        <IoDocumentTextOutline className={'size-8'} />
                        <h1 className={'text-3xl font-bold'}>Career & Works</h1>
                    </div>
                    {careers &&
                        careers.map((career: CareerProps, index: number) => (
                            <CareerEntry key={index} careerProps={career} />
                        ))}
                </div>
            </PortfolioLayout>
        </>
    );
}

function CareerEntry({ careerProps }: { careerProps: CareerProps }) {
    return (
        <div
            className={
                'relative flex flex-col items-start border-l-2 border-ring pl-4'
            }
        >
            <div
                className={
                    'absolute top-1.5 -left-2 size-[15px] rounded-full border-3 border-background bg-ring'
                }
            />
            <h3 className={'text-lg'}>{careerProps.company}</h3>
            <h4 className={'text-md font-semibold'}>{careerProps.role}</h4>
            <h4 className={'text-md font-semibold'}>{careerProps.period}</h4>
            <p className={'pt-2'}>{careerProps.description}</p>
        </div>
    );
}
