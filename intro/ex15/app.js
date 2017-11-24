ReactDOM.render(
    // React.createElement(HelloWorld),
    React.createElement(
        HelloWorld,
        {
            name: 'React'
        }
        // ２番目の引数として、nameという名前のプロパティに文字列の値「React」を与えている
    ),
    document.getElementById('content')
);