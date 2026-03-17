import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Style.module.css";

export interface MenuItem {
  label: string;
  path?: string;
  icone: string;
}

interface SidebarProps {
  menus: MenuItem[];
  onExpandChange?: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menus, onExpandChange }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const goTo = (path: string) => {
    navigate(path);
    if (isMobile) setIsMobileOpen(false);
  };

  return (
    <>
      {isMobile && (
        <button
          className={styles.mobileButton}
          onClick={() => setIsMobileOpen(true)}
        >
          ☰
        </button>
      )}

      {isMobile && isMobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={styles.sidebar}
        style={{
          width: isMobile ? 240 : isExpanded ? 220 : 50,
          left: isMobile ? (isMobileOpen ? 0 : -240) : 0,
        }}
        onMouseEnter={() => {
          if (!isMobile) {
            setIsExpanded(true);
            onExpandChange?.(true);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsExpanded(false);
            onExpandChange?.(false);
          }
        }}
      >
        <ul className={styles.menuList}>
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <div
                  className={styles.menuItem}
                  onClick={() => {
                    if (menu.path) {
                      goTo(menu.path);
                    } else {
                      toggleMenu(index);
                    }
                  }}
                >
                  {(!isMobile || !isExpanded) && menu.icone}

                  {(isMobile || isExpanded) && <span>{menu.label}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
