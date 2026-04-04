import Welcome from "./pages/welcome";
import Login from "./pages/login";

async function App() {
  return [
      await Welcome()
  ];
}

export default App;