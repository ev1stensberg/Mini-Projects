//TODO:

/*
* 1. Create proxies with traps
* 2. Create proxies with Reflect()
* 3. Create proxies with get/set
* 4. Intercept a keychain
* 5. Check if the transpiler needs stage-0 in babel
*/

const proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        console.log('GET '+propertyKey);
        return target[propertyKey];
    }
});

const obj = Object.create(proto);
