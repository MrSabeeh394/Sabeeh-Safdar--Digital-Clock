// Function to get the current time
function getCurrentTime() {
  return new Promise((resolve) => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    resolve(currentTime);
  });
}

// Async function to log the current time
async function logTime() {
  try {
    const time = await getCurrentTime();
    console.log(time);
  } catch (error) {
    console.error('Error logging the time:', error);
  }
}

// Recursive function to continuously log the time every second
function startClock() {
  logTime().then(() => {
    setTimeout(startClock, 1000);
  });
}

// Start the clock
startClock();
