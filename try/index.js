const { getLocalTime, username } = require('node-typescript-package-startup')

console.log( getLocalTime() )

console.log( username('John', 'Doe') )