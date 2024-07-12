import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema } from "@/lib/formSchema";
import { useToast } from "@/components/ui/use-toast";
import FormRender from "@/components/FormRender";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      title: "Login successful",
      description: "You have successfully logged in",
      variant: "default",
    });
    router.push("/dashboard");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-green-400/5 to-yellow-400/15">
      <div className="absolute md:block hidden md:w-1/2 top-0 left-8 h-full lg:w-1/2">
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
      <Card className="mx-auto max-w-sm z-10 bg-white py-6">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormRender
                    placeholder="Enter password"
                    field={field}
                    label="Password"
                    type="password"
                  />
                )}
              />
              <div className="py-2 flex items-center justify-end w-full">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <CustomButton
                type="submit"
                className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4"
              >
                Login
              </CustomButton>
              <div className="mt-4 text-center">
                <p className="text-base font-normal">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-[--prodile-yellow] underline hover:opacity-40"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
