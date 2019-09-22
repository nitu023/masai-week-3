
var currentplayer="";
turn="";
var count = 0;
var o_win = 0;
var x_win = 0;
var id1=document.getElementById("id1");
var id2=document.getElementById("id2");
var id3=document.getElementById("id3");
var id4=document.getElementById("id4");
var id5=document.getElementById("id5");
var id6=document.getElementById("id6");
var id7=document.getElementById("id7");
var id8=document.getElementById("id8");
var id9=document.getElementById("id9");

var turn=document.getElementById("turnval");
 turn.innerHTML=value;


//  $(document).ready(function(){
//      alert("my data");
//  });
 var move_r;
 function changetext(myId) {  
    //debugger;
    var idselect=document.getElementById("select").value;
    if(idselect !='')
    {
     var enteredVal = document.getElementById(myId).value;
     if(enteredVal==''){
      
     var num = document.getElementById("hdnNum").value;
     if(num==""){
      move_r=1;
        document.getElementById(myId).value="X";
        document.getElementById("hdnNum").value = 2;
     }else if(num == 1){
      move_r+=1;
        document.getElementById(myId).value="X";
        document.getElementById("hdnNum").value = 2;
     }else if(num==2){
      move_r+=1;
        document.getElementById(myId).value="0";
        document.getElementById("hdnNum").value = 1;
        
     }
    }
    if(document.getElementById('id1').value== 'X' && document.getElementById('id2').value== 'X'&&
    document.getElementById('id3').value== 'X')
    {
        alert(' player X win');
       
    }

    else if (document.getElementById('id1').value== '0' && document.getElementById('id2').value== '0'&&
    document.getElementById('id3').value== '0')
    {
       alert('player y win');
    }

    else if(document.getElementById('id4').value== 'X' && document.getElementById('id5').value== 'X'&&
    document.getElementById('id6').value== 'X')
    {
        alert('playr X win');
    }

    else if (document.getElementById('id4').value== '0' && document.getElementById('id5').value== '0'&&
    document.getElementById('id6').value== '0')
    {
       alert('player Y win')
    }
    else if (document.getElementById('id7').value== 'X' && document.getElementById('id8').value== 'X'&&
    document.getElementById('id9').value== 'X')
    {
        alert(' player X win');
    }
     else if (document.getElementById('id7').value== '0' && document.getElementById('id8').value== '0'&&
    document.getElementById('id9').value== '0')
    {
       alert('player Y win')
    }
    else if(document.getElementById('id1').value== 'X' && document.getElementById('id4').value== 'X'&&
    document.getElementById('id7').value== 'X')
    {
        alert('player X win');
    }
    else if(document.getElementById('id1').value== '0' && document.getElementById('id4').value== '0'&&
    document.getElementById('id7').value== '0')
    {
      alert(' player Y win');
    }

    else if(document.getElementById('id1').value== 'X' && document.getElementById('id5').value== 'X'&&
    document.getElementById('id9').value== 'X')

    {
      alert('player X win');
    }
    else if(document.getElementById('id1').value== '0' && document.getElementById('id5').value== '0'&&
    document.getElementById('id9').value== '0')

    {
      alert('player Y win');
    }
    else if(document.getElementById('id3').value== 'X' && document.getElementById('id5').value== 'X'&&
    document.getElementById('id7').value== 'X')

    {
      alert('player X win');

    }
    else if(document.getElementById('id3').value== '0' && document.getElementById('id5').value== '0'&&
    document.getElementById('id7').value== '0')

    {
      alert('player Y win');
    }
    else if(document.getElementById('id3').value== 'X' && document.getElementById('id6').value== 'X'&&
    document.getElementById('id9').value== 'X')
    {
        alert('playr X win');
    }

    else if (document.getElementById('id3').value== '0' && document.getElementById('id6').value== '0'&&
    document.getElementById('id9').value== '0')
    {
       alert('player Y win')
    }
    else if(move_r >=9){
     alert('match draw');
    }
    //debugger; 

}
}

 function changeContent() {
     var myValue=document.getElementById("select").value;
     document.getElementById("turnval").innerHTML = myValue;
     document.getElementById("id1").value ="";
     document.getElementById("id2").value ="";
     document.getElementById("id3").value ="";
     document.getElementById("id4").value ="";
     document.getElementById("id5").value ="";
     document.getElementById("id6").value ="";
     document.getElementById("id7").value ="";
     document.getElementById("id8").value ="";
     document.getElementById("id9").value ="";
     move_r=0;
 }
 
 