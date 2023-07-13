export default class Util {
    static idCounter = 0;
    constructor() { }
    static generateId(item_name) {
        ++this.idCounter;
        return `${item_name}_${this.idCounter}`;
    }
}
