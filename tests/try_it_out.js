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

log.debug('hello john, this is it')
log.debug('hello #john, this is it')
log.debug('hello #josh, this is it')
log.debug('hello #joe, this is it')
log.debug('hello #jimbo, this is it')

log.debug('end')
