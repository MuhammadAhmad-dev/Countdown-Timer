const endDate = "05 March 2025 10:00 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")
 

// to caluclate days, hours, minutes, seconds

function clock(){
    const end = new Date(endDate) 
    const now = new Date()
    const diff = (end - now) / 1000;

    // to stop timer after ending and not start start counting backwords
    if (diff < 0) return;

    // for days
    inputs[0].value = Math.floor(diff / 3600 /24);

    // for hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // for minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    // for seconds
    inputs[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)