import { MainBar,User,Nome,Email,MenuItems } from "./styles.js";
import {LayoutDashboard,ChartColumn,Settings} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {


  return (
  <MainBar>
    <User>
        <Nome>Administrador</Nome>
        <Email>administrador@gmail.com</Email>
    </User>
    <MenuItems>
    <Link to="/">
  
  <LayoutDashboard/> Dashboard
 
</Link>

<Link to="/analytics">

     <ChartColumn/>Analytics

</Link>



</MenuItems>
    
  </MainBar>
  )
}

export default Sidebar