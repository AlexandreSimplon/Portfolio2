function printTime() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', mins: "numeric"};
    var d = new Date();
    var date = d.toLocaleDateString('fr-FR', options);
    var time = d.toLocaleTimeString('fr-FR');
    
    document.getElementById("heure").innerHTML = date + " - " + time;
}
setInterval(printTime, 1000);