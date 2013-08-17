tagalog
=======

A sweet tagged logging framework (with plugins!)

###plugins?
well… someday.

##Woes
I've had logging woes recently trying debug code with the help of different logging frameworks.

I have several projects for which I am responsible, and these projects have to be tested in a production-like environment (solaris on a remote server) instead of my development environment (macbook pro on my lap). I could probably do some fancy vm stuff and a little more dependency injection in my tests... but sometimes it's really more worth it to put the thing up, let it break, and read the logs to find out why.

###PROBLEM
####log levels.

When I am looking for a mysterious bug, I don't always know where the problem is so I don't always know which log lines I want to see in the logs. Maybe the one line that will illuminate the issue is at level 'trace' and I won't ever see it because it is buried under a billion other log lines (like, maybe we are siege testing).

###SOLUTION
####Tagged logs!

```javascript
log = new Tagalog({
    "acorn":fs.createWriteStream('../myAcorns.log')
})
...
log.debug('did you steal my #acorn? ' + stolen? 'yes' : 'no')
```

**[myAcorns.log]**

```
did you steal my #acorn? yes 
```

AhHA!

Tagalog is in alpha; it's pretty silly right now (no formatted strings, no way to print objects, etc.), but even at this stage one could use it to tag logs and isolate the subjects in which one is interested. Tag a bunch of logs, turn them on and off as you need them. Don't trust yesterday-you to know what tommorow-you needs to know.

To recap:

1. tagged logs
2. debug quickly
3. ????
4. profit!

####License
MIT

See LICENSE for more details.