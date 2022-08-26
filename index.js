// Code your solutions in this file


function writeCards( arr=["Guadalupe", "Ollie", "Aki"],birthday='birthday'){
    for(let i=0;i<arr.length;i++){
        console.log(`Thankyou,${arr[i]} for the wonderful${birthday} gift!`)
    }
}
writeCards()
const countDown = () => {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}