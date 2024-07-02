import React from 'react'
import Image from 'next/image'
import CustomButton from '@/components/CustomButton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

// import GoogleSignInButton from '@/components/GoogleSignInButton';

const Success = () => {
    const router = useRouter();

    const handleBacktoLogin = () => {
        router.push('/auth/login')
    }



    return (
        <div className="flex h-screen">
            <div className=" w-2/3 flex flex-col items-center justify-center px-[16rem] gap-10">
                <Image src='/images/success.svg' alt='success icon' width={180} height={180} />
                <h2 className='text-[#4D4D4D] text-4xl font-bold'>Successful</h2>
                <p className='font-normal text-2xl'>You have successfully reset password</p>
                <Button className='bg-[--prodile-yellow] py-4 w-1/2 text-white h-[3em] rounded-xl text-xl font-normal' onClick={handleBacktoLogin}>Back to login</Button>
            </div>

            <div className="w-1/3 relative">
                <Image src="/images/authBg.png" layout="fill" objectFit="cover" alt="Background Image" />
                <div className="absolute inset-0 flex flex-col items-center text-white p-8 my-14 space-y-40">
                    <Image src="/images/prodile-logo-white.svg" alt="prodile logo" height={60} width={260} />
                    <div className='flex flex-col items-center gap-4'>
                    <h1 className="text-5xl font-bold mt-8 text-[--prodile-yellow] capitalize">Agriculture matter</h1>
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

export default Success
