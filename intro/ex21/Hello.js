// // ES5ɽ��
// var Evaluator = React.createClass({
//     // ���ơ��Ȥ���������᥽�å�
//     getInitialState: function() {
//         return {
//             // expression�Ȥ������ơ��Ȥ��ͤ��ʸ���˽����
//             // ���ơ��Ȥ�Ȥ��ݤˤϡ�¾�ǻ��ȤǤ���褦�˽����������ˤ�ɬ��
//             expression: ''
//         };
//     },
//     // �桼�����ϻ��ƤФ��᥽�åɡ�reCalcValue�ϸ�Ҳս�ǸƤ֡�
//     reCalcValue: function(e) {
//         if (e.key === 'Enter')
//             this.setState({
//                 // �����͡�ʸ����ˤ�expression���ơ��Ȥ˥��å�
//                 expression: e.target.value
//             });
//     },
//     render: function() {
//         return React.DOM.div(
//             null,
//             React.DOM.input({
//                 type: 'text',
//                 // �����������줿�Ȥ���reClacValue�᥽�åɤ�Ƥ֤褦������
//                 onKeyPress: this.reCalcValue // onKeyPress:React�����°��
//             }),
//             React.DOM.h2(null, eval(this.state.expression))
//         );
//     }
// });


// ES6ɽ��
class Evaluator extends React.Component{

    constructor() {
        super();
        this.state = {expression: ''};
    }

    reCalcValue = (e) => {
        if (e.key === 'Enter')
            this.setState({
                expression: e.target.value
            });
    }

    render() {
        return React.DOM.div(
            null,
            React.DOM.input({
                type: 'text',
                onKeyPress: this.reCalcValue
            }),
            React.DOM.h2(null, eval(this.state.expression))
        );
    }
}
