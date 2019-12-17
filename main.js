
(function(){
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let a = Math.floor(Math.random() * who.length);
let b = Math.floor(Math.random() * what.length);
let c = Math.floor(Math.random() * when.length);
 document.querySelector('#excuse').innerHTML = `${who[a]}, ${what[b]}, ${when[c]}`;
})();