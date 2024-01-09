// => in js, asynch js is sth that can start now and finish later
// JS is a single-threaded language that can be asynchronized in nature, ie it cannot block any other code from running

// A Promise is a request that can be resolved or rejected
// first thing to ask anytime you want to fetch a data you need to ask for the resource or endpoint 
// A  File returend to you after a request is called a JSON File ? needs processing into a pure obj

fetch("index.json")
.then((response) => response.json())
.then((data) => console.log(data))
.catch(() => console.log("sorry cannot fetch data"));

// step 1 to point my folder to git => cd means change directory so cd Desktop click enter
// step 2 cd name of the folder click enter
// once you've pointed git to the folder you are working on, the next thing is to iitialize your folder, initializing means telling git to track the folder
// the next command is => git init click enter
// git status is used to check the status of the code
// git add click enter => is used to add files 
// gid commit -m click enter => to save