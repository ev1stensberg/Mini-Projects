# Mini-Projects
A repo containing my mini projects.

##Spinning square

A spinning square turning into a circle. Minified as much as possible.

Either open index.html or you can change the script to refer to script.js

Remember to remove the existing js if you do this.


##state-vs-props

Demonstrating how to set default props vs default state in React

##Sleep-node

Two line script to make your mac sleep from using node-processes 

```js
#!/usr/bin/env node

const spawn = require('child_process').spawn;
const ls = spawn('osascript', ['-e', 'tell application "System Events" to sleep']);

```
