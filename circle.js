const arguments = process.argv.slice(2)

let field = 0;
let circumference = 0;
const pi = Math.PI;

function circleArea(r) {
    field = pi * Math.pow(r, 2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${field}`);
}

function circleCircumference(r) {
    circumference = pi * r * 2;
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circumference}`);
}


// circleArea(arguments[0] * 1, arguments[1] * 1);
// circleCircumference(arguments[0] * 1, arguments[1] * 1);

module.exports = {
    circleArea,
    circleCircumference
}