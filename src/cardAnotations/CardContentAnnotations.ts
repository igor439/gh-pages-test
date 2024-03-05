import { ObjectHTMLTemplate, TamplateObserver } from "../types/types.js";



export function image(target: any, key: string){

    
    let className:string = target.constructor.name;
    
    const tamplete = getFromLocalStorage("ClassesTamplate")
    
    
    if(tamplete){


        if (!tamplete[className]) {
            tamplete[className] = {} as ObjectHTMLTemplate;
        }

        tamplete[className][key] = 'img'
        console.log(key)
        
        saveToLocalStorage("ClassesTamplate",tamplete)
        

    }else{
        
        const newTamplete  = {className:{} as ObjectHTMLTemplate} as TamplateObserver
        newTamplete.className[key] = 'img'
        
        saveToLocalStorage("ClassesTamplate",newTamplete)

    }
    


    
}

export function h1(target: any, key: string){


    let className:string = target.constructor.name;

    const tamplete = getFromLocalStorage("ClassesTamplate")
    
    if(tamplete){



        if (!tamplete[className]) {
            tamplete[className] = {} as ObjectHTMLTemplate;
        }

        tamplete[className][key] = 'h1'

        
        saveToLocalStorage("ClassesTamplate",tamplete)
        

    }else{
        
        const newTamplete  = {className:{} as ObjectHTMLTemplate} as TamplateObserver
        newTamplete.className[key] = 'h1'
        console.log(key)
        
        saveToLocalStorage("ClassesTamplate",newTamplete)

    }
}

export function p(target: any, key: string){



    let className:string = target.constructor.name;

    const tamplete = getFromLocalStorage("ClassesTamplate")
    
    if(tamplete){

        console.log(tamplete)        

        if (!tamplete[className]) {
            tamplete[className] = {} as ObjectHTMLTemplate;
        }

        tamplete[className][key] = 'p'
        saveToLocalStorage("ClassesTamplate",tamplete)

    }else{
        
        const newTamplete  = {className:{} as ObjectHTMLTemplate} as TamplateObserver
        newTamplete.className[key] = 'p'
        console.log(key)
        
        saveToLocalStorage("ClassesTamplate",newTamplete)

    }

}

export function h2(target: any, key: string){

    let className:string = target.constructor.name;
    const tamplete = getFromLocalStorage("ClassesTamplate")
    
    if(tamplete){



        if (!tamplete[className]) {
            tamplete[className] = {} as ObjectHTMLTemplate;
        }

        tamplete[className][key] = 'h2'

        
        saveToLocalStorage("ClassesTamplate",tamplete)
        

    }else{
        
        const newTamplete  = {className:{} as ObjectHTMLTemplate} as TamplateObserver
        newTamplete.className[key] = 'h2'
        console.log(key)
        
        saveToLocalStorage("ClassesTamplate",newTamplete)

    }
}

async function saveToLocalStorage(key: string, value: TamplateObserver) {
    try {
        // Convert the object to a JSON string
        const jsonString = JSON.stringify(value);

        // Save to localStorage
        sessionStorage.setItem(key,jsonString);
        

        //console.log(`Object saved to localStorage with key: ${key}`);
    } catch (error) {
        console.error("Error saving object to localStorage:", error);
    }
}


 function getFromLocalStorage(key: string): TamplateObserver | null {
    try {
        const jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            // Parse the JSON string to an object
            return JSON.parse(jsonString) as TamplateObserver;
        }
    } catch (error) {
        console.error("Error retrieving object from localStorage:", error);
    }

    return null;
}







export default class ObjectTemplateRepo {

    private  ObjectsTemplates:ObjectHTMLTemplate[];
    private _observe!:TamplateObserver;
    private static _instance:ObjectTemplateRepo;

    private constructor() {
        this.ObjectsTemplates = []
    }
    
    static getInstance():ObjectTemplateRepo{
        if (!ObjectTemplateRepo._instance) {

            ObjectTemplateRepo._instance = new ObjectTemplateRepo();

        }

        return ObjectTemplateRepo._instance;
    }

    public getObjectTemplate(key:string):ObjectHTMLTemplate | void{

        const template = getFromLocalStorage("ClassesTamplate");
    
        if (template && template[key]) {
            return template[key];
        }
    

    }

  



}








