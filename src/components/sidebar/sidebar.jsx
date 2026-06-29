import { MainBar,User,Nome,Email,MenuItems } from "./styles.js";
import {LayoutDashboard,ChartColumn,Settings} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ open, setOpen }) {


  return (
  <MainBar>
    <User>
        <Nome>Administrador</Nome>
        <Email>administrador@gmail.com</Email>
    </User>
    <MenuItems>
    <Link to="/" onClick={() => setOpen(false)}>
  <LayoutDashboard size={18}/> Dashboard
</Link>
<Link to="/analytics" onClick={() => setOpen(false)}>
     <ChartColumn size={18}/>Analytics
</Link>
</MenuItems>  
  </MainBar>
  )
}

export default Sidebar