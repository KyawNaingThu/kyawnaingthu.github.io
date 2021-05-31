$(document).ready(function(){
    $('#gram').change(function(){
        var gram = $('#gram').val();
        var arr = gramToKyat(gram); 
        var total_yway = arr[3];   
        $('#kpy').html(arr[0]+" က်ပ္ - "+arr[1]+" ပဲ - "+arr[2]+" ေရြး");
        cal();
    });
    $('#quality').change(function(){
        cal();
    });
    $('#unitprice').change(function(){
        cal();
    });   
    $('#btn').click(function(){
        cal(); 
    });
});
function cal(){
    var unitprice = $('#unitprice').val();
            
    var gram = $('#gram').val();
    
    var arr = gramToKyat(gram); 
    var total_yway = arr[3];   
    
    var quality = $("#quality option:selected").val();
    var one_yway;
    if(quality!=16){
        one_yway = (quality/16)*(unitprice/128);
        
    }else{
        one_yway = unitprice/128;        
    }        
    
    var total_price = total_yway*one_yway;
    
    $('#total').html(Math.floor(total_price)+" MMK");
}
function gramToKyat(gram){
    var kyat = gram/16.6;
    var pae = kyat*16;
    var yway = pae*8;
    var total_yway = yway;

    kyat = gram/16.6;
    //Start
        
        var kyatweight = parseInt(kyat);
        pae = kyat - kyatweight;

        //console.log(kyatweight+"kyat =>"+pae);
    
        var paeweighttotal = pae*16;
        var paewieght = parseInt(paeweighttotal);

        yway = paeweighttotal - paewieght;
        //console.log(paewieght+"pae=>"+yway);

        var ywayweighttotal = yway*8;
        var ywayweight = parseInt(ywayweighttotal);

    //End
    var arr = [kyatweight,paewieght,ywayweight,total_yway];
    return arr;
}  

// function kpy(kyat,pae,yway){          

//     var total_yway = parseInt(kyat*16)+parseInt(pae*8)+parseInt(yway);

//     return total_yway;
// }    