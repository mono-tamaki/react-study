const hello_ex = document.querySelector('.hello_ex');



// �ץ�ѥƥ�������ʣ����DOM
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

// �������ɤ߹����Hello��Component��ɽ�����Ƥߤޤ��礦
ReactDOM.render(
    <Comment author="Pete Hunt" />,
    hello_ex
);





