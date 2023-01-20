export class Message{
    public messageText: string[] = [];
    public author: string[] = [];
    public created_at:number[] = [];
    public channelName:string = '';
   

    constructor(obj?: any){
        this.messageText = obj ? obj.messageText : [];
        this.author = obj ? obj.author : [];
        this.created_at = obj ? obj.created_at : [];
        this.channelName = obj ? obj.channelName : '';
       
       
    }
    public toJSON(){
        return {
            messageText: this.messageText,
            author: this.author,
            created_at: this.created_at,
            channelName: this.channelName

        }
    }


}
