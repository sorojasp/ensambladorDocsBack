
$(document).ready(function(){
    
    
    $("#btn_generaPdf").click(function(){
        
        var cedula=parseInt(document.getElementById("cedulaAbogado").value,10);
        console.log(cedula)

       $.post("http://confival.herokuapp.com/generaPdf",{cedula: cedula},(res)=>{
           if(res){
               console.log(res);
               document.getElementById('my_iframe').src = 'http://confival.herokuapp.com/descargaPdf';  
           }else{
               return("se ha producido un error")
               
           }
       })

    
    });
  });
  
  