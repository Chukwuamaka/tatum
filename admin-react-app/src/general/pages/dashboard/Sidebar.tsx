import { NavLink } from "react-router";

import HomeIcon from "../../icons/HomeIcon";
import TransactionsIcon from "../../icons/TransactionsIcon";
import SupportIcon from "../../icons/SupportIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import BellIcon from "../../icons/BellSolidIcon";
import UserSolidIcon from "../../icons/UserSolidIcon";
import ChartIcon from "../../icons/ChartIcon";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import UsersIcon from "../../icons/UsersIcon";
import LogoutIcon from "../../icons/LogoutIcon";

interface NavItem {
  to: string;
  name: string;
  icon: React.ReactNode;
}

interface NavItemsByCategory {
  categoryName?: string;
  routes: NavItem[];
}

const mainNavItems: NavItemsByCategory[] = [
  {
    categoryName: undefined,
    routes: [{ name: "Dashboard", to: "/sidebar", icon: <HomeIcon /> }],
  },
  {
    categoryName: "Admin",
    routes: [
      {
        name: "Customers & Accounts",
        to: "/dashboard/customers",
        icon: <UsersIcon />,
      },
      {
        name: "Airtime Transactions",
        to: "/dashboard/transactions",
        icon: <TransactionsIcon />,
      },
      {
        name: "Reports & Analytics",
        to: "/dashboard/reports",
        icon: <ChartIcon />,
      },
    ],
  },
  {
    categoryName: "Support",
    routes: [
      {
        name: "Support Tickets",
        to: "/dashboard/support",
        icon: <SupportIcon />,
      },
      {
        name: "System Settings",
        to: "/dashboard/settings",
        icon: <SettingsIcon />,
      },
    ],
  },
];

const footerNavItems: NavItemsByCategory[] = [
  {
    categoryName: undefined,
    routes: [
      {
        name: "Notifications",
        to: "/dashboard/notifications",
        icon: <BellIcon />,
      },
      { name: "My Profile", to: "/dashboard/profile", icon: <UserSolidIcon /> },
    ],
  },
];

function NavItem({ to, name, icon }: NavItem) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-3 items-center px-3 py-2 text-[#4B5563] text-[14px]/5 font-medium tracking-[0.109px] bg-none rounded-[8px] ${isActive ? "bg-[var(--button)] text-[#002244]" : "hover:bg-[var(--border)]"}`
      }
    >
      {icon}
      {name}
    </NavLink>
  );
}

function NavItemsByGroup({ item }: { item: NavItemsByCategory }) {
  return (
    <div className="flex flex-col gap-2">
      {item.categoryName && (
        <h2 className="px-3 text-[var(--placeholder)] text-[12px]/4 font-semibold tracking-[0.6px] uppercase">
          {item.categoryName}
        </h2>
      )}
      {item.routes.map((route) => (
        <NavItem
          key={route.to}
          to={route.to}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="h-[100dvh] w-[255px] flex flex-col justify-between gap-10 overflow-y-auto border-e border-[var(--muted)]">
      <div>
        <div className="py-4 px-6">
          <img src={ImageTatumBankLogo} alt="Tatum Bank Logo" />
        </div>

        <div className="flex flex-col gap-6 p-4">
          {mainNavItems.map((item, index) => (
            <NavItemsByGroup key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 border-t border-[var(--muted)]">
        {footerNavItems.map((item, index) => (
          <NavItemsByGroup key={index} item={item} />
        ))}
        <button className="flex gap-3 items-center px-3 py-2 text-[#4B5563] text-[14px]/5 font-medium tracking-[0.109px] rounded-[8px] hover:bg-[var(--border)]">
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
