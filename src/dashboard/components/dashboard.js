import comp from "../../modules/component/component"
import Statistics from "./statistics"

export default async function Dashboard() {
    return await comp({
        path: '/index/HOME/dashboard.html',
        id: 'dashboard',
        child: await Statistics(),
        position_id: 'cmp'
    })
}