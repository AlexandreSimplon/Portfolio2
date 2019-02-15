console.log("hello")

var btn = document.getElementById("btn");
var nav = document.getElementById("nav1");
var vrai = false;

    btn.onclick = function() {
        if (vrai === false){
            nav.style.display = "block";
            vrai = true;
            console.log(vrai);
        }
        else{
            nav.style.display = "none";
            vrai = false;
            console.log(vrai);
        }
        console.log("click");
    }

    