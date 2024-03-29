import React from "react";

import styles from "./index.module.css";
import { Popover } from "antd";

function DashboardSidebar() {
  const sidebarItems = [
    {
      title: "Cryto",
      description: "Whatever",
      to: "/crypto",
      icon: "not yet",
    },
    {
      title: "Cryto",
      description: "Whatever",
      to: "/crypto",
      icon: "not yet",
    },
    {
      title: "Cryto",
      description: "Whatever",
      to: "/crypto",
      icon: "not yet",
    },
    {
      title: "Cryto",
      description: "Whatever",
      to: "/crypto",
      icon: "not yet",
    },
    {
      title: "Cryto",
      description: "Whatever",
      to: "/crypto",
      icon: "not yet",
    },
  ];

  return (
    <div className={styles["sidebar"]}>
      <ul className={styles["sidebar-list"]}>
        {sidebarItems.map((item, index) => (
          <Popover content={item.description} title={item.title} placement={'rightTop'}>
            <li className={styles["sidebar-item"]} key={index}>
              <button className={styles["button"]}>{item.title}</button>
            </li>
          </Popover>
        ))}
      </ul>
    </div>
  );
}

export default DashboardSidebar;
