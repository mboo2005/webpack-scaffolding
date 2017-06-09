import moment from 'moment';
import _ from 'lodash';
import './index.css';

function component(){
    var e = document.createElement('div');
    e.innerHTML = _.join(['hello','webpack']);
    return e;
}
console.log(moment().format());
document.body.appendChild(component());

if (process.env.NODE_ENV === 'dev'){
    console.log("debug");
}
