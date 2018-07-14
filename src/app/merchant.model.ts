export class Merchant {
    name: string;
    id: string;

    constructor(obj?: any) {
        this.name = obj.name;
        this.id = obj.id;
    }
}