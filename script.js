// HANDLE AI BUTTON CLICK
function handleClick() {
    const question = prompt("Please enter your medical question:");
    if (question) {
        fetch('http://localhost:3000/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
            alert("Response from MedBot: " + data.response);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error occurred while processing your request. Please try again later.");
        });
    } else {
        alert("Please enter a valid question.");
    }
}
// EVENT LISTENER
document.getElementById('aiButtonBurns').addEventListener('click', handleClick);
document.getElementById('aiButtonCuts').addEventListener('click', handleClick);
document.getElementById('aiButton').addEventListener('click', handleClick);
// BURNS NAV
function BopenNav() {
    document.getElementById("BmyNav").style.width = "100%";
}
function BcloseNav() {
    document.getElementById("BmyNav").style.width = "0%";
}
// CUTS NAV
function CopenNav() {
    document.getElementById("CmyNav").style.width = "100%";
}
function CcloseNav() {
    document.getElementById("CmyNav").style.width = "0%";
}

function toggleShadow() {
    var burnsButton = document.getElementById('burnsButton');
    burnsButton.classList.toggle('no-shadow');
}