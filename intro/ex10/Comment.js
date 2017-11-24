// ES6ɽ��
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

exports.Comments = Comments;