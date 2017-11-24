// ES6表記
class Comments extends React.Component {
    render() {
        return (
            <div className="Comments">
                <p>This is one comment</p>
                <p>This is another comment</p>
            </div>
        );
    }
}




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

exports.Comments = Comments;