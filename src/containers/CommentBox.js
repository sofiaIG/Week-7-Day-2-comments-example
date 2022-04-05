import React, {useState} from "react";
import CommentList from '../components/CommentList';
import CommentForm from "../components/CommentForm";


const CommentBox = () =>{

    const [comments, setComments] = useState(
        [
            {
                id:1,
                author:"Rick James",
                text: "React is a heck of a framework"
            },
            {
                id:2,
                author:"Valeria Gibson",
                text: "I am dreaming in code"
            }
        ]

        
    )
        const addComment = (submittedComment) => {
            submittedComment.id = Date.now();
            const updatedComments = [...comments, submittedComment];
            setComments(updatedComments);
        }

    return(
        <>
            <h1> Comments </h1>
            <CommentList comments = {comments} />
            <h2>Add a Comment:</h2>
            <CommentForm onCommentSubmit = {(comment) => addComment(comment)}/>
        </>
    )
}

export default CommentBox;