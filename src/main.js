import a from './a.js';
import b from './b.js';
import './index.less';
import './a.jpg';
import $ from 'jquery';
console.log(a, b);

$('<h1>').text('Hello webpack!').appendTo(document.body);
