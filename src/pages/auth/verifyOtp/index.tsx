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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute md:block hidden md:w-1/2 top-0 left-8 h-full lg:w-1/4">
        <Image
          src="/images/agricFarm.svg"
          alt="Agricultural Illustration Left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute hidden lg:block top-0 right-8 h-full w-1/4">
        <Image
          src="/images/globe.svg"
          alt="Agricultural Illustration Right"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <Card className="mx-auto max-w-sm z-10 bg-transparent lg:bg-white py-6 w-full">
      <CardHeader>
          <CardTitle className="text-2xl">OTP Verification</CardTitle>
          <CardDescription className="text-[--prodile-text-darkBlue]">
          A code has been sent to{" "}
          <span className="text-[--prodile-yellow]">********70</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="my-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmEmail;
