import z from 'zod';

const userSchema = z.object({
    name: z.string().min(3,{message: "Must be at least 3 characters"}).max(50, {message:"Must be at most 50 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,{message:"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"})
});

const eventSchema = z.object({
    name: z.string().min(3,{message: "Must be at least 3 characters"}).max(50, {message:"Must be at most 50 characters"}),
    date: z.date({message: "Invalid date"})
});

 export function validateUser(name:string, email:string, password:string):boolean{
    const result = userSchema.safeParse({name, email, password});
    
    if(result.success){
        console.log("User is valid");
        return true;
    }
    else{
        console.log(result.error.format().password?._errors.toString());
        return false;
    }
}

function validateEvent(name:string, date:string):boolean{
    const result = eventSchema.safeParse({name, date});
    
    if(result.success){
        console.log("Event is valid");
        return true;
    }
    else{
        console.log(result.error.errors);
        return false;
    }
}