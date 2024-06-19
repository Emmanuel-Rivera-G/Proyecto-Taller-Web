const KEYS = {
    USER: 'sharedUserArray',
    ANNOTHERARRAY: 'sharedAnotherArray'
};

const getArray = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

const saveArray = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
};

const createProxiedArray = (key) => {
    const array = getArray(key);
    
    const proxyHandler = {
        set(target, property, value) {
            target[property] = value;
            saveArray(key, target);
            return true;
        }
    };

    return new Proxy(array, proxyHandler);
};

const USER = createProxiedArray(KEYS.USER);
const ANNOTHERARRAY = createProxiedArray(KEYS.ANOTHERARRAY);

export { USER, ANNOTHERARRAY };