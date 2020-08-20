

//class - declaration

        class nameClass{
            constructor(){    //runs when class starts
                method1(){
                    //actions
                }
                method2(){
                     //actions
                }}

            }  


//class - instantiation, call metodo1

        const nameInstantiated = new  nameClass()		
        nameInstantiated.metodo1()

 // classe -inheritance 

        class Dad{}
        class Son extends Dad{}

  // classe - declaration statistical method

            class nameClass{     
                constructor(){}  
                static method1(){}  // don't access global scope

                
//class - instantiation, call metodo1 statistical method

            ameClass.method1() // don't need 'new'
    

//variable const, let and var

    const a = 3 //   immutable, no global escope
    let b =3   //    changeable, no global escope
    var c =3   //    changeable, global escope (hoisting)



// vetor operation

    //map

       
        const arr = [1,3,4,5,8,9]
        const newArr =arr.map(function(item){   
               return item *2              //  answer: vector with elements multiplied by 2
            })


    //reduce


        const arr = [1,3,4,5,8,9]
        const sum = arr.reduce(function(total, next){  
                return total + next             // answer: total sum
            })


    //filter


        const arr = [1,3,4,5,8,9]
        const a = arr.filter(function(item){ 
                return item % 2 ===0            // answer: new vector with only even elements
            })

   // find 
        
        const arr = [1,3,4,5,8,9]		
        const a = arr.find(function(item){    
                return item ===4         //answer: returns undefined or the element is found
            })


//arrow function

        // old way

        const a = arr.map(function(item){
                return item *2
            })

        // new away
        const b = arr.map((item)=>{ 
               return item * 2
            })

        // new simplified way 1
        const b = arr.map(item=>{ 
                   return item * 2
                })

        //new simplified way 2
        const b = arr.map(item => item * 2)


//parameters with default values

    function soma(a=3,b=6){
            return a+b
        }

    console.log(soma(1))  // retorna 7
    console.log(soma())   // retorna 9


//object destructuring


    //delcaration:
        const user = {
                name: "rafael",
                age: 31,              
                Address:{
                    city: 'New York',
                    state: 'NY'
                }}

      
    //get the values
    
               // new way
               
                            const { name, age, Address:{ city} } = user
                            console.log(nome, age, city) 
                //old way

                            const name = user.name
                            const age = user.age
                            const city = user.Address.city
                            console.log(name, age, city)

     //function parameters

                // new way
        
                        function showName({ name, age }) {
                            console.log(name, age)
                        }

                //old way

                        function showName(user){
                            console.log(user.name, user.age)
                        }


//rest operation


     //get  all the rest of object               

     
             const user = {
                     name: "rafael",
                    age: 31,
                     company:'uol'}

            const { name, ...rest} = user
            console.log(name)               // rafael
            console.log(rest)              // vector with all the rest


     //get all the rest of vetor    


            const arr = [1,2,3,4]

            const [ a, b, ...c] =arr

            console.log(a)                  //1
            console.log(b)                  //2
            console.log(c)                  //3,4


    //get all the rest of  paramenters

            function test(a,b, ...rest){
                    return rest
                }
            console.log(test(1,3,4,5,6))       // 4,5,6


//spread operation


    //join vector

            const arr1 = [1,2,3]
            const arr2 = [4,5,6]
            const arr3 = [...arr1, ...arr2]
            console.log(arr3)                   //[1,2,3,4,5,6]

    //copy user and overwrite property

            const user1 = {
                    name: "rafael",
                    age: 31,
                    company:'uol'}
            const user2 = {...user1, nname:"John" }         //will come out equal to user1 but changing the name to John


// template literals


            const name = "Diego";
            const age =23;

            //old way
                    console.log('My name is ' + name + ' and I am ' + age + ' years old')

            //new way
                    console.log(`My name is ${name} and I am  ${age} years old`)
    

//object short Syntax


        const name = "Diego";
        const age = 23;



            //old way
            const user1 = {
                    name: name,
                    age: age,
                    empresa: 'uol'}

           //new way
            const user2 = {
                    name,
                    age,
                    empresa: 'uol'}


 // import and export

        //#3: by function default  - usually one per file

            //file1

                export default function sum(a,b){
                    return a+b;
                }

            //file2

                import sumHere from "./file1"
                    console.log(sumHere(4,5))



        //#1: by functions

            //file1

                export function sum(a,b){
                        return a + b
                    }

                export function sub(a,b){
                        return a - b
                    }

           //file2

                import { sum, sub } from  './file1';
                    console.log(sum(1,2))
                    console.log(sub(1,2))


        //#2: all functions

            //file1
                export function sum(a,b){
                    return a + b
                }

                export function sub(a,b){
                    return a - b
                }

           //file2
    
                import * as func from "./file1"
                    console.log(func.sum(4,5))
                    console.log(func.sub(4,5))






//async/await - asynchronous programming


        const myPromise = ()=> new Promise(( resolve, reject) =>{ 
            setTimeout(() => { resolve('ok')}, 2000);
            });

        //old way

                myPromise()
                    .then(response => {
                            console.log(response)
                    })

        //new way 

                    async function  executePromise() {
                        const response = await myPromise();
                        console.log(response)
                    }  
                    executePromise();


        //note
            async function executePromise() {    //move on to the next line, after finishing
                console.log(  await myPromise())  
                console.log(  await myPromise())
                console.log(  await myPromise())
                console.log(  await myPromise())
                }  
                 executaPromise();

//axios with assync/await

        import axios from 'axios';

        class Api {
            static async getInfo() {
                    try {
                        const response = await axios.get(`https:/....`)
                        console.log(response)
                    } catch (err) {
                        console.log("error")
                        }
                    }
            }
        Api.getInfo()
        


