// // // ES5ɽ��
// // var Evaluator = React.createClass({
// //     // ���ơ��Ȥ���������᥽�å�
// //     getInitialState: function() {
// //         return {
// //             // expression�Ȥ������ơ��Ȥ��ͤ��ʸ���˽����
// //             // ���ơ��Ȥ�Ȥ��ݤˤϡ�¾�ǻ��ȤǤ���褦�˽����������ˤ�ɬ��
// //             expression: ''
// //         };
// //     },
// //     // �桼�����ϻ��ƤФ��᥽�åɡ�reCalcValue�ϸ�Ҳս�ǸƤ֡�
// //     reCalcValue: function(e) {
// //         if (e.key === 'Enter')
// //             this.setState({
// //                 // �����͡�ʸ����ˤ�expression���ơ��Ȥ˥��å�
// //                 expression: e.target.value
// //             });
// //     },
// //     render: function() {
// //         return React.DOM.div(
// //             null,
// //             React.DOM.input({
// //                 type: 'text',
// //                 // �����������줿�Ȥ���reClacValue�᥽�åɤ�Ƥ֤褦������
// //                 onKeyPress: this.reCalcValue // onKeyPress:React�����°��
// //             }),
// //             React.DOM.h2(null, eval(this.state.expression))
// //         );
// //     }
// // });
//
//
// // ES6ɽ��
// class Evaluator extends React.Component{
//
//     constructor() {
//         super();
//         this.state = {expression: ''};
//     }
//
//     reCalcValue = (e) => {
//         if (e.key === 'Enter')
//             this.setState({
//                 expression: e.target.value
//             });
//     }
//
//     render() {
//         str.indexOf(this.state.expression);
//         return React.DOM.div(
//             null,
//             React.DOM.input({
//                 type: 'text',
//                 onKeyPress: this.reCalcValue
//             }),
//
//             <table>
//                 <thead>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 </thead>
//                 <tbody> {rowComponents} </tbody>
//             </table>
//         );
//     }
// }
// // const data = [
// //     { id: 1, firstName: 'John', lastName: 'Doe' },
// //     { id: 2, firstName: 'Clark', lastName: 'Kent' }
// // ];
// //
// // class Table extends React.Component {
// //
// //     render() {
// //         const rowComponents = this.generateRows();
// //
// //         return (
// //             <table>
// //                 <thead>
// //                 <th>First Name</th>
// //                 <th>Last Name</th>
// //                 </thead>
// //                 <tbody> {rowComponents} </tbody>
// //             </table>
// //         );
// //     }
// //
// //     generateRows() {
// //         const data = this.props.data;
// //
// //         return data.map((item) => {
// //             return ([
// //                 <tr key={'firstRow_' + item.id}>
// //                     <td>{item.firstName}</td><td>{item.lastName}</td>
// //                 </tr>,
// //                 <tr key={'secondRow_' + item.id}>
// //                     <td>{item.firstName}</td><td>{item.lastName}</td>
// //                 </tr>
// //             ]);
// //         });
// //     }
// // }
//
// React.render(<Table data={data}/>, document.getElementById('content'));
//
//
//
//
//
//
//
//
function getJson() {
    //var xmlhttp = createXMLHttpRequest(); //旧バージョンのIEなどに対応する場合
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
// 戻り値	概要
// 0     初期化されていない（openメソッドがまだ呼び出されていない）
// 1     ロード中（openメソッドは呼び出されたが，sendメソッドはまだ呼び出されていない）
// 2	    ロード済み（sendメソッドは呼び出されたが，応答は取得していない。ステータス/ヘッダー情報はまだ利用できない）
// 3	    一部の応答を取得（応答ステータス/ヘッダーは取得できるが，本体は取得できない）
// 4     全データを取得済み
            if (xmlhttp.status == 200) {
// HTTPステータス	              意味
// 200 OK                      成功
// 401 Unauthorized            認証を要求
// 403 Forbidden               アクセスを拒否
// 404 Not Found               リソースが見つからない
// 500 Internal Server Error   内部サーバー・エラー
// 503 Service Unavailable     サーバーが利用不可
                var input = JSON.parse(xmlhttp.responseText);

                console.log("input.length : " + input.length);
                console.log("input.length / 10 : " + (input.length / 10));
                console.log("Math.round(input.length / 10) : " + (Math.round(input.length / 10)));
                // for (var i=0 ; i<10 ; i++) {
                //  console.log(input[i].auth); // 成功
                //     // console.log(input.length); // 成功
                // }


                // for (var i=0 ; i<10 ; i++) {
                //     var elem = document.getElementById("item_auth" + i);
                //     elem.innerText = input[i].auth;
                //
                //     var elem = document.getElementById("item_date" + i);
                //     elem.innerText = input[i].date;
                //
                //     var elem = document.getElementById("item_lang" + i);
                //     elem.innerText = input[i].lang;
                //
                //     var elem = document.getElementById("item_name" + i);
                //     elem.innerText = input[i].name;
                //
                //     var elem = document.getElementById("item_title_e" + i);
                //     elem.innerText = input[i].title_e;
                //
                //     var elem = document.getElementById("item_title_j" + i);
                //     elem.innerText = input[i].title_j;
                // }

                var pager_buf = "<p>page. ";
                var pager_end = "";
                pager_buf = pager_buf + "1";
                if ((input.length / 10) >= 12) {
                    console.log("test 1");
                    for (var offset = 2; offset < 12; offset++) {
                        pager_buf = pager_buf + " / " + "<span><a href=\"#\">" + offset + "</a>";
                    }
                }
                console.log("test 2");
                if (input.length / 10 > 11)
                {
                    pager_end = " / ... / " + (Math.round(input.length / 10) + 1);
                }
                pager_buf = pager_buf + pager_end + "</p>";
                target = document.getElementById("mypager");
                target.innerHTML = pager_buf;
                // page. 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / ... / 56

                var buf = "";
                // for(i = 0 ; i < input.length;i++)
                for(i = 0 ; i < 10;i++)
                {
                    buf=buf + "<table><tbody>";
                    buf=buf + "<tr><th>和文標題</th><td>"+input[i]['title_j']+"</td></tr>";
                    buf=buf + "<tr><th>英文標題</th><td>"+input[i]['title_e']+"</td></tr>";
                    buf=buf + "<tr><th>発行年</th><td>"+input[i]['date']+"</td></tr>";
                    buf=buf + "<tr><th>資料名</th><td>"+input[i]['name']+"</td></tr>";
                    buf=buf + "<tr><th>著者名</th><td>"+input[i]['auth']+"</td></tr>";
                    buf=buf + "<tr><th>言語</th><td>"+input[i]['lang']+"</td></tr>";
                    buf=buf + "</tbody></table>";
                }
                // document.write(buf);
                target = document.getElementById("mytable");
                target.innerHTML = buf;


            } else {
            }
        }
    }
    xmlhttp.open("GET", "essay.json");
    xmlhttp.send();
}
//
// function createXMLHttpRequest() {
//     if (window.XMLHttpRequest) { return new XMLHttpRequest() }
//     if (window.ActiveXObject) {
//         try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) { }
//         try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) { }
//         try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { }
//     }
//     return false;
// }




// var tableTtlTxt = ['和文標題', '英文標題', '発行年', '資料名', '著者名', '言語'];
//
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
// 戻り値	概要
// 0     初期化されていない（openメソッドがまだ呼び出されていない）
// 1     ロード中（openメソッドは呼び出されたが，sendメソッドはまだ呼び出されていない）
// 2	    ロード済み（sendメソッドは呼び出されたが，応答は取得していない。ステータス/ヘッダー情報はまだ利用できない）
// 3	    一部の応答を取得（応答ステータス/ヘッダーは取得できるが，本体は取得できない）
// 4     全データを取得済み
        if (xmlhttp.status == 200) {
// HTTPステータス	              意味
// 200 OK                      成功
// 401 Unauthorized            認証を要求
// 403 Forbidden               アクセスを拒否
// 404 Not Found               リソースが見つからない
// 500 Internal Server Error   内部サーバー・エラー
// 503 Service Unavailable     サーバーが利用不可
            var input = JSON.parse(xmlhttp.responseText);

            // console.log("input.length : " + input.length);
            // console.log("input.length / 10 : " + (input.length / 10));
            // console.log("Math.round(input.length / 10) : " + (Math.round(input.length / 10)));
            // for (var i=0 ; i<10 ; i++) {
            //  console.log(input[i].auth); // 成功
            //     // console.log(input.length); // 成功
            // }


            // for (var i=0 ; i<10 ; i++) {
            //     var elem = document.getElementById("item_auth" + i);
            //     elem.innerText = input[i].auth;
            //
            //     var elem = document.getElementById("item_date" + i);
            //     elem.innerText = input[i].date;
            //
            //     var elem = document.getElementById("item_lang" + i);
            //     elem.innerText = input[i].lang;
            //
            //     var elem = document.getElementById("item_name" + i);
            //     elem.innerText = input[i].name;
            //
            //     var elem = document.getElementById("item_title_e" + i);
            //     elem.innerText = input[i].title_e;
            //
            //     var elem = document.getElementById("item_title_j" + i);
            //     elem.innerText = input[i].title_j;
            // }

            // var pager_buf = "<p>page. ";
            // var pager_end = "";
            // pager_buf = pager_buf + "1";
            // if ((input.length / 10) >= 12) {
            //     console.log("test 1");
            //     for (var offset = 2; offset < 12; offset++) {
            //         pager_buf = pager_buf + " / " + "<span><a href=\"#\">" + offset + "</a>";
            //     }
            // }
            // console.log("test 2");
            // if (input.length / 10 > 11)
            // {
            //     pager_end = " / ... / " + (Math.round(input.length / 10) + 1);
            // }
            // pager_buf = pager_buf + pager_end + "</p>";
            // target = document.getElementById("mypager");
            // target.innerHTML = pager_buf;
            // // page. 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / ... / 56
            //
            // var buf = "";
            // // for(i = 0 ; i < input.length;i++)
            // for(i = 0 ; i < 10;i++)
            // {
            //     buf=buf + "<table><tbody>";
            //     buf=buf + "<tr><th>和文標題</th><td>"+input[i]['title_j']+"</td></tr>";
            //     buf=buf + "<tr><th>英文標題</th><td>"+input[i]['title_e']+"</td></tr>";
            //     buf=buf + "<tr><th>発行年</th><td>"+input[i]['date']+"</td></tr>";
            //     buf=buf + "<tr><th>資料名</th><td>"+input[i]['name']+"</td></tr>";
            //     buf=buf + "<tr><th>著者名</th><td>"+input[i]['auth']+"</td></tr>";
            //     buf=buf + "<tr><th>言語</th><td>"+input[i]['lang']+"</td></tr>";
            //     buf=buf + "</tbody></table>";
            // }
            // // document.write(buf);
            // target = document.getElementById("mytable");
            // target.innerHTML = buf;

            var TableBeadroll = React.createClass({
                render: function(){
                    return (<div>{this.props.children}</div>);
                }
            });

// TableBeadroll.Head = React.createClass({
//     render: function(){
//         var tableTtl = this.props.title.map(function(cName, i){//二つ目の引数でindexを生成
//             return(<th key={i}>{cName}</th>);//key属性にindexを渡す
//         });
//         return(<thead><tr>{tableTtl}</tr></thead>);
//     }
// });

            TableBeadroll.Body = React.createClass({
                render: function(){
                    var table = this.props.data.map(function(record){
                        return (<table><tbody>
                            <tr><th>和文標題</th><td>{record.title_j}</td></tr>
                            <tr><th>英文標題</th><td>{record.title_e}</td></tr>
                            <tr><th>発行年</th><td>{record.date}</td></tr>
                            <tr><th>資料名</th><td>{record.name}</td></tr>
                            <tr><th>著者名</th><td>{record.auth}</td></tr>
                            <tr><th>言語</th><td>{record.lang}</td></tr>
                            </tbody></table>
                        );
                    });
                    return (<div>{table}</div>);
                }
            });

            var DispTable = React.createClass({
                render: function(){
                    return(<TableBeadroll>
                        <TableBeadroll.Body data={this.props.data} />
                    </TableBeadroll>);
                }
            });

            ReactDOM.render(
                <DispTable data={input} />,
                document.getElementById('content')
            );
        } else {
        }
    }
}
xmlhttp.open("GET", "essay.json");
xmlhttp.send();


// var tableData = [
//     {
//         "auth": "前渕元宏(不二製油グループ本社 未来創造研)",
//         "date": "2017.09.15",
//         "lang": "日本語",
//         "name": "日本醸造協会誌 112 (9) P608-616",
//         "title_e": "",
//         "title_j": "ノンアルコールビールで脳機能改善?～大豆ペプチド摂取による認知機能改善効果～"
//     },
//     {
//         "auth": "國重由花,久保笙子, 中澤昌美, 上田光宏, 阪本龍司 (大阪府大 大学院), 山田浩之 (大関), 吉田靖彦 (不二製油)",
//         "date": "2017.08.20",
//         "lang": "日本語",
//         "name": "応用糖質科学 7 (3) P54",
//         "title_e": "",
//         "title_j": "セルフクローニング系によるAspergillusoryzae由来ペクチンメチルエステラーゼ生産と反応特性解析"
//     },
//     {
//         "auth": "VANDER ELSTRAETEN Karen (Fuji Oil Europe)",
//         "date": "2017.05",
//         "lang": "英語",
//         "name": "ConfectioneryProduction 83 (3) P16-17",
//         "title_e": "Achanging landscape",
//         "title_j": "変わる光景(製菓)"
//     }
// ];

// var TableBeadroll = React.createClass({
//     render: function(){
//         return (<div>{this.props.children}</div>);
//     }
// });
//
// // TableBeadroll.Head = React.createClass({
// //     render: function(){
// //         var tableTtl = this.props.title.map(function(cName, i){//二つ目の引数でindexを生成
// //             return(<th key={i}>{cName}</th>);//key属性にindexを渡す
// //         });
// //         return(<thead><tr>{tableTtl}</tr></thead>);
// //     }
// // });
//
// TableBeadroll.Body = React.createClass({
//     render: function(){
//         var table = this.props.data.map(function(record){
//             return (<table><tbody>
//                 <tr><th>和文標題</th><td>{record.title_j}</td></tr>
//                 <tr><th>英文標題</th><td>{record.title_e}</td></tr>
//                 <tr><th>発行年</th><td>{record.date}</td></tr>
//                 <tr><th>資料名</th><td>{record.name}</td></tr>
//                 <tr><th>著者名</th><td>{record.auth}</td></tr>
//                 <tr><th>言語</th><td>{record.lang}</td></tr>
//             </tbody></table>
//             );
//         });
//         return (<div>{table}</div>);
//     }
// });
//
// var DispTable = React.createClass({
//     render: function(){
//         return(<TableBeadroll>
//             <TableBeadroll.Body data={this.props.data} />
//         </TableBeadroll>);
//     }
// });
//
// ReactDOM.render(
//     <DispTable data={input} />,
//     document.getElementById('content')
// );