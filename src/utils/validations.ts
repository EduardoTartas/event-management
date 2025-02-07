import z from 'zod';

const userSchema = z.object({
    name: z.string().min(3, { message: "Must be at least 3 characters" }).max(50, { message: "Must be at most 50 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*_-]{8,}$/, { message: "Your password should have a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number" })
});

const eventSchema = z.object({
    name: z.string().min(3, { message: "Must be at least 3 characters" }).max(50, { message: "Must be at most 50 characters" }),
    date: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,{ message: "Invalid format! Use DD-MM-YYYY (e.g., 01-01-2025)" })
});

export function validateUser(name: string, email: string, password: string): boolean {
    const result = userSchema.safeParse({ name, email, password });

    if (result.success) {
        console.log("User is valid");
        return true;
    }
    else {
        console.log(result.error.errors.map(err => err.message));
        return false;
    }
}

export function validateEvent(name: string, date: string): boolean {
    const result = eventSchema.safeParse({ name, date });

    if (result.success) {
        console.log("Event is valid");
        return true;
    }
    else {
        console.log(result.error.errors.map(err => err.message));
        return false;
    }
}