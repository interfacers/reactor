import React, { FC, useState } from "react";
import { config } from "react-spring";

import Sidebar from "./index";

export default { title: "SideBar" };

export const test: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: "150vh" }}>
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        animatedProps={{ config: config.molasses }}
      >
        <div
          style={{
            height: "100vh",
            width: 300,
            borderRight: "1px solid rgba(30, 30, 30, 0.05)",
            backgroundColor: "white"
          }}
        >
          Hello Motto
        </div>
      </Sidebar>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ position: "fixed", top: "50%", left: "50%" }}
      >
        toggle
      </button>
    </div>
  );
};
