const hello_ex = document.querySelector('.hello_ex');




// ES5ɽ��
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <p>This is one comment</p>
                <p>This is *another* comment</p>
            </div>
        );
    }
});

// �������ɤ߹����Hello��Component��ɽ�����Ƥߤޤ��礦
ReactDOM.render(
    <CommentList />,
    hello_ex
);





