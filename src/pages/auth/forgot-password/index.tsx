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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Card className="mx-auto max-w-sm z-10 bg-transparent lg:bg-white w-full py-8">
      <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
          Type in your registered email address to reset password
          </CardDescription>
        </CardHeader>

        <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4"
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
        </CardContent>

        <div className="text-xs mt-4 justify-center flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            <li>Terms and conditions</li>
            <li className="bg-black h-[5px] w-[5px] rounded-full"></li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </Card>


    </div>
  );
};

export default ForgotPassword;
