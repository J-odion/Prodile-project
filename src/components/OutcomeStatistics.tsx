import { Mail, Percent, WalletCards } from "lucide-react";
import React from "react";

const OutcomeStatistics = () => {
  return (
    <div className="flex flex-col gap-8 p-4 mb-8">
      <h2 className="text-xl font-semibold mb-1">Outcome Statistics</h2>
      <div className="w-full">

        <div className="mb-4 flex gap-4 items-center w-full">
          <div className="bg-[#FFEADA] rounded-sm h-[40px] w-[40px] flex items-center justify-center">
            <Mail size="20" className="text-[--prodile-yellow]" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Subscription</span>
              <span>52%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "52%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex gap-4 items-center">
          <div className="bg-[#DDF9E4] rounded-sm h-[40px] w-[40px] flex items-center justify-center">
            <Percent size="20" className="text-green-500" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex justify-between">
              <span>Sales</span>
              <span>21%</span>
            </p>
            <div className=" bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "21%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-4 items-center">
          <div className="bg-[#E4F0FF] rounded-sm h-[40px] w-[40px] flex items-center justify-center">
            <WalletCards size="20" className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex justify-between">
              <span>Revenue</span>
              <span>27%</span>
            </p>
            <div className=" bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "27%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/map.png" alt="Map" />
      </div>
    </div>
  );
};

export default OutcomeStatistics;
