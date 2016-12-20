/**
 * Created by Mita on 12/14/2016.
 */



function money(taka) {
    var msg;

    if (taka < 200 && taka > 100) {
        msg = "Your amount is " + taka + " and this is small amount" ;
    }
    else {
        msg = "This is invalid amount.";
    }
    return msg;
}
console.log(money(120));