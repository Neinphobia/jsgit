console.log('hello world')
const message = {
    text:"Hello",
    id:553
}
console.log(message.id);
function sayHi(a,b){ 

        return console.log(a+b); //No type safety!
}
sayHi("Hello ", "World!");
//git branch -b yenilikler
//git checkout master 
//switching..
//here is yenilikler branch


//simple fetch get request 
let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/5");
    fetchRes.then(res =>
        res.json()).then(data => {
            console.log(data)
        })

        //git remote add url
        //git branch -M yenilikler
        //git push origin yenilikler

        // --> master git remote add url
        // git branch -M main
        // git push -u origin main
        //