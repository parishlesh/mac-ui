const myDate = document.getElementById('date')
const batteryLevel = document.getElementById('level')


myDate.innerHTML = moment().format("ddd, dd MMM, HH:mm");

navigator.getBatter().then (batt=> {
    const setBtteryLevel = ()=>{
        const level= batt.level*100;

        batteryLevel.innerText =level;
    }
    setBtteryLevel();
    batt.ondischargingtimechange = ()=>{
        setBtteryLevel();
    };
    batt.onchargingtimechange = ()=>{
        setBtteryLevel();
    };
})

setInterval(() => {
    myDate.innerHTML = moment().format("ddd, dd MMM, HH:mm");
}, 300);