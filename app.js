const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function second(){
  let time = new Date();
  let seconds = time.getSeconds();
  let secondsDegree = ((seconds/60)*360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  let minutes = time.getMinutes();
  let minutesDegree = ((minutes/60)*360)+90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  let hours = time.getHours();
  let hoursDegree = ((hours/12)*360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(second,1000);