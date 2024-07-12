import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import z from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { confirmEmailSchema } from "@/lib/formSchema";
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


const ConfirmEmail = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof confirmEmailSchema>>({
    resolver: zodResolver(confirmEmailSchema),
    defaultValues: {
      telephone: "",
    },
  });

  const handleBacktoLogin = () => {
    router.push("/auth/login");
  };

  const onSubmit = async (data: z.infer<typeof confirmEmailSchema>) => {
    console.log(data);
    toast({
      title: "Code sent",
      description: "Copy code sent to your phone number to verify your account",
      variant: "default",
    });
    router.push("/auth/verifyOtp");
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
      <Card className="mx-auto max-w-sm z-10 bg-transparent lg:bg-white">
      <CardHeader>
          <CardTitle className="text-2xl">Confirm your email</CardTitle>
          <CardDescription>
          Kindly provide your phone number to process
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
              name="telephone"
              render={({ field }) => (
                <FormRender
                  placeholder="Phone number"
                  field={field}
                  label="Phone number"
                />
              )}
            />

            <div className="flex justify-center items-center flex-col gap-4">
              <CustomButton
                type="submit"
                className="w-full bg-[--prodile-yellow] h-10 rounded-xl text-lg font-normal text-white py-4"
              >
                Send code
              </CustomButton>
              <Link href="/auth/login" className="hover:underline">Back to login</Link>
            </div>
          </form>
        </Form>
        </CardContent>
      </Card>


    </div>
  );
};

export default ConfirmEmail;
