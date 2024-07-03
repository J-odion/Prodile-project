import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import z from 'zod';
import { useRouter } from 'next/router';
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema } from '@/lib/formSchema';
import { useToast } from '@/components/ui/use-toast';
import FormRender from '@/components/FormRender';
import CustomButton from '@/components/CustomButton';
import Link from 'next/link';
// import GoogleSignInButton from '@/components/GoogleSignInButton';

const Login = () => {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
        console.log(data);
        toast({
            title: 'Login successful',
            description: 'You have successfully logged in',
            variant: 'default',
        });
        router.push('/dashboard');
    }

    return (
        <div className="flex h-screen">
            <div className=" w-2/3 flex flex-col justify-center px-[16rem]">
                <h1 className="text-4xl font-semibold mb-2 text-[#0C1421]">Welcome back 👋</h1>
                <p className="text-[--prodile-text-darkBlue] font-normal text-xl mb-6">
                    Today is a new day. It's your day. You shape it.
                    Sign in to start managing your projects.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormRender
                                    placeholder="Enter email"
                                    field={field}
                                    label='Email Address'
                                />
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormRender
                                    placeholder="Enter password"
                                    field={field}
                                    label='Password'
                                    type="password"
                                />
                            )}
                        />
                        <CustomButton type="submit" className="w-full bg-[--prodile-yellow] h-[2.7em] rounded-xl text-xl font-normal text-white py-4  mt-10">
                            Login
                        </CustomButton>
                    </form>
                </Form>

                <div className="mt-4 flex items-center justify-end">
                    <Link href='/auth/forgot-password' className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
                </div>
                <div className="mt-6">
                    {/* <GoogleSignInButton /> */}
                    Google signin button component
                </div>
                <div className="mt-4 text-center">
                    <p className="text-lg font-normal">
                        <span className='text-[--prodile-text-darkBlue]'>Don't you have an account? </span><Link href="/auth/signup" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>

            <div className="w-1/3 relative">
                <Image src="/images/authBg.png" layout="fill" objectFit="cover" alt="Background Image" />
                <div className="absolute inset-0 flex flex-col items-center text-white p-8 my-14 space-y-40">
                    <Image src="/images/prodile-logo-white.svg" alt="prodile logo" height={60} width={260} />
                    <div className='flex flex-col items-center gap-4'>
                    <h1 className="text-4xl font-bold mt-8 text-[--prodile-yellow] capitalize">Agriculture matter</h1>
                    <h3 className="text-2xl font-semibold text-[44px] mt-4">Good production</h3>
                    <p className="text-center mt-4 text-[#BDBDBD] font-normal text-lg">
                        Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                        In on my jointure horrible margaret suitable he speedily.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
