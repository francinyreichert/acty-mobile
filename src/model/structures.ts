export class Action {
    id: number;
    title: string;
    description: string;
    modification: Date;
    status: number;
    
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.modification = new Date();
        this.status = 0;
    }
}

export class User {
    uid?: string;
    did?: string;
    name: string;
    lastName: string;
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
