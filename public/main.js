
$(document).ready(function(){
    
    
    $("#btn_generaPdf").click(function(){
        
        var cedula=parseInt(document.getElementById("cedulaAbogado").value,10);
        console.log(cedula)

       $.post("https://confival.herokuapp.com/generaPdf",{cedula: cedula},(res)=>{
           if(res){
               console.log(res);
               document.getElementById('my_iframe').src = 'https://confival.herokuapp.com/descargaPdf';  
           }else{
               return("se ha producido un error")
               
           }
       })

    
    });
  });
  
  