import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationModal from "@/components/layout/NotificationModal";
import { ChevronDown } from "lucide-react";
import { notifications } from "..";
import MetricsCard from "@/components/Cards/MetricsCard";

const ProductiveUnits: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
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

        <div>
          <h2 className="font-bold text-2xl text-[--prodile-yellow]">
            Users dashboard
          </h2>
          <div className="grid grid-cols-4 gap-6 mb-8">
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
              title="Agent"
              value="406"
              change="+33.3"
              changeType="increase"
            />
            <MetricsCard
              title="Disbursement"
              value="102"
              change="-18.27"
              changeType="decrease"
            />
          </div>

          <div></div>
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default ProductiveUnits;

ProductiveUnits.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"product-units"}>{page}</DashboardLayout>;
};
