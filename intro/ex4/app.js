const hello_ex = document.querySelector('.hello_ex');



// コンポーネント３　※２の書き方では書けない
const Hello = (props) => <p style={{color: 'green'}}>Hello {props.name}</p>;
// props：読み込んだHelloのComponentのnameに好きな値を渡して表示してみましょう
ReactDOM.render(
    <Hello name="React" />,
    hello_ex
);
