const Comment = ({comment,replies})  =>{
    return(
        <div className="comment">
            <div className="comment-image-container">
                <image src='/user-icon.png'></image>
                </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{comment.createdAt}</div>
                    <div className="comment-text">{comment.body}</div>
                   {replies.length>0 &&(
                    <div className="replies">
                        {replies.map(reply =>(
                           <Comment comment={reply} key={reply.id} replies={[]} ></Comment>
                        ))} 
                    </div>
                    )}
                </div>
            </div>
        </div>
        
    );
};

export default Comment;