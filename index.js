var inptext ="";
var b;
var array=[];
$(".btn").click(function(e){
    b=$(this).text();
    cal(b)
})
$(".btn").keypress(function(event){
     b= event.key;
     cal(b);
     });


function cal (a){
    if(a == '=' || a=='Enter'){
        inptext=eval(inptext);
        $(".input").val("Ans : "+inptext)
        
     }
     else if(a == 'C'|| a=='c'){
        inptext=""
        $(".input").val(inptext)
        
     }
     else if(a == 'x'){
        var len =inptext.length;
        inptext=inptext.slice(0,len-1);
       
        $(".input").val(inptext)
        
     }
    else{
    inptext=inptext+a;
    $(".input").val(inptext);}
}

// function display(input){
//     $("input").val(inptext);
// }