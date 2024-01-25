import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { HiMiniTicket } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const options = [
    {
      name: "Dashboard",
      icon: <RxDashboard className="text-3xl" />,
      active: false,
    },
    {
      name: "Upload",
      icon: <BiSolidBarChartSquare className="text-3xl" />,
      active: true,
    },
    {
      name: "Invoice",
      icon: <HiMiniTicket className="text-3xl" />,
      active: false,
    },
    {
      name: "Schedule",
      icon: <IoDocumentText className="text-3xl" />,
      active: false,
    },
    {
      name: "Calendar",
      icon: <FaRegCalendarDays className="text-3xl" />,
      active: false,
    },
    {
      name: "Notification",
      icon: <IoNotifications className="text-3xl" />,
      active: false,
    },
    {
      name: "Settings",
      icon: <TbSettingsFilled className="text-3xl" />,
      active: false,
    },
  ];
  return (
    <div className="bg-white">
      {/* mobile view */}
      {open || (
        <div className="md:hidden w-[100%] h-20 flex flex-center items-center mt-2 mx-5">
          <div className="text-3xl" onClick={handleClick}>
            <GiHamburgerMenu />
          </div>

          <div className="flex flex-center items-center mt-2">
            <div className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                  fill="#605BFF"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl py-4">Base</h1>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="md:hidden h-screen ">
          <div className="flex flex-center items-center mt-8 ml-8">
            <div className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                  fill="#605BFF"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl py-4">Base</h1>
            </div>
            <div className="flex justify-center items-center text-3xl">
              <h1 className="px-10" onClick={handleClick}>
                <RxCross2 />
              </h1>
            </div>
          </div>
          <div className="px-5">
            {options.map((option, index) => {
              return (
                <div
                  className={`flex justify-start leading-20 text-xl text-slate-400 ${
                    option.active
                      ? "text-blue-800 font-semibold"
                      : "text-slate-400"
                  }  items-center m-5 my-8 gap-4`}
                >
                  {option.icon} {option.name}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden md:visible h-screen md:flex md:flex-col">
        <div className="flex flex-center items-center mt-8 ml-8">
          <div className="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                fill="#605BFF"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl py-4">Base</h1>
          </div>
        </div>
        <div className="px-5">
          {options.map((option, index) => {
            return (
              <div
                className={`flex justify-start leading-20 text-xl text-slate-400 ${
                  option.active
                    ? "text-blue-800 font-semibold"
                    : "text-slate-400"
                }  items-center m-5 my-8 gap-4`}
              >
                {option.icon} {option.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
