import { useState } from "react";

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



function Comment(props: CommentType){
    const [likes,setLikes] = useState<number>(props.likes);
    const [liked,setLiked] = useState<boolean>(false);

    const like = () => {
        if(liked){
            setLikes(likes-1);
            setLiked(false);
        }
        else{
            setLikes(likes+1);
            setLiked(true);
        }
    }

    return (
        <div>
            <h2>{props.user.username}</h2>
            <p>{props.body}</p>
            <p>{likes} likes</p>
            <button onClick={like}>{liked ? "Unlike" : "Like"}</button>
        </div>
    );

}

export default Comment;