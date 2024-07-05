import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationModal from "@/components/layout/NotificationModal";
import { ChevronDown, Eye, Pen, Plus, Trash } from "lucide-react";
import { notifications } from "..";
import { Button } from "@/components/ui/button";
import MetricsCard from "@/components/Cards/MetricsCard";
import SeedingsCard from "@/components/Cards/SeedingsCard";
import FertilizerCard from "@/components/Cards/FertilizerCard";
import ChemicalsCard from "@/components/Cards/ChemicalCard";
import StockCard from "@/components/Cards/StockCard";
import Machinery from "@/components/Cards/Machinery";
import Feed from "@/components/Cards/Feed";

const Resources: NextPageWithLayout = () => {
  return (
    <>
    <DashboardSidebar />
      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold text-[#404040]">
              Hello Lekan
            </h1>
            <p className="text-[#AEAEAE] font-medium text-base mt-2">
              Have a nice day
            </p>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2"
          />
          <div className="flex justify-center gap-2">
            <NotificationModal
              notifications={notifications}
              notificationRefetch={() => {}}
            />
            <Separator
              orientation="vertical"
              className="border-[#C2C2C2] border-2"
            />
            <div className="flex gap-2">
              <Link href="/dashboard/admin/account/profile">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <div className="flex items-center gap-1">
                <div>
                  <h2 className="text-[#0A0A0A] font-semibold text-base">
                    Millie Brown
                  </h2>
                  <p className="text-[#0A0A0A] font-normal text-xs">
                    Super admin
                  </p>
                </div>
                <ChevronDown size="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl text-[--prodile-yellow]">
            Resources
          </h2>
          <div>
            <Button
              variant={"link"}
              className="flex items-center gap-3 text-sm font-semibold"
            >
              Add Resources
              <span className="border-2 border-dotted border-[--prodile-yellow] rounded-full h-6 w-6 flex items-center justify-center">
                <Plus size={18} className="text-[--prodile-yellow]" />
              </span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-8">
            <MetricsCard
              title="Agents"
              value="406"
              change="+33.3"
              changeType="increase"
            />
            <MetricsCard
              title="Subscription"
              value="₦984.28"
              change="+11.82"
              changeType="increase"
            />
            <MetricsCard
              title="Resources"
              value="169"
              change="-18.28"
              changeType="decrease"
            />
            <MetricsCard
              title="Disbursement"
              value="102"
              change="-18.27"
              changeType="decrease"
            />
        </div>
        <SeedingsCard />
        <FertilizerCard />
        <ChemicalsCard />
        <StockCard />
        <Machinery />
        <Feed />
      </div>
    </>
  );
};

export default Resources;

Resources.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"resources"}>{page}</DashboardLayout>;
};
