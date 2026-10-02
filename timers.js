/* 
setTimeout(function, milliseconds);
Calling setTimeout() does not pause JavaScript.
JavaScript immediately continues with the next statement.
A delay of zero milliseconds does not mean that the callback function will run immediately.
It means that the callback will run as soon as the current JavaScript task has finished.
A delay of zero milliseconds does not mean that the callback function will run immediately.

The setInterval() function runs a callback function repeatedly.
setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  myDisplayer(date.toLocaleTimeString());
}
clearInterval(intervalId);

Run a function once after a delay	setTimeout()
Run a function repeatedly	setInterval()
Cancel a delayed function	clearTimeout()
Stop a repeating function	clearInterval()
Repeated setTimeout()
You can create a repeating timer by calling setTimeout() again after each task finishes.
Example
function repeat() {
  myDisplayer("Hello");
  setTimeout(repeat, 1000);
}
repeat();















*/
