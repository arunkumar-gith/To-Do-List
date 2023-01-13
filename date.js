
module.exports.getDate=function() {
const today=new Date();
    
const option={
    weekday:"long",
    day:"numeric",
    month:"long"
}

let day=today.toLocaleDateString("en-us", option);

return day;

};


exports.getDay=function(){
    const today=new Date();
    
const option={
    weekday:"long",
}

return today.toLocaleDateString("en-us", option);

};
