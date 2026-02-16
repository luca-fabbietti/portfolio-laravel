import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircleIcon } from 'lucide-react';

export default function AlertSuccess({
    success,
    title,
}: {
    success: string;
    title?: string;
}) {
    console.log(success);
    return (
        <Alert variant="default">
            <CheckCircleIcon />
            <AlertTitle>{title || 'Success'}</AlertTitle>
            <AlertDescription>
                <ul className="list-inside list-disc text-sm">
                    <li>{success}</li>
                </ul>
            </AlertDescription>
        </Alert>
    );
}
