ReactDOM.render(
    React.createElement('h2', null, 'Hello, React World!'),  // コンポーネントから作成するHTMLの要素　nullはcolorなどの属性指定箇所
    document.getElementById('content')                       // 上記のHTML要素を埋め込む場所
);