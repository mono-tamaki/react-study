const hello_ex = document.querySelector('.hello_ex');



// プロパティ　＆　複数のDOM
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
            </div>
        );
    }
});

// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
    <Comment author="Pete Hunt" />,
    hello_ex
);





