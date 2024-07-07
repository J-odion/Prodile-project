import React from 'react'
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Mail: NextPageWithLayout = () => {
  return (
    <>
        <DashboardSidebar />
        <div className="w-full px-6 pt-10 lg:pt-28">
            <h1>Mail</h1>
        </div>
    </>
  )
}

export default Mail

Mail.getLayout = function getLayout(page: React.ReactElement) {
    return <DashboardLayout page={"mail"}>{page}</DashboardLayout>;
  };
