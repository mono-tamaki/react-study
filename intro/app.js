const hello_ex = document.querySelector('.hello_ex');





// プロパティ　＆　複数のDOM
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
    <CommentList />,
    hello_ex
);





