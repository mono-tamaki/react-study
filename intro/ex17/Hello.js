// ES5表記
var Evaluator = React.createClass({
    // ステートを初期化するメソッド
    getInitialState: function() {
        return {
            // expressionというステートの値を空文字に初期化
            // ステートを使う際には、他で参照できるように初期化（宣言）が必要
            expression: ''
        };
    },
    // ユーザ入力時呼ばれるメソッド（reCalcValueは後述箇所で呼ぶ）
    reCalcValue: function(e) {
        if (e.key === 'Enter')
            this.setState({
                // 入力値（文字列）をexpressionステートにセット
                expression: e.target.value
            });
    },
    render: function() {
        return React.DOM.div(
            null,
            React.DOM.input({
                type: 'text',
                // キーが押されたときにreClacValueメソッドを呼ぶように設定
                onKeyPress: this.reCalcValue // onKeyPress:React既定の属性
            }),
            React.DOM.h2(null, eval(this.state.expression))
        );
    }
});





// // ES6表記
// class Evaluator extends React.Component{
//     // ステートを初期化するメソッド
//     getInitialState() {
//         return {
//             // expressionというステートの値を空文字に初期化
//             // ステートを使う際には、他で参照できるように初期化（宣言）が必要
//             expression: ''
//         };
//     },
//     // ユーザ入力時呼ばれるメソッド（reCalcValueは後述箇所で呼ぶ）
//     reCalcValue(e) {
//         if (e.key === 'Enter')
//         this.setState({
//             // 入力値（文字列）をexpressionステートにセット
//             expression: e.target.value
//         });
//     },
//     render() {
//         return React.DOM.div(
//             null,
//             React.DOM.input({
//               type: 'text',
//               // キーが押されたときにreClacValueメソッドを呼ぶように設定
//               onKeyPress: this.reCalcValue // onKeyPress:React既定の属性
//             }),
//             React.DOM.h2(null, eval(this.state.expression))
//         );
//     }
// }