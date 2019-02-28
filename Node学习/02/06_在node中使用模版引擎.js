var template = require('art-template');

var ret = template.render('hello {{name}}',{
    name : 'Jack!'
});

console.log(ret);