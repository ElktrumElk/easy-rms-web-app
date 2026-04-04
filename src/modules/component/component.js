/**
 * ## The comp Module
 * The component(comp) module is used to fetch the html template and convert the string to an actual node element.
 * With the given element id only returns that element and it children.
 * 
 * @param {Object} param0 
 * @returns
 * 
 *
 * 
 */
const _cachedComponent = {};

/**Fetches the data */
async function fetchComponet({
    isCached = true,
    cached_obj = null,
    id = null,
    path = null,
    chached_age = null

}) {
    try {

        const res = await fetch(path);
        const data = await res.text();

        
        
        /**Comment: Check if if user cached */
        if (isCached) {
            cached_obj[`${id}`] = {
                component: data,
                aged: chached_age,
                cached_time: Date.now()
            };
        }
        return data;

    } catch(e) {
        console.error(e);
        document.body.innerHTML = `<div style="background: whitesmoke; padding: 1rem"><p><strong>Error</strong>${e}</p></div>`
    }
}

export default async function comp({
    path = "",
    id = "",
    isCached = true,
    chached_age = 1000 * 60,
    parseFormat = "text/html",
    html = null,
    child = null,
    position_id = null

}) {

    /**Holds the html string*/
    let data;  //init

    /**Comment: Check if html string is given instead */
    if (html !== null) {
        /**Comment: Then set the given html string to the data */
        data = html.toString();

    } else {
        /**Comment: Check for the cached html string by it id if it was cached */
        if (Object.keys(_cachedComponent).includes(id)) {

            //const
            
            const current_time = Date.now();
            const cached_time = _cachedComponent[`${id}`].cached_time;
            const cAge = _cachedComponent[`${id}`].aged;

            /**Comment: check if cached has expired */
            if (cached_time - current_time > cAge) {

                //console.log("fetching component again"); //debugging
                /**Comment: Then fetch the Component again and cached*/
                data = await fetchComponet({
                    cached_obj: _cachedComponent,
                    id: id,
                    isCached: true,
                    path: path,
                    chached_age: chached_age
                });

            } else {
                //console.log("gettting cached component"); //debugging
                /**Comment: Set the cached string to the data */
                data = _cachedComponent[`${id}`].component;
            }
        } else {
            try {
                //console.log("fetching new component");
                /**Comment: Fetched the html component */
                data = await fetchComponet({
                    cached_obj: _cachedComponent,
                    id: id,
                    isCached: true,
                    path: path,
                    chached_age: chached_age
                });
                //console.log("component fetched"); //debugging

            }
            catch (e) {
                console.error(e);
                document.body.innerHTML = `<div style="background: whitesmoke; padding: 1rem"><p><strong>Error</strong>${e}</p></div>`
            }
        }
    }
    const _dom = new DOMParser();
    const _parser = _dom.parseFromString(data, parseFormat);

    if (child !== null) {
        if (child !== "") {
            _parser.getElementById(position_id).before(child);
        }
    }

    const _component = _parser.getElementById(id);

    return _component;
}