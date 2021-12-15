var i=0,text;
text = "Music Mania."

function typing(){
    if(i<text.length){
        document.getElementById("typwrt").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,300);
    }
}

typing();

