import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Container } from "./styles";


function App() {


  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  )
}

export default App
