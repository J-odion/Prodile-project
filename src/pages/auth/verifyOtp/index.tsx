import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailVerificationSchema } from "@/lib/formSchema";
import { useToast } from "@/components/ui/use-toast";
import FormRender from "@/components/FormRender";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// import GoogleSignInButton from '@/components/GoogleSignInButton';

const ConfirmEmail = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof emailVerificationSchema>>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      otp_code: "",
    },
  });

  const handleBacktoLogin = () => {
    router.push("/auth/login");
  };

  const onSubmit = async (data: z.infer<typeof emailVerificationSchema>) => {
    console.log(data);
    toast({
      title: "Reset password successful",
      description: "You have successfully reset your password",
      variant: "default",
    });
    router.push("/auth/verifyOtp/success");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 relative">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 my-14 space-y-40">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold mt-8 text-[--prodile-yellow] capitalize">
              Agriculture matter
            </h1>
            <h3 className="text-2xl font-semibold text-[44px] mt-4">
              Good production
            </h3>
          </div>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <p className="text-center mt-4 text-[#BDBDBD] font-normal text-md">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he speedily.
          </p>
        </div>
      </div>
      <div className=" w-2/3 flex flex-col justify-center px-[16rem]">
        <h1 className="text-4xl font-semibold mb-2 text-[#0C1421]">
          OTP Verification
        </h1>
        <p className="text-[--prodile-text-darkBlue] font-normal text-xl mt-4 mb-6 ">
          A code has been sent to{" "}
          <span className="text-[--prodile-yellow]">********70</span>
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex justify-center flex-col">
            <FormField
              control={form.control}
              name="otp_code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="space-x-4">
                        <InputOTPSlot
                          index={0}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D] "
                        />
                        <InputOTPSlot
                          index={1}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D]"
                        />
                        <InputOTPSlot
                          index={2}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D]"
                        />
                        <InputOTPSeparator />
                        <InputOTPSlot
                          index={3}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D]"
                        />
                        <InputOTPSlot
                          index={4}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D]"
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4">
              <CustomButton
                type="submit"
                className="w-full bg-[--prodile-yellow] h-10 text-white py-4 rounded-lg mt-10 font-normal text-lg"
              >
                Continue
              </CustomButton>
              <Button
                className="w-full bg-[--prodile-blue] font-normal text-lg py-4 h-10"
                onClick={handleBacktoLogin}
              >
                Back to login
              </Button>
            </div>
          </form>
        </Form>

        <div className="text-center flex justify-center mt-14">
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

export default ConfirmEmail;
