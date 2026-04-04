import qRouter, { autoRouting, crossEvent } from '../modules/quick_router/qRouter';
import Login from '../pages/login';
import Welcome from '../pages/welcome';

export default async  function ScriptA() {
    const routes = [
        {
            name: 'welcome',
            component: await Welcome()
        },
        {
            name: 'login',
            component: await Login()
        }
    ];

    const router = new qRouter({
        id: 'app',
        type: 'destory'
    });

    router.initRoutes({
        routes: routes
    });

    crossEvent('click', 'sign_in', () => {
        router.load('login');
        router.push('welcome')
    })

    autoRouting({
        router: router,
        currentRoute: 'app'
    })
}