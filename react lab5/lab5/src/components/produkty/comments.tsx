import { useState,useEffect } from "react";
import Comment from "./comment";
import axios from 'axios';

interface User{
    id: number;
    username: string;
    fullname: string;
}

interface CommentType{
    id: number;
    body: string;
    postId: number;
    likes:number;
    user: User;
}



function Comments() {
    const [comments,setComments] = useState<Array<CommentType>>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(  () => {
        const fetchComments = async () => {
            try{
                let data = await axios.get("https://dummyjson.com/comments");
                console.log(data);
                let comments = data.data.comments;
                setComments(comments.slice(0,5));
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        };
        

        fetchComments();
        
    },[]);

    return (
        <div>
            <h1>Comments</h1>
            {loading ? <p>Loading...</p> : comments.map(comment => <Comment key={comment.id} {...comment} />)}
        </div>
    );


}


export default Comments;