export class Message {
    creator: string;
    text: string;
    createdAt: number;

    constructor(obj?: any) {
        this.creator = obj ? obj.creator : '';
        this.text = obj ? obj.text : '';
        this.createdAt = obj ? obj.createdAt : '';
    }

    publicToJSON() {
        return {
            creator: this.creator,
            text: this.text,
            createdAt: this.createdAt,
        }
    }
}