
var prototagalog = {

    regex: /#[\w]+/g,
    
    default_tag: 'default',

    debug:function(){
        var arg, args, tag, tags
        
        args = Array.prototype.slice.call(arguments)
        
        for (arg in args) {
            arg = args[arg]
            if ('string' == typeof arg) {
                
                tags = arg.match(this.regex) || [this.default_tag]
                
                for (tag in tags) {
                    tag = tags[tag]
                    
                    teg = tag.replace('#', '')
                    
                    if (this.outputs[teg]) {
                    
                        this.outputs[teg].write(arg)
                        this.outputs[teg].write('\n')
                    }
                }
            }
        }
    }

}

function Tagalog(outputs){
    this.outputs = outputs
}

Tagalog.prototype = prototagalog

module.exports = Tagalog
