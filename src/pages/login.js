import comp from '../modules/component/component';

async function Login() {
    return await comp({
        path: '/index/login_page/login.html',
        id: 'login'
    });
}

export default Login;