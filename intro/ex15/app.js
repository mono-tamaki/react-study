ReactDOM.render(
    // React.createElement(HelloWorld),
    React.createElement(
        HelloWorld,
        {
            name: 'React'
        }
        // �����ܤΰ����Ȥ��ơ�name�Ȥ���̾���Υץ�ѥƥ���ʸ������͡�React�פ�Ϳ���Ƥ���
    ),
    document.getElementById('content')
);