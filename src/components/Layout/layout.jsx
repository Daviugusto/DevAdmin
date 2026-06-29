import { useState } from "react";
import Sidebar from "../sidebar/sidebar.jsx";
import { MenuButton } from "./styles";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setOpen(!open)}>
        ☰
      </MenuButton>

      <div style={{ display: "flex" }}>
        <Sidebar open={open} setOpen={setOpen} />

        <div style={{ flex: 1, minWidth: 0 }}>
          {children}
        </div>
      </div>
    </>
  );
}