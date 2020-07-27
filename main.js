var car = {
    color : "red",
    make : "BMW",
    drive : function(){ return "drive"; },
    engine : {
        make : "German",
        size : 2.0,
        fuel : "petrol",
        piston : [ {maker : "BMW1"}, {maker : "BMW2"} ]
    }
};

var array = [
    "string",
    100,
    [ "embed", 200 ],
    { car: "Audi"},
    function(){ return "drive"; }
];

var fridge = {
    height : 200,
    width : 100,
    color : "grey",
    open : function(){ return "open";},
}

function fname(){
    var fullname = "Niket";

    function concat(name){
        return 'Mr.' + name;
    }

    return concat(fullname);
}