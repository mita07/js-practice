/**
 * Check all element's data type
 *
 * @type {*[]}
 */
var name = ["Mita", 20, true, "Toma", "Mrinmoy", "Shaharia", "Preview Technologies Limited"];

function checkDataType(variable){
    if(typeof variable == "string"){
        console.log(variable + " is string");
    }
    else if(typeof variable == "number"){
        console.log(variable + " is number");
    }
    else if(typeof variable == "boolean"){
        console.log(variable + " is boolean");
    }
    else{
        console.log("Can't find data type");
    }
}

/*for (i = 0; i < name.length; i++) {
    checkDataType(name[i]);
}*/

for (i = 0; i < name.length; i++) {
    if(name[i].length != undefined){
        console.log(name[i].length);
    }
}
