function abc(){
    console.log(obj.name)
}
var obj={
    name:"Dhruv",
    show: abc
}
obj.show();