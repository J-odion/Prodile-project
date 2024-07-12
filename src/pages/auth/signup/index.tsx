import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "@/lib/formSchema";
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

const Signup = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof signupFormSchema>) => {
    console.log(data);
    toast({
      title: "Signup successful",
      description: "You have successfully signed up!",
      variant: "default",
    });
    router.push("/auth/confirm-email");
  };
  const handleBacktoLogin = () => {
    router.push("/auth/login");
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-green-400/5 to-yellow-400/15">
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

      <Card className="mx-auto max-w-sm z-10 bg-transparent lg:bg-white">
      <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="my-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4"
            >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormRender
                      placeholder="name"
                      field={field}
                      label="Name"
                    />
                  )}
                />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormRender
                    placeholder="example@domain.com"
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormRender
                    placeholder="Confirm password"
                    field={field}
                    label="Confirm Password"
                    type="password"
                    className="w-full"
                  />
                )}
              />
              <CustomButton
                type="submit"
                className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4"
              >
                Signup
              </CustomButton>
              <div className="mt-4 text-center">
                <p className="text-base font-normal">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-[--prodile-yellow] underline hover:opacity-40"
                  >
                    Log in
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

export default Signup;
