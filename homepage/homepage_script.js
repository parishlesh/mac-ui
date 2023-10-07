document.addEventListener("DOMContentLoaded", function(){

  
  const myDate = document.getElementById('date');
  const batteryLevel = document.getElementById('level');
  
  // Check for battery API support
  if ('getBattery' in navigator) {
    navigator.getBattery().then(batt => {
      const setBatteryLevel = () => {
        const level =Math.floor( batt.level * 100);
        batteryLevel.innerText =level;
      };
      
      setBatteryLevel();
      
      batt.addEventListener('dischargingtimechange', setBatteryLevel);
      batt.addEventListener('chargingchange', setBatteryLevel);
    });
  } else {
  // Handle the case where the battery API is not supported
  batteryLevel.innerText = 'Battery API not supported';
}

setInterval(() => {
  myDate.innerHTML = moment().format('ddd, DD MMM, HH:mm');
}, 300); 

});