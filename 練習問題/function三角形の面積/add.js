'use strict';


function triangle(bottom, height) {
    const area = bottom * height / 2;
    return area;
}


const bottom = parseFloat(window.prompt('底辺の長さは?(cm)'));
const height = parseFloat(window.prompt('高さは?(cm)'));
const area = triangle(bottom, height);

window.alert('三角形の面積は ' + area + '平方センチメートル');
