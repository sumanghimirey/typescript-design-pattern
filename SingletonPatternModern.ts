//Creational Pattern
// -- Singleton pattern
    // Global Access Point -- you only have one and only one acess point of its instance.
    // The instance is cached somewhere --we store it within a class instance as a static variable but can be stored insied IOC container as well.
    // the instance is created on demand --
    // unique instance per class 


    // When we use singleton design pattern .... we will create singleton in create database connection in api endpoint connection or filesystem management. 

    // Example 

    export class Singleton {

        //prevent creation of new instances 
        private constructor() {}

        //cache the instance
        private static instance: Singleton


        //single access

        static getInstance() {
            if(!Singleton.instance) {
                Singleton.instance = new Singleton
            }
            return Singleton.instance
        }

        businessLogic():Promise<any> {
            return Promise.resolve(['abc'])

        }
        
    }

    const singleton = Singleton.getInstance().businessLogic()
    singleton.then((res)=>{
        console.log(res)
    })