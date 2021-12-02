var counter=1;
var container=document.getElementById('todo');
var btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    //XMLHttpRequest:Built in tool which help us to establish a connection with URL
    var ourRequest=new XMLHttpRequest();
    ourRequest.open(  //Two Parameter: 1st:http method,2nd:URL
        "GET",
        "https://jsonplaceholder.typicode.com/todos/"+counter
    );

    ourRequest.onload=function(){
        if(ourRequest.status>=200 && ourRequest.status<400){
            //If there is no error
            console.log(ourRequest.responseText);  //by default, it will be string

            var ourData=JSON.parse(ourRequest.responseText);
            console.log(ourData);

            render(ourData);
        }
    };

    ourRequest.send();
    counter++;

    //To stop after id 5
    if(counter>5){
        btn.classList.add('hide');
    }
});

function render(Mydata){
    var htmlString="";
   
    htmlString+="<p>"+data.title+"</p>";

    container.insertAdjacentHTML("beforeend",img);
}