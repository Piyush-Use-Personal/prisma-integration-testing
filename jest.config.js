const path = require('path')
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   setupFiles: [path.resolve(__dirname) + '/setup.js'],
}