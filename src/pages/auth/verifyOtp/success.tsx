import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  const handleBacktoLogin = () => {
    router.push("/auth/login");
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
        <Image
          src="/images/success.svg"
          alt="success icon"
          width={180}
          height={180}
        />
        <h2 className="text-[#4D4D4D] text-center text-3xl lg:text-4xl font-semibold my-2">
          Account created Successfully
        </h2>
        <p className="font-normal text-lg lg:text-2xl text-center my-4">
          Kindly login to update your business information
        </p>
        <Button
          className="bg-[--prodile-yellow] py-4 px-6 w-full md:w-1/2 text-white h-[3em] rounded-xl text-lg font-normal mt-10"
          onClick={handleBacktoLogin}
        >
          Back to login
        </Button>
      </div>
    </div>
  );
};

export default Success;
