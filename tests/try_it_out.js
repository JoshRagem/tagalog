var fs = require('fs'),
    tag = require('../')
    resolve = require('path').resolve

log = new tag({
    'josh':process.stdout,
    'default':process.stderr,
    'john':process.stdout,
    'joe':process.stdout,
    'jimbo':fs.createWriteStream(resolve(__dirname, './test.txt'))
})

log.josh('hello john, this is it')
log('hello #john, this is it')
log('hello #josh, this is it')
log('hello #joe, this is it')
log('hello #jimbo, this is it')
log('hello #jimbo, this is object', {helol:'wold'})

log.default('end')
