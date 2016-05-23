function createDefensiveObject(target) {

    return new Proxy(target, {
        get: function(target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new ReferenceError(defensivePerson.name + "´s \"" + property + "\" does not change.");
            }
        }
    });
}

var person = {
    name: "John Snow"
};

var defensivePerson = createDefensiveObject(person);

console.log(defensivePerson.name);
console.log(defensivePerson.age);
