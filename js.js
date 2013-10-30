$(document).ready(function(){
     alert("Hello");
 $("button#submit").click(function(){ 
    
         if($("#ID").val() === "" || $("#Password").val() === "")
             $("div#output").html("please enter boh Id AND Password");
         else
             $.post($("#myform").attr("action"),
              $("#myform :input").serializeArray(),
            function(data){
                $("div#output").html(data);
         
            });
            $("#myform").submit(function(){
                return false;
            });
            
             
         
      
          
});
});





