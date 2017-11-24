// ES6É½µ­
class Evaluator extends React.Component{
    render() {
        return React.DOM.h2(null, eval(this.props.text));
    }
}