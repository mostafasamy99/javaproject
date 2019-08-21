/* var d= new Date()
var alldays=["sun","mon","tus","wed","thurs","fri","sat"]

function test()
{
    
    var dayIndex=d.getDay()
    var hours =d.getHours()
    var min =d.getMinutes()
    var ampm=""
    
    if(hours<12)
        {
            ampm="AM"
        }
    else{
        hours=hours-12
        ampm="Pm"
    }
console.log(alldays[dayIndex]+hours+ampm+min)    
}
*/
function test()
{
    var xmlHttp=new XMLHttpRequest()
    xmlHttp.open("GET","https://jsonplaceholder.typicode.com/users")
    xmlHttp.send()
    xmlHttp.onreadystatechange=function()
    {
        if(xmlHttp.readyState==4&&xmlHttp.status==200)
            {
                var datastring=xmlHttp.responseText
                var datajson=JSON.parse(datastring)
                for(var i=0;i<datajson.length;i++)
                    {
                        console.log(datajson[i].address.street)
                    }
            }
    }
}