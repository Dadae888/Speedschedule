console.log("script.js is linked and running!");
alert("Ce site web est accessible à tous les étudiants Sciences Po. Toutes les informations qui y sont écrites doivent être respectueuses.");

//The following code ensures the opening of the popup box when button is clicked

function openPopup() {
	//That calls for the elemnt in HTML with the id popup 
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
	// block actually means make it visible
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


//event listener to the button 
document.getElementById("submitBtn").addEventListener("click", function(event) {
    submitName();  // only runs on click
});


//following code puts the username entered in a variable named value
//username is the id of the input in html 
//Second step in the function is just checking the text isn't empty 

console.log("on en est là")
function submitName() {
    let name = document.getElementById("username").value;

    if (name) {
        alert("Hi, " + name + "!");
        closePopup();
		document.getElementById("greetingText").textContent = "Welcome, " + name + "!";
    } else {
        alert("Please enter your name.");
        return; // stop here if nothing was entered
    }

    fetch('/submit-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'username=' + encodeURIComponent(name)
    })
    .then(res => res.text())
    .then(response => {
        console.log("Server response:", response);
    });
}


console.log("on en est là")

// followng sends data to server 
//fetch sends a post request 
// headers show how it's formatted 
// body says it's a text named username 
// All answers are sent to server which is managed by server.js 

