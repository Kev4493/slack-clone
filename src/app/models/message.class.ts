export class Message {
    creator: any;
    text: any = '';
    createdAt: any;
    channelName: string = '';

    constructor(obj?: any) {
        this.creator = obj ? obj.creator : '';
        this.text = obj ? obj.text : '';
        this.createdAt = obj ? obj.createdAt : '';
        this.channelName = obj ? obj.channelName : '';
    }

    public toJSON() {
        return {
            creator: this.creator,
            text: this.text,
            createdAt: this.createdAt,
            channelName: this.channelName
        }
    }
}