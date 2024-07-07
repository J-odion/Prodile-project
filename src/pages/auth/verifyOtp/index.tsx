import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailVerificationSchema } from "@/lib/formSchema";
import { useToast } from "@/components/ui/use-toast";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

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
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      <div className="w-full md:w-1/2 lg:w-1/3 hidden md:flex relative">
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
            <h1 className="text-4xl lg:text-5xl font-bold mt-8 text-[--prodile-yellow] capitalize">
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
      <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center px-8 md:px-14 lg:px-24 py-14 md:py-0">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#0C1421]">
          OTP Verification
        </h1>
        <p className="text-[--prodile-text-darkBlue] font-normal text-lg lg:text-xl mb-6">
          A code has been sent to{" "}
          <span className="text-[--prodile-yellow]">********70</span>
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full flex justify-center flex-col">
            <FormField
              control={form.control}
              name="otp_code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center">
                    <InputOTP maxLength={6} {...field} className="flex justify-center">
                      <InputOTPGroup className="space-x-4 flex justify-center">
                        <InputOTPSlot
                          index={0}
                          {...form.register("otp_code")}
                          className="bg-[#1E1E1E0D]"
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
                    </div>
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
