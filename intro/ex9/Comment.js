// // ES6ɽ��
// export default class CommentList extends React.Component {
//     render() {
//         return (
//             <div className="commentList">
//                 <p>This is one comment</p>
//                 <p>This is *another* comment</p>
//             </div>
//         );
//     }
// }




// ES5ɽ��
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <p>This is one comment</p>
                <p>This is *another* comment</p>
            </div>
        );
    }
});

// export default CommentList;