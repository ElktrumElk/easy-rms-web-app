import comp from "/src/modules/component/component.js"
import Statistics from "./statistics.js"

export default async function Dashboard() {
    return await comp({
        path: '/index/HOME/dashboard.html',
        id: 'dashboard',
        child: await Statistics(),
        position_id: 'cmp'
    })
}