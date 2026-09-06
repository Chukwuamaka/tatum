import { NavLink } from "react-router";

import ImageTatumLogo from "../../assets/tatum-bank-logo.svg";
import HomeIcon from "../../icons/HomeIcon";
import TransactionsIcon from "../../icons/TransactionsIcon";
import ChartIcon from "../../icons/ChartIcon";
import UsersIcon from "../../icons/UsersIcon";
import SupportIcon from "../../icons/SupportIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import BellIcon from "../../icons/BellSolidIcon";
import UserIcon from "../../icons/UserIcon";
import LogoutIcon from "../../icons/LogoutIcon";

interface Route {
  name: string;
  to: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavigationGroup {
  category?: string;
  routes: Route[];
}

const navigationGroups: NavigationGroup[] = [
  {
    routes: [
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: <HomeIcon />,
      },
    ],
  },
  {
    category: "Admin",
    routes: [
      {
        name: "Customers & Accounts",
        to: "/dashboard/customers",
        icon: <UsersIcon />,
      },
      {
        name: "Airtime Transactions",
        to: "/dashboard/airtime",
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
    category: "Support",
    routes: [
      {
        name: "Support Tickets",
        to: "/dashboard/tickets",
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

const footerRoutes = [
  {
    name: "Notifications",
    to: "/dashboard/notifications",
    icon: <BellIcon />,
    badge: "12",
  },
  {
    name: "My Profile",
    to: "/dashboard/profile",
    icon: <UserIcon />,
  },
  {
    name: "Log Out",
    to: "/logout",
    icon: <LogoutIcon />,
  },
];

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-9 gap-3 items-center justify-between rounded-lg px-3 py-2 text-[13px] no-underline hover:bg-[var(--bg)] ${
    isActive
      ? "bg-[var(--button)] font-bold text-[var(--button-text)] hover:bg-[var(--button)]"
      : "text-[var(--muted)]"
  }`;

function NavItem({ route }: { route: Route }) {
  return (
    <NavLink className={navLinkClassName} key={route.to} to={route.to} end>
      <span className="inline-flex gap-3">
        <span className="mt-[1.8px]">{route.icon}</span>
        {route.name}
      </span>
      {route.badge && (
        <b className="inline-flex items-center justify-center size-5 pt-[1px] pr-[1px] rounded-full bg-[var(--button)] text-[9px] text-[var(--button-text)]">
          {route.badge}
        </b>
      )}
    </NavLink>
  );
}

function Sidebar() {
  return (
    <aside className="flex min-h-full w-64 flex-[0_0_16rem] flex-col overflow-y-auto border-r border-[var(--border)] bg-[var(--surface)] max-[900px]:w-[210px] max-[900px]:basis-[210px] max-[680px]:hidden">
      <div className="flex items-center px-6 py-4">
        <img
          className="h-[49px] w-[117px] object-contain"
          src={ImageTatumLogo}
          alt="Tatum Bank"
        />
      </div>

      <nav
        className="mb-[100px] flex flex-1 flex-col gap-6 p-4"
        aria-label="Main navigation"
      >
        {navigationGroups.map((group) => (
          <div
            className="flex flex-col gap-1"
            key={group.category ?? "general"}
          >
            {group.category && (
              <span className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--placeholder)]">
                {group.category}
              </span>
            )}
            {group.routes.map((route) => (
              <NavItem route={route} />
            ))}
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-1 border-t border-[var(--border)] p-4">
        {footerRoutes.map((route) => (
          <NavItem route={route} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
