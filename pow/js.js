function aa(){
    var a_1 = document.getElementById('a1').value;
    var a_2 = document.getElementById('a2').value;
    var a_3 = document.getElementById('a3').value;
    var b =0;
    var c =0;
    var d =0;
    var e =0;
    var f =0;
    a_1 = parseInt(a_1);
    a_2 = parseInt(a_2);  
    a_3 = parseInt(a_3);
    var s = a_1+a_3;
    if(a_2*2==s){
        c += 1;
        b=0;
        var ad = a_2-a_1;
        d = " 등차 수열 공차: ";
    }
    if(Math.pow(a_2,2)==a_1*a_3){
        c += 1;
        b=1;
        e = " 등비 수열 공비: ";
        var ar = a_2/a_1;
    }
    if(c==1 && b==0){
        alert(d+ad);
    }
    else if(c==1 && b==1){
        alert(e+ar);
    }
    else if(c==2){
        alert(d+ad+ "or "+e+ar);
    }
    else{
        alert("error")
    }
}



function bb(){
	var d = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var a = document.getElementById('kk').value;
	for(var z=d.length;z>=0;z--)
	{
		while(a>=Math.pow(2, z))
		{
			d[d.length-z]=1;
			a-=Math.pow(2, z);
		}
	}
	alert(d.toString().replace(/,/gi,"").replace(d.toString().replace(/,/gi,"").split('1')[0],""));
}

function cc(){
    var d =0 ;
    var a = document.getElementById('kk').value;
	for(var z=100;z>=0;z--)
	{
		while(a>=Math.pow(10, z))
		{
			a-=Math.pow(10, z);
			d+=Math.pow(2, z);
		}
	}
	alert(d);
}
