const KEYS = {
    USER: 'sharedUserArray',
    EMPLEADOS: 'sharedEmployeesArray',
    CONTRATOS: 'sharedContractsArray',
    CARGOS: 'sharedCargosArray',
    DEPARTAMENTOS: 'sharedDepartmentsArray',
    PAGOS: 'sharedPagosArray',
    DETALLEPAGOS: 'sharedDetallePagosArray'
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

const clearStorageByKey = (key) => {
    localStorage.removeItem(key);
};

const USER = createProxiedArray(KEYS.USER);
const EMPLEADOS = createProxiedArray(KEYS.EMPLEADOS);
const CONTRATOS = createProxiedArray(KEYS.CONTRATOS);
const CARGOS = createProxiedArray(KEYS.CARGOS);
const DEPARTAMENTOS = createProxiedArray(KEYS.DEPARTAMENTOS);
const PAGOS = createProxiedArray(KEYS.PAGOS);
const DETALLEPAGOS = createProxiedArray(KEYS.DETALLEPAGOS);

const clearUser = () => {
    clearStorageByKey(KEYS.USER);
    USER.length = 0;
}

const clearEmployeesArray = () => {
    clearStorageByKey(KEYS.EMPLEADOS);
    EMPLEADOS.length = 0;
}

const clearContractsArray = () => {
    clearStorageByKey(KEYS.CONTRATOS);
    CONTRATOS.length = 0;
}

const clearCargosArray = () => {
    clearStorageByKey(KEYS.CARGOS);
    CARGOS.length = 0;
}

const clearDepartmentsArray = () => {
    clearStorageByKey(KEYS.DEPARTAMENTOS);
    DEPARTAMENTOS.length = 0;
}

const clearPagosArray = () => {
    clearStorageByKey(KEYS.PAGOS);
    PAGOS.length = 0;
}

const clearDetallePagosArray = () => {
    clearStorageByKey(KEYS.DETALLEPAGOS);
    DETALLEPAGOS.length = 0;
}

export { USER, EMPLEADOS, CONTRATOS, CARGOS, DEPARTAMENTOS, PAGOS, DETALLEPAGOS, clearUser, clearEmployeesArray, clearContractsArray, clearCargosArray, clearDepartmentsArray, clearPagosArray, clearDetallePagosArray };