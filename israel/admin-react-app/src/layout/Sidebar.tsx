import { Link } from "react-router";

interface NavItemProps {
  to: string;
  name: string;
  icon: React.ReactNode;
}

const sidebarItems: NavItemProps[] = [
  { name: "Dashboard", to: "/dashboard", icon: "" },
  { name: "Customers & Accounts", to: "/dashboard/customers", icon: "" },
  { name: "Airtime Transactions", to: "/dashboard/transactions", icon: "" },
  { name: "Report & Analysis", to: "/dashboard/reports", icon: "" },
  { name: "Support Tickets", to: "/dashboard/support", icon: "" },
  { name: "System settings", to: "/dashboard/settings", icon: "" },
  { name: "Notifications", to: "/dashboard/notifications", icon: "" },
  { name: "My profile", to: "/dashboard/profile", icon: "" },
];

function NavItem({ to, name, icon }: NavItemProps) {
  return (
    <Link to={to}>
      {icon}
      {name}
    </Link>
  );
}

const Sidebar = () => {
  return (
    <nav>
      {sidebarItems.map((item) => (
        <NavItem key={item.to} {...item} />
      ))}
    </nav>
  );
};

export default Sidebar;
