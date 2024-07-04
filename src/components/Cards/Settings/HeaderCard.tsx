import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderCard = () => {
  return (
    <div className="flex justify-between items-center shadow-sm shadow-[#222222CC]/50 rounded-2xl p-4">
      <div className="flex gap-6 items-center">
        <Link href="/dashboard/admin/account/profile">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar"  />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h2 className="font-semibold text-2xl">Etaract Farms</h2>
          <p className="text-[#222222CC] font-medium text-base">Agriculture</p>
        </div>
      </div>
      <Button className="bg-[--prodile-yellow] px-4 w-28">Edit</Button>
    </div>
  );
};

export default HeaderCard;
