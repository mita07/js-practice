function checkDataType(variable) {
    var value;
    if(value = parseFloat(variable)){
        console.log(value);
    }
    else if(value = isNaN(variable)){
        console.log("Result is 0 ");

    }
}
checkDataType("A");