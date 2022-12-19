import {useState,useEffect} from 'react';
import {getComments as getCommentsApi,
createComment as createCommentApi } from '../api';
import Comment from './comment';
import CommentForm from './commentform';


const Comments = ({currentUserId})  =>{
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComment)=>backendComment.parentId===null )
    console.log("backendComments", backendComments);

    const getReplies=(commentId)=>{
        return backendComments
        .filter((backendComment)=>backendComment.parentId===commentId)
        .sort(
            (a, b)=>
            new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime()
        );
    }
    const addComment = (text, parentId)=>{
        console.log('addComment' +text+ ' '+ parentId);
        createCommentApi(text, parentId).then(comment=>{
            setBackendComments([comment,...backendComments])
        })
    };
    //useEffect stores data into the local storage 
    useEffect(()=>{
        getCommentsApi().then((data)=>{
            setBackendComments(data);
        });
        },[]);

    return(
        <div className="comments">
          <h3 className="comments-title">Comments</h3>
          <div className='comment-form-title'>Write comment</div>
          <CommentForm submitLabel="Write" handleSubmit={addComment}></CommentForm>
          <div className="comments-container">
                {rootComments.map((rootComment)=>(
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies= {getReplies(rootComment.id)}/>
                ))}
            </div>
        </div>
    );
};

export default Comments;