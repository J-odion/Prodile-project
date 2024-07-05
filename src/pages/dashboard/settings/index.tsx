import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationModal from "@/components/layout/NotificationModal";
import { ChevronDown, Eye, Pen, Trash } from "lucide-react";
import { notifications } from "..";
import HeaderCard from "@/components/Cards/Settings/HeaderCard";

const Settings: NextPageWithLayout = () => {
  return (
    <>
    <DashboardSidebar />
        <HeaderCard />
    </>
  )
}

export default Settings

Settings.getLayout = function getLayout(page: React.ReactElement) {
    return <DashboardLayout page={"settings"}>{page}</DashboardLayout>;
  };
