import App from "./main.js";
import render from '/modules/component/render.js'
import fileclone from "./scripts/script.js";
import Script2 from './scripts/script2.js';
import interSect from "./scripts/script3.js";
import renderGraph from "./scripts/graph.js";
import { expand } from "./scripts/expand.js";

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

/*fileclone();
Script2();
interSect();
*/
renderGraph();
expand();