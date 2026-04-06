
class qRouter {
    /** */
    constructor({ id = null, type = "hide" }) {
        this.id = id;
        this.history = [];
        this.type = type;
    }


    initRoutes({
        routes = []

    }) {
        /**This holds the component-page*/
        this.pages = {};

        /**Comment: store components */
        routes.forEach(route => {
            this.pages[`${route.name}`] = {
                component: route.component
            }
        })
    }

    /**Path to push */
    async load(name) {
        try {
            /**check if the pages exist */
            if (Object.keys(this.pages).includes(name)) {

                /**Comment: Get the component from the created pages array*/
                let cmp = await this.pages[`${name}`].component;

                /**Debugging */
                // console.log(Array.from(document.getElementById(this.id).children));

                // Check if container exists before accessing it
                const container = document.getElementById(this.id);

                if (!container) {
                    throw new Error(`Router container with id '${this.id}' not found`);
                }

                /**Comment: Check if the component exist within the container */
                if (Array.from(container.children).includes(document.getElementById(cmp.id))) {

                    document.getElementById(cmp.id).style.display = "";


                } else {
                    container.appendChild(await this.pages[`${name}`].component);
                    location.hash = cmp.id;
                }
            }
        } catch (e) {

            const container = document.getElementById(this.id);
            if (container) {
                container.innerText = "Path not found";
            }
            console.error('Router load error:', e);
        }
    }

    async push(name) {

        try {

            let cmp = await this.pages[`${name}`]?.component;

            if (cmp === undefined) {
                Array.from(document.getElementById(this.id).children).forEach(_child => {
                    _child.remove();
                })
            }
            else {
                // Check if component element exists before hiding
                const cmpElement = document.getElementById(cmp.id);
                if (cmpElement) {

                    /**Comment: Check for types.
                     * if the destory is given then the current component will be destory
                     * and the new one loads in
                     */
                    if (this.type === "destory") {
                        document.getElementById(cmp.id).remove();
                    } else if (this.type === "hide") {
                        cmpElement.style.display = "none";
                    } else {
                        cmpElement.style.display = "none";
                    }
                }
                this.history.push(await this.pages[`${name}`].component);
            }


        } catch (e) {

            const prev = this.history[this.history.length - 1];

            // Check if previous component element exists before showing
            if (prev && prev.id) {
                const prevElement = document.getElementById(prev.id);
                if (prevElement) {
                    prevElement.style.display = "";
                }
            }

            console.error('Router push error:', e)
            console.log(prev)
        }

    }

    async back(count) {
        // document.getElementById(this.id).removeChild()
    }
}

export default qRouter;

export function crossEvent(event, id, cb) {
    const targetElement = document.getElementById(id);

    if (!targetElement) {
        console.error(`Element with id '${id}' not found for crossEvent`);
        return;
    }

    // For scroll events, add listener directly to the element for better performance
    if (event === 'scroll') {
        targetElement.addEventListener(event, (e) => {
            cb && cb(e);
        });
    } else {
        // For other events, use document delegation
        document.addEventListener(event, (e) => {
            // Check if the event target is the element itself or within it
            const elem = e.target.closest(`#${id}`) || (e.target.id === id ? e.target : null);
            if (elem) {
                cb && cb(e);
            }
        });
    }
}

/**
 * 
 * @param {Object} param0
 * @param {Class} param0.router - Accept the routing class
 * @param {String} param0.currentRoute
 * @param {Boolean} param0.switcher - True / False
 * @param {Boolean} param0.setHashHistory - True / False
 * @param {String} param0.type - Hash / path. when an hash is used 
 */
export function autoRouting({
    router = {},
    currentRoute = null,
    switcher = null,
    setHashHistory = false,
    type = "path"
}) {
    /**
     * 
     * @param {*} cb 
     */
    function routeResolve(cb) {


        let id = location.hash.replace("#", "");
        console.log(location.pathname)

        // Only call cb when it's a function (not an event object)
        if (typeof cb === 'function') {
            id = cb(id);
            console.log("yes")
        }

        if (!id && setHashHistory) {
            let __hash_his = localStorage.getItem("hash_history");
            if (__hash_his) {
                id = __hash_his;
                localStorage.removeItem("hash_history");
                console.log(__hash_his)
            }
        }

        if (!id) {
            id = 'home'; // default route
            console.log("yo")
        }

        // Check if the route exists
        if (Object.keys(router.pages).includes(id)) {
            // Push current route to hide it
            router.push(currentRoute);
            // Load the new route
            router.load(id);
            // Update current route
            currentRoute = id;
            // Update isHome flag
            switcher = (id === 'home');
            console.log(switcher)
        }

        if (setHashHistory) {
            // Save the hash page 
            localStorage.setItem("hash_history", currentRoute);
        }
    }

    // Listen for hash changes to automatically route
    window.addEventListener('hashchange', () => routeResolve());

    // Route on initial load
    window.addEventListener("load",
        routeResolve((id) => {
            /**Retrieve current cached hashed pages */
            let __hash_his = localStorage.getItem("hash_history");

            /**Comment: Check if the given hash exist */
            if (__hash_his) {
                if (setHashHistory) {
                    id = __hash_his;
                    localStorage.removeItem("hash_history");
                    console.log(id)
                    return id;
                }
            }
        })
    );
}