//TODO:

/*
* 1. Create proxies with traps
* 2. Create proxies with Reflect()
* 3. Create proxies with get/set
* 4. Intercept a keychain
* 5. Check if the transpiler needs stage-0 in babel
*/

const target = {}

const handler = {
  get(target,propKey,reciever) {
    console.log(`It has ${propKey}`)
    return 123
  },
  has(target, propKey) {
    console.log(` it has also has ${propKey}`)

    return true
  }
}
const obj = new Proxy(target, handler)

console.log(obj.foo)
console.log(obj)
