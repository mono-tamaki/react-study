// // ES5ɽ��
// var HelloWorld = React.createClass({
//     render: function() {
//         return React.DOM.h2(null, 'Hello, React World!!');
//     }
// });



// ES6ɽ��
class HelloWorld extends React.Component{
    render() {
        return React.DOM.h2(null, 'Hello, ' + this.props.name + ' World!!');
    }
}