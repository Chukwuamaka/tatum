import { Link } from "react-router";

interface NavBarProperty {
    title: string;
    icon: React.ReactNode;
    to: string;
}

const sidebar: NavBarProperty[] = [
    { title: "Dashboard", to: "/dashboard", icon: <i className="fa-solid fa-house"></i> },
    { title: "Accounts", to: "/accounts", icon: <i className="fa-solid fa-user"></i> },
];

function NavBar({ title, icon, to }: NavBarProperty) {

    return (
        <>
        <div className="nav-bar">
            <div className="nav-icon">{icon}</div>
            <div className="nav-title">{title}</div>
        </div>

        <Link to={to}>
            {icon}
            {title}
        </Link>
        </>
    );
}

const Sidebar = () => {
    return (
        <nav>
            {sidebar.map((item) => (
                <NavBar key = {item.to} {...item}/>
            ))}
        </nav>
    )
}