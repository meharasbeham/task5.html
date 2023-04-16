function labelcreate(tn,an,av,c){
    var ele=document.createElement(tn);
    ele.setAttribute(an,av);
    ele.innerHTML=c;
    return ele;
}
function linebreakers(tn){
    var ele=document.createElement(tn,);
    return ele;
}
function inputele(tn,an,av,an1,av1){
    var ele=document.createElement(tn);
    ele.setAttribute(an,av);
    ele.setAttribute(an1,av1);
    return ele;
}


var FN=labelcreate("lable","for","FN","First Name");
var br1=linebreakers("br");
var FNinput=inputele("input","type","FN","id","First Name");
var br2=linebreakers("br");
document.body.append(FN,br1,FNinput,br2);

var MN=labelcreate("lable","for","MN","Middle Name");
var br1=linebreakers("br");
var MNinput=inputele("input","type","MN","id","Middle Name");
var br2=linebreakers("br");
document.body.append(MN,br1,MNinput,br2);


var LN=labelcreate("lable","for","LN","Last Name");
var br1=linebreakers("br");
var LNinput=inputele("input","type","LN","id","Last Name");
var br2=linebreakers("br");
document.body.append(LN,br1,LNinput,br2);


var email=labelcreate("lable","for","email","Email");
var br1=linebreakers("br");
var emailinput=inputele("input","type","email","id","Email");
var br2=linebreakers("br");
document.body.append(email,br1,emailinput,br2);


var PW=labelcreate("lable","for","PW","Password");
var br1=linebreakers("br");
var PWinput=inputele("input","type","PW","id","Password");
var br2=linebreakers("br");
document.body.append(PW,br1,PWinput,br2);

