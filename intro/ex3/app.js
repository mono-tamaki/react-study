const hello_ex = document.querySelector('.hello_ex');


// ����ݡ��ͥ�ȣ����������̤ν���
var Hello = React.createClass({
    render: function() {
        return (
            <p style={{color: 'green'}}>Hello World3</p>
        );
    }
});
// �������ɤ߹����Hello��Component��ɽ�����Ƥߤޤ��礦
ReactDOM.render(
    <Hello />,
    hello_ex
);