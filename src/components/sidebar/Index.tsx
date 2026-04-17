import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Type, BookOpen } from "lucide-react";
import styles from "./Style.module.css";

type MenuItem = {
  label: string;
  path: string;
  icone: string;
  submenus: MenuItem[];
};

type SidebarProps = {
  menus: MenuItem[];
  onExpandChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ menus, onExpandChange }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // 🔥 informa o layout (expandido ou não)
      onExpandChange(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onExpandChange]);

  const currentPath = location.pathname.toLowerCase();

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.includes(path.toLowerCase());
  };

  const getIcon = (icone: string) => {
    switch (icone) {
      case "L":
        return <Home size={18} />;
      case "S":
        return <Type size={18} />;
      case "P":
        return <BookOpen size={18} />;
      default:
        return null;
    }
  };

  // 📱 MOBILE (bottom menu)
  if (isMobile) {
    return (
      <div className={styles.bottomMenu}>
        {menus.map((menu, index) => (
          <button
            key={index}
            className={isActive(menu.path) ? styles.active : ""}
            onClick={() => navigate(menu.path)}
          >
            {getIcon(menu.icone)}
            <span>{menu.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // 💻 DESKTOP (sidebar)
  return (
    <aside className={styles.sidebar}>
      <ul>
        {menus.map((menu, index) => (
          <li
            key={index}
            className={isActive(menu.path) ? styles.active : ""}
            onClick={() => navigate(menu.path)}
          >
            {menu.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}