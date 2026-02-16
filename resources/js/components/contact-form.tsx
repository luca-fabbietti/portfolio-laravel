import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AlertError from './alert-error';
import AlertSuccess from './alert-success';

const formSchema = z.object({
    email: z.email({
        error: 'Must be a valid e-mail',
    }),
    text: z
        .string({
            error: 'Must be a valid text',
        })
        .min(20),
    recaptcha: z.string().min(1, {
        message: 'Please verify that you are human',
    }),
});

export default function ContactForm({ errors, success }: { errors: string[], success: string }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            text: '',
            recaptcha: '',
        },
    });
    function onRecaptchaChange(token: string | null) {
        form.setValue('recaptcha', token || '');
        // form.clearErrors('recaptcha');
    }
    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post('/contact', values);
    }

    return (<>
        {errors && errors.length > 0 && <AlertError errors={errors} />}
        {success && <AlertSuccess success={success} />}
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-lg space-y-8"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="name@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>Your e-mail.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Hi Luca! I would like to talk to you about..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>Your message.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="recaptcha"
                    render={() => (
                        <FormItem className={''}>
                            <FormLabel>Security check</FormLabel>
                            <ReCAPTCHA
                                sitekey={
                                    import.meta.env.VITE_G_RECAPTCHA_SITE_KEY
                                }
                                onChange={onRecaptchaChange}
                                className={''}
                            />
                            <FormDescription>Click to verify.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    </>
    );
}
