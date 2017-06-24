var start = Date.now();

// console.log(start)

setTimeout(function(){
    console.log(Date.now() - start);

    for(let i = 0; i < 1000000000; i++) {}
},1000);

setTimeout(function(){
    console.log(Date.now() - start);
},2000);