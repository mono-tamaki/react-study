var React = require('react');//React.js�Υ饤�֥���import

//����ݡ��ͥ�Ȥ����
var Index = React.createClass({
    render:function(){
        return (
            <p>hoge</p>
        );
    }
});

//id='content'�����Ǥ˥���ݡ��ͥ�ȡ�Index�פ��������ƥ������
React.render(
    <Index />,
    document.getElementById('content')
);