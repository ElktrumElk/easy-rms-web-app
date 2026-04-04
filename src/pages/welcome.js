import comp from '../modules/component/component';

async function Welcome() {
    return await comp({
        path: '/index/welcome_page/welcome.html',
        id: 'welcome_screen'
    });
}

export default Welcome;