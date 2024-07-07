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
          Welcome back 👋
        </h1>
        <p className="text-[--prodile-text-darkBlue] font-normal text-lg lg:text-xl mb-6">
          Today is a new day to shape the world!
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
            <CustomButton
              type="submit"
              className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4 mt-10"
            >
              Login
            </CustomButton>
          </form>
        </Form>
        <div className="mt-4 flex items-center justify-end w-full">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* <div className="mt-6">
          <GoogleSignInButton />
          Google signin button component
        </div> */}
      </div>
      <div className="mt-4 text-center absolute md:right-4 md:top-0 md:left-auto bottom-4 right-0 left-0 md:-translate-x-0 -translate-x-50">
        <p className="text-lg font-normal">
          <Link
            href="/auth/signup"
            className="text-[--prodile-yellow] underline hover:opacity-40"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
