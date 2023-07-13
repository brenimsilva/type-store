export default class Util {
    static idCounter: number = 0;
    constructor(){}

    static generateId(item_name: string): string
    {
        ++this.idCounter;
        return `${item_name}_${this.idCounter}`;
    }
}