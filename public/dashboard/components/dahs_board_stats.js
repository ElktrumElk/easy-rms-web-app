import comp from "/modules/component/component.js";

export default async function HomeScreen() {
    return await comp({
        path: '/index/HOME/dashboard_stats.html',
        id: 'main_page'
    })
}