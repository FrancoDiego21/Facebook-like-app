import { Post } from "./post.model";
export class serviceResponse{
    data : Post[];

    constructor(data : Post[]){
        this.data = data;
        
    }
}
