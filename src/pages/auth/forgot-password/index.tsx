import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/lib/formSchema";
import { useToast } from "@/components/ui/use-toast";
import FormRender from "@/components/FormRender";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// import GoogleSignInButton from '@/components/GoogleSignInButton';

const ForgotPassword = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleBacktoLogin = () => {
    router.push("/auth/login");
  };

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    console.log(data);
    toast({
      title: "Reset password successful",
      description: "You have successfully reset your password",
      variant: "default",
    });
    router.push("/auth/forgot-password/success");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      <div className="w-full md:w-1/2 hidden md:flex relative">
        <Image
          src="/images/authBg.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <div className="absolute left-6 top-6">
          <Image
            src="/images/prodile-logo-white.svg"
            alt="prodile logo"
            height={20}
            width={150}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 my-14 space-y-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl lg:text-4xl font-bold mt-8 text-[--prodile-yellow] capitalize">
              Agriculture matter
            </h1>
            <h3 className="text-xl lg:text-2xl font-semibold mt-4">
              Good production
            </h3>
          </div>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <p className="text-center mt-4 text-[#BDBDBD] font-normal text-sm lg:text-lg">
            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he speedily.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-14 lg:px-24 py-14 md:py-0">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#0C1421]">
          Reset Pasword
        </h1>
        <p className="text-[--prodile-text-darkBlue] font-normal text-medium lg:text-lg mb-6 text-center">
          Type in your registered email address to reset password
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:mt-8 mt-4 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormRender
                  placeholder="Enter email"
                  field={field}
                  label="Email Address"
                />
              )}
            />

            <div className="flex justify-center items-center flex-col gap-4">
              <CustomButton
                type="submit"
                className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4"
              >
                Continue
              </CustomButton>
              <Link href="/auth/login">Back to login</Link>
            </div>
          </form>
        </Form>

        <div className="text-xs mt-4 justify-center flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            <li>Terms and conditions</li>
            <li className="bg-black h-[5px] w-[5px] rounded-full"></li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default ForgotPassword;
