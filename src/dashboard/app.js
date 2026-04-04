import App from "./main";
import render from '../modules/component/render'

// Wait for DOM to be fully loaded before rendering
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        await render({
            components: await App(),
            id: 'app'
        });
    });
} else {
    // DOM is already loaded (e.g., if this script was deferred)
    await render({
        components: await App(),
        id: 'app'
    });
 
}