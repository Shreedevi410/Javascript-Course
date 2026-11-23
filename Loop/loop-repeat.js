// Repeat a countdown until it reaches zero.
function startCountdown(startNumber) {
    let count = startNumber;

    const timer = setInterval(() => {
        console.log(`Countdown: ${count}`);
        count--;

        if (count < 1) {
            clearInterval(timer);
            console.log("Countdown finished");
        }
    }, 1000);
}

startCountdown(5);
