import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricsCard from "@/components/Cards/MetricsCard";
import NewSubscription from "@/components/NewSubscription";
import ChatCard from "@/components/Cards/ChatCard";
import OutcomeStatistics from "@/components/OutcomeStatistics";

const Overview: NextPageWithLayout = () => {
    return (
      <DashboardSidebar>
        <div className="w-full p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2"
            />
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <MetricsCard title="Revenue" value="₦984.28" change="+11.82" changeType="increase" />
            <MetricsCard title="Subscription" value="169" change="-18.28" changeType="decrease" />
            <MetricsCard title="Agent" value="406" change="+33.3" changeType="increase" />
            <MetricsCard title="Disbursement" value="102" change="-18.27" changeType="decrease" />
          </div>

          <NewSubscription />

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Chats</h2>
            {[
              { name: "Victor Sunday", message: "Lorem ipsum dolor sit amet...", date: "Sep 27" },
              { name: "Anita Collins", message: "Lorem ipsum dolor sit amet...", date: "Sep 27" },
              { name: "Mary John", message: "Lorem ipsum dolor sit amet...", date: "Sep 27" }
            ].map((chat, idx) => (
              <ChatCard key={idx} {...chat} />
            ))}
          </div>

          <OutcomeStatistics />

        </div>
      </DashboardSidebar>
    );
  };

export default Overview

Overview.getLayout = function getLayout(page: React.ReactElement) {
    return <DashboardLayout page={"overview"}>{page}</DashboardLayout>;
};
