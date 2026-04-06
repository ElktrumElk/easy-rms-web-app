import comp from "/modules/component/component.js"
import Statistics from "./statistics.js"
import HomeScreen from "./dahs_board_stats.js"

export default async function Dashboard() {
    return await comp({
        path: '/index/HOME/dashboard.html',
        id: 'dashboard',
        child: await HomeScreen(),
        position_id: 'cmp'
    })
}