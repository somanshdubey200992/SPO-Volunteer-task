var box1 = document.querySelector("input[id='option-jee']");
box1.addEventListener('change',function(e1){
    if(box1.checked){
        let p1=document.getElementsByName("jee");
        let len1=p1.length;
        for(var x=0;x<len1;x++){
            p1[x].checked = true;
        }
        let k1=document.getElementsByClassName("form-check-input jee");
        lenk=k1.length;
        for(var y=0;y<lenk;y++){
            k1[y].checked=true;
        }
    }
   else{
        let p1=document.getElementsByName("jee");
        let len1=p1.length;
        for(var x=0;x<len1;x++){
            p1[x].checked = false;
    }
    let k1=document.getElementsByClassName("form-check-input jee");
        lenk=k1.length;
        for(var y=0;y<lenk;y++){
            k1[y].checked=false;
}
document.getElementById('d15').checked=false;
document.getElementById('e16').checked=false;
   }
});

var box2 = document.querySelector("input[id='option-gate']");
box2.addEventListener('change',function(e2){
    if(box2.checked){
        let p2=document.getElementsByName("gate");
        let len=p2.length;
        for(var x=0;x<len;x++){
            p2[x].checked = true;
        }
    }
   else{
        let p2=document.getElementsByName("gate");
        let len=p2.length;
        for(var x=0;x<len;x++){
            p2[x].checked = false;
    
   }
}
});


var box3 = document.querySelector("input[id='option-jam']");
box3.addEventListener('change',function(e3){
    if(box3.checked){
        let p3=document.getElementsByName("jam");
        let len=p3.length;
        for(var x=0;x<len;x++){
            p3[x].checked = true;
        }
    }
   else{
        let p3=document.getElementsByName("jam");
        let len=p3.length;
        for(var x=0;x<len;x++){
            p3[x].checked = false;
   }
}
});

var box4 = document.querySelector("input[id='option-cat']");
box4.addEventListener('change',function(e4){
    if(box4.checked){
        let p4=document.getElementsByName("cat");
        let len=p4.length;
        for(var x=0;x<len;x++){
            p4[x].checked = true;
        }
    }
   else{
        let p4=document.getElementsByName("cat");
        let len=p4.length;
        for(var x=0;x<len;x++){
            p4[x].checked = false;
   }
}
});

function log(){
    if(box1.checked){
        console.log("Programmes offered by JEE Advanced are:")
        let p5=document.getElementsByName("jee");
        let len=p5.length;
        for(var x=0;x<len;x++){
            console.log("BT/BS/Dual:");
            console.log(p5[x].value);     
        }
    }
    if(box2.checked){
        console.log("Programmes offered by GATE are:")
        let p6=document.getElementsByName("gate");
        let len=p6.length;
        for(var x=0;x<len;x++){
            console.log("MT/MS/MSC : ");
            console.log(p6[x].value);     
        }
    }
    if(box3.checked){
        console.log("Programmes offered by JAM are:")
        let p7=document.getElementsByName("jam");
        let len=p7.length;
        for(var x=0;x<len;x++){
            console.log("MT/MS/MSC : ");
            console.log(p7[x].value);     
        }
        console.log("Dual degree : ");
        console.log("PHY");

    }
    if(box4.checked){
        console.log("MBA in IME department");
    }
};

function reload(){
    window.location.reload();
}