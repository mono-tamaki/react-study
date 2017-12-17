// // // ES5ɽ��
// // var Evaluator = React.createClass({
// //     // ���ơ��Ȥ���������᥽�å�
// //     getInitialState: function() {
// //         return {
// //             // expression�Ȥ������ơ��Ȥ��ͤ��ʸ���˽����
// //             // ���ơ��Ȥ�Ȥ��ݤˤϡ�¾�ǻ��ȤǤ���褦�˽����������ˤ�ɬ��
// //             expression: ''
// //         };
// //     },
// //     // �桼�����ϻ��ƤФ��᥽�åɡ�reCalcValue�ϸ�Ҳս�ǸƤ֡�
// //     reCalcValue: function(e) {
// //         if (e.key === 'Enter')
// //             this.setState({
// //                 // �����͡�ʸ����ˤ�expression���ơ��Ȥ˥��å�
// //                 expression: e.target.value
// //             });
// //     },
// //     render: function() {
// //         return React.DOM.div(
// //             null,
// //             React.DOM.input({
// //                 type: 'text',
// //                 // �����������줿�Ȥ���reClacValue�᥽�åɤ�Ƥ֤褦������
// //                 onKeyPress: this.reCalcValue // onKeyPress:React�����°��
// //             }),
// //             React.DOM.h2(null, eval(this.state.expression))
// //         );
// //     }
// // });
//
//
// // ES6ɽ��
// class Evaluator extends React.Component{
//
//     constructor() {
//         super();
//         this.state = {expression: ''};
//     }
//
//     reCalcValue = (e) => {
//         if (e.key === 'Enter')
//             this.setState({
//                 expression: e.target.value
//             });
//     }
//
//     render() {
//         str.indexOf(this.state.expression);
//         return React.DOM.div(
//             null,
//             React.DOM.input({
//                 type: 'text',
//                 onKeyPress: this.reCalcValue
//             }),
//
//             <table>
//                 <thead>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 </thead>
//                 <tbody> {rowComponents} </tbody>
//             </table>
//         );
//     }
// }
// // const data = [
// //     { id: 1, firstName: 'John', lastName: 'Doe' },
// //     { id: 2, firstName: 'Clark', lastName: 'Kent' }
// // ];
// //
// // class Table extends React.Component {
// //
// //     render() {
// //         const rowComponents = this.generateRows();
// //
// //         return (
// //             <table>
// //                 <thead>
// //                 <th>First Name</th>
// //                 <th>Last Name</th>
// //                 </thead>
// //                 <tbody> {rowComponents} </tbody>
// //             </table>
// //         );
// //     }
// //
// //     generateRows() {
// //         const data = this.props.data;
// //
// //         return data.map((item) => {
// //             return ([
// //                 <tr key={'firstRow_' + item.id}>
// //                     <td>{item.firstName}</td><td>{item.lastName}</td>
// //                 </tr>,
// //                 <tr key={'secondRow_' + item.id}>
// //                     <td>{item.firstName}</td><td>{item.lastName}</td>
// //                 </tr>
// //             ]);
// //         });
// //     }
// // }
//
// React.render(<Table data={data}/>, document.getElementById('content'));
//
//
//
//
//
//
//
//




var tableTtlTxt = ['name', 'address', 'zip'];

var tableData = [
    {id: 1, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
    {id: 2, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
    {id: 3, name: 'Dal Yu', address: 'Texas', zip: '111-1110'}
];

var TableBeadroll = React.createClass({
    render: function(){
        return (<table>{this.props.children}</table>);
    }
});

TableBeadroll.Head = React.createClass({
    render: function(){
        var tableTtl = this.props.title.map(function(cName, i){//二つ目の引数でindexを生成
            return(<th key={i}>{cName}</th>);//key属性にindexを渡す
        });
        return(<thead><tr>{tableTtl}</tr></thead>);
    }
});

TableBeadroll.Body = React.createClass({
    render: function(){
        var tableRow = this.props.data.map(function(person){
            return (<tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.address}</td>
                <td>{person.zip}</td>
            </tr>);
        });
        return (<tbody>{tableRow}</tbody>);
    }
});

var DispTable = React.createClass({
    render: function(){
        return(<TableBeadroll>
            <TableBeadroll.Head title={this.props.title} />
            <TableBeadroll.Body data={this.props.data} />
        </TableBeadroll>);
    }
});

ReactDOM.render(
    <DispTable title={tableTtlTxt} data={tableData} />,
    document.getElementById('content')
);