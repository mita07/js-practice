/**
 * Created by mita on 12/15/2016.
 */


function dataType(variable){
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

dataType(true);