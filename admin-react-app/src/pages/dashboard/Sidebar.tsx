import { NavLink } from "react-router";

import ImageTatumLogo from "../../assets/tatum-bank-logo.svg";
import HomeIcon from "../../icons/HomeIcon";
import TransactionsIcon from "../../icons/TransactionsIcon";
import ChartIcon from "../../icons/ChartIcon";
import UsersIcon from "../../icons/UsersIcon";
import SupportIcon from "../../icons/SupportIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import BellIcon from "../../icons/BellSolidIcon";
import UserSolidIcon from "../../icons/UserSolidIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import UserSettingsIcon from "../../icons/UserSettingsIcon";

interface Route {
  name: string;
  to: string;
  end: boolean;
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
        end: true,
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
        end: false,
        icon: <UsersIcon />,
      },
      {
        name: "Airtime Transactions",
        to: "/dashboard/transactions",
        end: false,
        icon: <TransactionsIcon />,
      },
      {
        name: "Reports & Analytics",
        to: "/dashboard/reports",
        end: true,
        icon: <ChartIcon />,
      },
    ],
  },
  {
    category: "Super Admin",
    routes: [
      {
        name: "User Management",
        to: "/dashboard/users",
        end: false,
        icon: <UserSettingsIcon />,
      },
    ],
  },
  {
    category: "Support",
    routes: [
      {
        name: "Support Tickets",
        to: "/dashboard/tickets",
        end: true,
        icon: <SupportIcon />,
      },
      {
        name: "System Settings",
        to: "/dashboard/settings",
        end: true,
        icon: <SettingsIcon />,
      },
    ],
  },
];

const footerRoutes: Route[] = [
  {
    name: "Notifications",
    to: "/dashboard/notifications",
    end: true,
    icon: <BellIcon />,
    badge: "12",
  },
  {
    name: "My Profile",
    to: "/dashboard/profile",
    end: false,
    icon: <UserSolidIcon />,
  },
  {
    name: "Log Out",
    to: "/logout",
    end: true,
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
    <NavLink className={navLinkClassName} to={route.to} end={route.end}>
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
        {navigationGroups.map((group, index) => (
          <div className="flex flex-col gap-1" key={group.category ?? index}>
            {group.category && (
              <span className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--placeholder)]">
                {group.category}
              </span>
            )}
            {group.routes.map((route) => (
              <NavItem key={route.to} route={route} />
            ))}
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-1 border-t border-[var(--border)] p-4">
        {footerRoutes.map((route) => (
          <NavItem key={route.to} route={route} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
