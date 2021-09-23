export class Action {
    id: string;
    title: string;
    description: string;
    modification: Date;
    status: number;
    
    constructor(title: string, description: string, status: number) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.modification = new Date();
    }
}