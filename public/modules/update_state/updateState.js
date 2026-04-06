
export default function updateSatet(value, func) {

    const proxy = new Proxy({ value }, {

        set(target, property, nvalue) {
            if (target[property] === nvalue) return true

            target[property] = nvalue;
            func;
            console.log("State change")
            return true;
        }
    });

    return proxy;
};
