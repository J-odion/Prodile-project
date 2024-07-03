import React from "react";
import {
  PieChart,
  ChevronRight,
  LogOut,
  BookOpen,
  BookText,
  ShoppingBag,
  MessageCircle,
  Users,
  UserCircle,
  Grid2X2,
  Scroll,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
// import { useStorage } from "@/lib/useStorage";

// ill use this for the avatar

type DashboardSidebarProps = React.PropsWithChildren & {
  className?: string;
};

const DashboardSidebar = ({ children }: DashboardSidebarProps) => {
  const router = useRouter();
  const { route } = useRouter();
//   const user = useStorage.getItem("firstName");
//   console.log("User", user);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      <aside className="relative">
        <div className="fixed hidden h-screen w-64 bg-white lg:flex border-r">

          <div>
            <div className="flex items-center gap-3 justify-center align-middle h-20 py-[10px]">
              <Image src="/images/prodile-logo-yellow.svg" alt='prodile yellow logo' width={150} height={50} />
            </div>


            {/* <nav className="flex-grow"> */}
            <h2 className="text-center text-[#222222] font-semibold text-[13px] uppercase">Menu</h2>
            <ul className="flex flex-col py-4 px-4">
              <Link href="/dashboard">
                <li
                  className={
                    route === "/dashboard"
                      ? "bg-[--prodile-yellow] py-3 pl-10 text-white rounded-xl font-semibold text-sm"
                      : "my-1 py-3 pl-10 hover:bg-[--prodile-yellow] hover:text-[#1C1C1C] font-semibold text-sm rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <Grid2X2 size="20" />
                    </span>
                    Overview
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/productive-units">
                <li
                  className={
                    route === "/dashboard/productive-units"
                    ? "bg-[--prodile-yellow] py-3 pl-10 text-white rounded-xl font-semibold text-sm"
                    : "my-1 py-3 pl-10 hover:bg-[--prodile-yellow] hover:text-[#1C1C1C] font-semibold text-sm rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <Scroll size="20" />
                    </span>
                    Productive units
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/subscription-plans">
                <li
                  className={
                    route === "/dashboard/admin/subscription-plans"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookText size="20" />
                    </span>
                    Agents
                  </div>
                </li>
              </Link>

              <Link href="/dashboard/admin/transactions">
                <li
                  className={
                    route === "/dashboard/admin/transactions"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookText size="20" />
                    </span>
                    Resources
                  </div>
                </li>
              </Link>

              <h2>General</h2>
              <Link href="/dashboard/admin/transactions">
                <li
                  className={
                    route === "/dashboard/admin/transactions"
                      ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                      : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <BookText size="20" />
                    </span>
                    Settings
                  </div>
                </li>
              </Link>
            </ul>
            {/* </nav> */}
            <div
              className="fixed bottom-10 pl-10 text-[#959190]"
              style={{ cursor: "pointer" }}
            >
              <div
                className="flex items-center text-[#D06B0D]"
                onClick={handleLogout}
              >
                <span className="mr-3">
                  <LogOut size="20" color="#D06B0D" />
                </span>
                Logout
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-full min-h-screen w-full pl-5 pr-5 pt-12 py-10 md:pt-12 lg:min-h-40 lg:pl-[32rem] lg:pr-10">
                {children}
            </div> */}
        <div className="h-full min-h-screen w-full pl-5 pr-5 pt-12 py-10 md:pt-10 lg:min-h-40 lg:pl-[19rem] lg:pr-2 pb-20">
          {children}
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
