
export default async function render({
    components = null,
    id = ''
}) {
    console.log(components) //debugging
    if (components === null) {
        document.body.innerHTML = "Invalid component"
        return false;
    }
    else {
        if (id === '') {
            components.forEach(async _cmp => {
                document.body.appendChild(_cmp);
                const __rand = parseInt(Math.floor(Math.random() * 99999))
                location.hash = "cmp_" + __rand;
            })
        } else {
            components.forEach(async _cmp => {
                try {
                    // Check if element exists before trying to append
                    const targetElement = document.getElementById(id);
                    if (!targetElement) {
                        throw new Error(`Element with id '${id}' not found in DOM`);
                    }
                    targetElement.appendChild(_cmp);
                    location.hash = id;
                }
                catch (e) {
                    console.error(`Error appending component to ${id}:`, e);
                    document.body.innerHTML = "Error: Frame not found!";
                    const __rand = parseInt(Math.floor(Math.random() * 99999))
                    location.hash = "error_" + __rand;

                }
            })
        }
    }
}

export async function insert({
    components = null,
    id = null,
    pos = "before",

}) {

    if (components !== null && id !== null) {
        components.forEach(_cmp => {

            document.getElementById(id)[`${pos}`](_cmp);
        })
    } else {
        document.body.innerHTML = "Invalid arguments. Required atleast 2 argumants"
    }
}