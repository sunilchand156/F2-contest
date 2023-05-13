var x="apple";
var y= function(){
    if(x=="false"){
        console.log("first");
    }
    if(!x){
        console.log("second");
    }
     var x="banana";
};
y();