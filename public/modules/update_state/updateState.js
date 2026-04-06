
export default function updateState(initialValue, onChangeCallback = null) {
    let listeners = [];

    const proxy = new Proxy({ value: initialValue }, {
        set(target, property, newValue) {
            if (target[property] === newValue) return true;

            target[property] = newValue;

            // Call the main callback if provided
            if (onChangeCallback && typeof onChangeCallback === 'function') {
                onChangeCallback(newValue, target[property]);
            }

            // Notify all registered listeners
            listeners.forEach(listener => {
                if (typeof listener === 'function') {
                    listener(newValue, target[property]);
                }
            });

            console.log("State changed:", property, "from", target[property], "to", newValue);
            return true;
        }
    });

    // Method to add listeners
    proxy.subscribe = function(callback) {
        if (typeof callback === 'function') {
            listeners.push(callback);
        }
        return proxy; // Allow chaining
    };

    // Method to remove listeners
    proxy.unsubscribe = function(callback) {
        listeners = listeners.filter(listener => listener !== callback);
        return proxy;
    };

    // Method to get current value
    proxy.getValue = function() {
        return proxy.value;
    };

    return proxy;
}
