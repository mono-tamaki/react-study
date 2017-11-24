ReactDOM.render(
    // React.DOM.h2(null, 'Hello, React World!'),
    React.DOM.h2(
        {
            style:{
                fontStyle: 'oblique',
                fontFamily: 'Arial',
                color: 'green'
            }
        },
        'Hello, React World!'
    ),
    document.getElementById('content')
);