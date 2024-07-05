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
// import GoogleSignInButton from '@/components/GoogleSignInButton';

const Signup = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
    <div className="flex h-screen w-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-14 lg:px-24">
        <div className="my-2">
          <h1 className="text-4xl font-semibold text-[#0C1421]">
            Become an agent!
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-8"
            >
              <div className="flex justify-between gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormRender
                      placeholder="First Name"
                      field={field}
                      label="First Name"
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormRender
                      placeholder="Last Name"
                      field={field}
                      label="Last Name"
                    />
                  )}
                />
              </div>
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
                  />
                )}
              />
              <div className="flex justify-center items-center flex-col  gap-4">
                <CustomButton
                  type="submit"
                  className="w-full bg-[--prodile-yellow] h-[3em] text-white py-4 rounded-lg mt-4 font-normal text-xl"
                >
                  Continue
                </CustomButton>
                <Link href="/auth/login">Back to login</Link>
              </div>
            </form>
          </Form>
          <div className="text-center flex justify-center mt-4">
            <ul className="text-xs flex gap-6 items-center">
              <li>Terms and conditions</li>
              <li className="bg-black h-[5px] w-[5px] rounded-full"></li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-1/2 hidden md:flex relative">
        <Image
          src="/images/authBg.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex flex-col items-center text-white p-8 my-14 space-y-40">
          <Image
            src="/images/prodile-logo-white.svg"
            alt="prodile logo"
            height={60}
            width={260}
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-bold mt-8 text-[--prodile-yellow] capitalize">
              Agriculture matter
            </h1>
            <h3 className="text-2xl font-semibold text-[44px] mt-4">
              Good production
            </h3>
            <p className="text-center mt-4 text-[#BDBDBD] font-normal text-lg">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he
              speedily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
