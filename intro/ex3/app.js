const hello_ex = document.querySelector('.hello_ex');


// コンポーネント２　※１の別の書き方
var Hello = React.createClass({
    render: function() {
        return (
            <p style={{color: 'green'}}>Hello World3</p>
        );
    }
});
// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
    <Hello />,
    hello_ex
);