// import React from 'react';
// import ReactDOM from 'react-dom';

// ここでHelloのComponentを読み込んでみましょう
import Hello from './Hello';

const comp_container = document.querySelector('.comp_ex');

// ここで読み込んだHelloのComponentを表示してみましょう
ReactDOM.render(
  <Hello />,
  comp_container
);
