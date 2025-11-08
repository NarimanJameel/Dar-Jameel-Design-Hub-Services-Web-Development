console.log("i am inside the script")
function sendEmail() {
    var link = "mailto:nariman.nashaat.gamil@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

<textarea id="myText">
    Lorem ipsum...
</textarea>
<button onclick="sendMail(); return false">Send</button>
