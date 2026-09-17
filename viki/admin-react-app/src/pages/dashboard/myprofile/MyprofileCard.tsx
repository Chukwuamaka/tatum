import { useEffect, useState } from "react";

import { assets } from "../../../utils/data";
import UserIcon from "../../../icons/UsersIcon";
import EmailIcon from "../../../icons/MailOutlineIcon";
import PhoneIcon from "../../../icons/PhoneIcon";
import ShieldIcon from "../../../icons/ShieldIcon";
import { getMyProfileDetails, type AuthUser } from "../../../api-clients/auth";
import Toast from "../../../reusables/Toast";
import { formatDate, getFullName } from "../../../utils/helpers";

function MyprofileCard() {
  const [user, setUser] = useState<AuthUser>();
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const responseData = await getMyProfileDetails();
        if (responseData.success) {
          setUser(responseData.data);
        } else {
          setToastMessage(responseData.message || "An error occurred!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return (
    <main>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-[var(--text)]">
            My Profile
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            View and manage your personal information
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-[#F7C844] px-5 py-2.5 text-sm font-semibold text-[#1F2937] hover:bg-[#eabf35]"
        >
          <span>✎</span>
          Edit Profile
        </button>
      </div>

      <div className=" flex gap-10 mt-2   rounded-lg bg-white px-6 py-6 r-4   p-4 ">
        <div className="flex flex-col items-bottom  gap-2  p-8 border-r border-r-[#E5E7EB] ">
          <div className=" relative item center left-15 ">
            <img
              className=" relative absolute h-20 w-20 rounded-full object-cover "
              src={assets.avatar}
              alt="User profile"
            />
            <div className="  absolute  bottom-2 ml-17 h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]  " />
          </div>
          <div className=" mt-1 flex  flex-col items-center">
            <h2 className=" text-lg font-bold text-[#172033]">
              {getFullName(user?.firstName as string, user?.lastName as string)}
            </h2>
            <span className=" mt-0 flex h-7 w-[100px] items-center justify-center rounded-sm bg-[#DFF2FC] text-[10px] font-bold tracking-wide text-[#397A9D] uppercase">
              {user?.role}
            </span>
          </div>
          <div className="mt-2 flex pl-8 items-center gap-12">
            <span className="text-xs text-[#8B94A5]">Staff Id</span>
            <span className="text-xs font-medium text-[#172033]">
              {user?.staffId}
            </span>
          </div>
          <div className="mt-0 flex  pl-8 items-center gap-12  ">
            <span className="text-xs text-[#8B94A5]">Joined</span>
            <span className="text-xs font-medium text-[#172033]">
              {formatDate(user?.createdAt as string)}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col g-4 pt-5">
          <div className="flex  items-start pt-4 gap-3">
            <div className="flex h-7 w-7  item center justify-center text-[#9AA6BB]">
              <UserIcon />
            </div>
            <div>
              <p className="text-xs text-[#8B94A5]">Full Name</p>
              <p className="mt-0 text-sm font-medium text-[#172033]">
                {getFullName(
                  user?.firstName as string,
                  user?.lastName as string,
                )}
              </p>
            </div>
          </div>
          <div className="flex  items-start pt-4 gap-3">
            <div className="flex h-7 w-7  item center justify-center text-[#9AA6BB]">
              <EmailIcon />
            </div>
            <div>
              <p className="text-xs text-[#8B94A5]">Email Address</p>
              <p className="mt-0 text-sm font-medium text-[#172033]">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex  items-start pt-4 gap-3">
            <div className="flex h-7 w-7  item center justify-center text-[#9AA6BB]">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-xs text-[#8B94A5]">Phone Number</p>
              <p className="mt-0 text-sm font-medium text-[#172033]">
                {user?.phone}
              </p>
            </div>
          </div>
          <div className="flex  items-start pt-4 gap-3">
            <div className="flex h-7 w-7  item center justify-center text-[#9AA6BB]">
              <ShieldIcon />
            </div>
            <div>
              <p className="text-xs text-[#8B94A5]">Role</p>
              <p className="mt-0 text-sm font-medium text-[#172033]">
                {user?.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#E5E7EB] px-6 py-9">
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-[#8B94A5]">
            © 2024 Tatum Bank. All rights reserved.
          </p>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#8B94A5]">
                Licensed by CBN
              </span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E5E7EB]">
                <span className="text-[8px] font-bold text-[#8B94A5]">🏛</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#8B94A5]">
                Insured by NDIC
              </span>
              <div className="flex h-5 w-9 items-center justify-center rounded-sm border border-[#9CA3AF]">
                <span className="text-[8px] font-bold text-[#6B7280]">
                  NDIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default MyprofileCard;
