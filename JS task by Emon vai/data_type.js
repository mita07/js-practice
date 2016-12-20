/**
 * Created by Mita on 12/14/2016.
 */

function dataType(testData) {
    var msg;
    if (typeof testData == "string") {
        msg = "this is string";
    }
    else if (typeof testData == "number") {
        msg = "this is number";
    }
    else {
        msg = "invalid";
    }
    return msg;
}

console.log(dataType(210));
