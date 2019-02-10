// Ex 1
function capitalize(str){
    str = str.split(" ");
    let i = 0;
    while (i < str.length ) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        i++;
    }
    return str.join(" ");
}

console.log(capitalize("Hello dear teacher"));


// Ex 2
function max(x, y, z){
    m = 0;
    m = (x > y ? x : y);
    m = (m > z ? m : z);
    return m;
}

console.log(max(100, -1, -4));
console.log(max(-1, 0, -4));

// Ex 3
