window.addEventListener('scroll',()=>{
    const scrolled=window.scrollY;
    console.log(scrolled);
   $(document).on("scroll",function(){
    if(scrolled>992 ){
     
        $(document).ready(function(){
            $("#cardid").removeClass("nonecard1");  
            $("#cardid1").removeClass("nonecard1");      
            $("#cardid2").removeClass("nonecard1");      
            $("#cardid3").removeClass("nonecard1");      

             $("#cardid").addClass("cardgrid1");    
        $("#cardid1").addClass("cardgrid1");      
        $("#cardid2").addClass("cardgrid1");      
        $("#cardid3").addClass("cardgrid1");      

            $('#cardid').animate({
         height:390
            },5000)     
            $(this).off("animate")
$('#cardid1').animate({
     height:390
        },5000)
      $(this).off("animate")
      $('#cardid2').animate({
        height:430
           },5000)
         $(this).off("animate")
         $('#cardid3').animate({
            height:430
               },5000)
             $(this).off("animate")
})




       
   
           
    }
// img grw
    if(scrolled>=1518 ){
        // $("#imagegrw").removeClass("smallimg"); 
        $('#imagegrw').animate({
                       

            width:1519,
            height:430
               },5000)
             $(this).off("animate")
             $("#imggrwid").removeClass("nonecard1");      
             $("#imggrwid").delay(500)
             $("#imggrwid").addClass("grwimagtxt");   



    }
    if(scrolled>2568 ){
        // $("#imagegrw").removeClass("smallimg"); 
        $('#secndimggrw').animate({
                       

            width:1519,
            height:430
               },5000)
             $(this).off("animate")
             $("#imggrwid1").removeClass("nonecard1");      
             $("#imggrwid1").delay(500)
             $("#imggrwid1").addClass("grwimagtxt");   

    }

})
   
})