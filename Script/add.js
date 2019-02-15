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


function printTime() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', mins: "numeric"};
    var d = new Date();
    var date = d.toLocaleDateString('fr-FR', options);
    var time = d.toLocaleTimeString('fr-FR');
    
    document.getElementById("heure").innerHTML = date + " - " + time;
}
setInterval(printTime, 1000);