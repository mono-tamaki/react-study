// ES6ɽ��
class Evaluator extends React.Component{
    render() {
        return React.DOM.h2(null, eval(this.props.text));
    }
}