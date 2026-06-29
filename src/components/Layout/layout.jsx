import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar.jsx";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      
      <button onClick={() => setOpen(!open)}>
        ☰
      </button>

      <Sidebar open={open} setOpen={setOpen} />

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;