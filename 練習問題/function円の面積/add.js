'use strict';
2
function circle(radius) {
    return radius * radius * Math.PI;
}

const radius = parseFloat(window.prompt('半径は?(cm)'));
const area = circle(radius);
alert('半径' + radius + 'cmの面積は ' + area + '平方センチメートル');