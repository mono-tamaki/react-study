const hello_ex = document.querySelector('.hello_ex');


// ����ݡ��ͥ�ȣ�
const Hello = () => <p style={{color: 'green'}}>Hello World</p>;
// �������ɤ߹����Hello��Component��ɽ�����Ƥߤޤ��礦
ReactDOM.render(
    <Hello />,
    hello_ex
);