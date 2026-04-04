import comp from "../../modules/component/component"

export default async function Dashboard() {
    return await comp({
        path: '/index/HOME/dashboard.html',
        id: 'dashboard'
    })
}