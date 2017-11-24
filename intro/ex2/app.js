const hello_ex = document.querySelector('.hello_ex');


// コンポーネント１
const Hello = () => <p style={{color: 'green'}}>Hello World</p>;
// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
    <Hello />,
    hello_ex
);