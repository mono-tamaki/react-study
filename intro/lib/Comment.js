// ES6ɽ��
class Comments extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "comments" },
            React.createElement(
                "p",
                null,
                "This is one comment"
            ),
            React.createElement(
                "p",
                null,
                "This is another comment"
            )
        );
    }
}

// // ES5ɽ��
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

// export default Comments;