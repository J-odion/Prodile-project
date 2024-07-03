import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricsCard from "@/components/Cards/MetricsCard";
import NewSubscription from "@/components/NewSubscription";
import ChatCard from "@/components/Cards/ChatCard";
import OutcomeStatistics from "@/components/OutcomeStatistics";
import { ArrowDown, Bell, ChevronDown } from "lucide-react";
import NotificationModal from "@/components/layout/NotificationModal";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const notifications = {
  count: 2,
  results: [
    {
      id: 1,
      message: "New message from admin",
      is_read: false,
      created_at: "2022-02-02T12:00:00Z",
    },
    {
      id: 2,
      message: "New message from admin",
      is_read: false,
      created_at: "2022-02-02T12:00:00Z",
    },
  ],
};

const Overview: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-semibold text-[#404040]">Dashboard</h1>
            <p className="text-[#AEAEAE] font-medium text-base mt-2">
              Get summary of your weekly online transactions here.
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

        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Revenue"
            value="₦984.28"
            change="+11.82"
            changeType="increase"
          />
          <MetricsCard
            title="Subscription"
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

        <div className="flex gap-6">
          <div className="w-1/2">
            <NewSubscription />
            <div className=" bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Chats</h2>
              {[
                {
                  name: "Victor Sunday",
                  message: "Lorem ipsum dolor sit amet...",
                  date: "Sep 27",
                },
                {
                  name: "Anita Collins",
                  message: "Lorem ipsum dolor sit amet...",
                  date: "Sep 27",
                },
                {
                  name: "Mary John",
                  message: "Lorem ipsum dolor sit amet...",
                  date: "Sep 27",
                },
              ].map((chat, idx) => (
                <ChatCard key={idx} {...chat} />
              ))}
            </div>

          </div>
          <div className="w-1/2">
          <OutcomeStatistics />
          </div>
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default Overview;

Overview.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"overview"}>{page}</DashboardLayout>;
};
