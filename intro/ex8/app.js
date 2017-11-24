const hello_ex = document.querySelector('.hello_ex');




// // ES5表記
// var CommentList = React.createClass({
//     render: function() {
//         return (
//             <div className="commentList">
//                 <p>This is one comment</p>
//                 <p>This is *another* comment</p>
//             </div>
//         );
//     }
// });


// ES6表記
class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                <p>This is one comment</p>
                <p>This is *another* comment</p>
            </div>
        );
    }
}

// import CommentList from './components/App.js';

// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
    <CommentList />,
    hello_ex
);





