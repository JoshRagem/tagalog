var util = require('util'),

prototagalog = {

    regex: /#[\w]+/g,
    
    default_tag: 'default',

    debug:function(){
        var i, count, arg, args, tag, tags, bod = ''
        
        args = Array.prototype.slice.call(arguments)

        for (i = 0, count=args.length; i < count; i++) {
            arg = args[i]
            
            if ('string' != typeof arg) {
                arg = util.inspect(arg)
            }
            bod += arg+(count?' ':'')
        }
        
        tags = bod.match(this.regex) || [this.default_tag]
                
        for (i = 0, count = tags.length; i < count; i++) {
            tag = tags[i]
            
            teg = tag.replace('#', '')
            
            if (this.outputs[teg]) {

                this.outputs[teg].write(bod)
                this.outputs[teg].write('\n')
            }
        }
    }

}

function Tagalog(outputs){
    this.outputs = outputs
}

Tagalog.prototype = prototagalog

module.exports = Tagalog
