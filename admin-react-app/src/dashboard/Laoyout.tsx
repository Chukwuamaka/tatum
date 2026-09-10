import { Link } from "react-router";

interface NavBarProperty {
    title: string;
    icon: React.ReactNode;
    link: string;
}

const sidebar: NavBarProperty[] = [
    { title: "Dashboard", link: "/dashboard", icon: <i className="fa-solid fa-house"></i> },
    { title: "Accounts", link: "/accounts", icon: <i className="fa-solid fa-user"></i> },
];

function NavBar({ title, icon, link }: NavBarProperty) {

    return (
        <>
        <div className="nav-bar">
            <div className="nav-icon">{icon}</div>
            <div className="nav-title">{title}</div>
        </div>

        <Link to={link}>
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
                <NavBar key = {item.link} {...item}/>
            ))}
        </nav>
    )
}