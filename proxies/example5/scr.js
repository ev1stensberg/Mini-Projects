//TODO:

/*
* 2. Create proxies with Reflect()
* 4. Intercept a keychain
*/

function createSomething(...a) {
  var dill = [...a]
  return dill
}

const arrays = createSomething(1,2,3)
console.log(arrays.shift())


// Allow proxies on negative indices & bracket notations
function createArray(...s) {
    const handler = {
        get(target, propKey, receiver) {
            // Sloppy way of checking for negative indices
            const index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };
    // Wrap a proxy around an Array
    const target = [];
    target.push(...s);
    return new Proxy(target, handler);
}
const arr = createArray('a', 'b', 'c');
console.log(arr[-1]); // c

// create databinding through set
function createObservedArray(callback) {
    const array = []; // create the array
    return new Proxy(array, { // return a  proxy from func, on the array
        set(target, propertyKey, value, receiver) { // use set trap and use target etc as params to pass down
            callback(propertyKey, value); // call the callback func
            return Reflect.set(target, propertyKey, value, receiver);
        }
    });
}
const observedArray = createObservedArray(
    (key, value) => console.log(`${key}=${value}`));
observedArray.push('a', 'b');
