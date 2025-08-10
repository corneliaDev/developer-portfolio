import AppRoutes from "./routes/AppRoutes";
import { ScrollToHash } from "./ui/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />
      <AppRoutes />
    </>
  );
}

export default App;
