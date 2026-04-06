import comp from "/modules/component/component.js";

export default async function Statistics() {
    return await comp({
        path: '/index/HOME/components/statistics.html',
        id: 'dash_cmp'
    })
}