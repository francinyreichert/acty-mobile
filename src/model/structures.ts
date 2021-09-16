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
    id: string;
    name: string;
    email: string;
    actions: Action[];
    lastId: 0;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    createAction(title: string, description: string, status: number): Action {
        this.lastId++;
        const action = this.addAction(this.lastId, title);
        action.description = description;
        action.status = status;
        return action;
    }

    addAction(id, title): Action {
        const action: Action = new Action(id, title);
        this.actions.push(action);
        this.lastId = id;
        return action;
    }

    deleteAction(id): Action {
        for (let index = 0; index < this.actions.length; index++) {
            const element = this.actions[index];
            if (element.id === id) {
                this.remove(element);
                return element;
            }
        }
    }

    remove(action): void {
        action.status = 1;
        action.modification = new Date();
    }
    
    restore(action): void {
        action.status = 0;
        action.modification = new Date();
    }
}
