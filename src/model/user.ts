
export class User {
    uid?: string;
    did?: string;
    name: string;
    email: string;
    password: string;

    constructor() { 
    }
}

export interface UserResponse {
    result?: {
        email?: string;
        uid?: string;
        user?: any;
    };
    error?: {
        code?: string;
        message?: string;
    };
}
