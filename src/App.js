import logo from './logo.svg';
import Comments from './comments/comments';
import Comment from './comments/comment';
import CommentForm from './comments/commentform';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comments currentUserId="1"/>
      </header>
    </div>
  );
}

export default App;
