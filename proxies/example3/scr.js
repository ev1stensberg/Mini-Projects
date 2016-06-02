//TODO:

/*
* 1. Create proxies with traps
* 2. Create proxies with Reflect()
* 3. Create proxies with get/set
* 4. Intercept a keychain
* 5. Check if any transpiler needs stage-0 in babel
*/

const target = {}

const handler = {
  get(target,propKey,reciever) {
    console.log("get" + propKey)
    return 123
  }
}

const proxy = new Proxy(target, handler)

console.log(proxy.foo)

// this is core level
const objekt = {
  hellyea() {
    // some arbitrary code
  }
}

// this is meta level
for(const key of Object.keys(objekt)) {
  console.log(key)
}
// transfering props
const obj = {hey: 'ho'}
const obj2 = {}

function moveProperty(source, propertyName, target) {
  target[propertyName] = source[propertyName]
  delete source[propertyName]
}

moveProperty(obj, 'hey', obj2);

console.log(Object.keys(obj2).toString())
