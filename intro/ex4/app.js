const hello_ex = document.querySelector('.hello_ex');



// ����ݡ��ͥ�ȣ��������ν����ǤϽ񤱤ʤ�
const Hello = (props) => <p style={{color: 'green'}}>Hello {props.name}</p>;
// props���ɤ߹����Hello��Component��name�˹������ͤ��Ϥ���ɽ�����Ƥߤޤ��礦
ReactDOM.render(
    <Hello name="React" />,
    hello_ex
);
