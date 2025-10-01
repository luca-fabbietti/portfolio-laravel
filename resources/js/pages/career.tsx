import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
import { IoDocumentTextOutline } from 'react-icons/io5';

interface CareerProps {
    company: string;
    role: string;
    period: string;
    description: string;
}

const careerData: CareerProps[] = [
    {
        company: 'Tech Solutions Inc.',
        role: 'Software Engineer',
        period: 'Jan 2020 - Present',
        description:
            'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
        company: 'Tech Solutions Inc.',
        role: 'Software Engineer',
        period: 'Jan 2020 - Present',
        description:
            'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
        company: 'Tech Solutions Inc.',
        role: 'Software Engineer',
        period: 'Jan 2020 - Present',
        description:
            'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
];

export default function Career() {
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
                        <IoDocumentTextOutline className={'size-8'} />
                        <h1 className={'text-3xl font-bold'}>Career & Works</h1>
                    </div>
                    {careerData.map((career) => (
                        <CareerEntry
                            key={career.company}
                            careerProps={career}
                        />
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
