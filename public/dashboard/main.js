import Dashboard from "./components/dashboard.js";
import HomeScreen from "./components/dahs_board_stats.js";

export default async function App() {
    
    return [
        await Dashboard()
    ]
    
}