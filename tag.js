var util = require('util')

function Tagalog(outputs, default_tag, regex){
    var tag,

    self = function(){
        var i, count, arg, args, tag, tags, bod = ''
    
        args = Array.prototype.slice.call(arguments)

        for (i = 0, count=args.length; i < count; i++) {
            arg = args[i]
            
            if ('string' != typeof arg) {
                arg = util.inspect(arg)
            }
            bod += arg+(count?' ':'')
        }
        
        tags = bod.match(self._regex) || [self._default_tag]
                
        for (i = 0, count = tags.length; i < count; i++) {
            tag = tags[i]
            
            teg = tag.replace('#', '')
            
            if (self._outputs[teg]) {

                self._outputs[teg].write(bod)
                self._outputs[teg].write('\n')
            }
        }
    }
    self._outputs = outputs
    self._regex = regex || /#[\w]+/g
    self._default_tag = default_tag || 'default'

    for (tag in outputs) {
        (function(key, out){
            self[key] = function(){
                var args = Array.prototype.slice.call(arguments)
                args.unshift('#'+key)
                self.apply(self,args)
            }
        })(tag, outputs[tag])
    };

    return self
}

module.exports = Tagalog
