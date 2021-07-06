let randomNumber1=Math.random()*6;
let randomNumber2=Math.floor(randomNumber1)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber2+".png");

let random3=Math.random()*6;
let random4=Math.floor(random3)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+random4+".png");

if (randomNumber2===random4){
    document.querySelector("h1").textContent="Draw!"
}
else if(randomNumber2>random4)
{
    document.querySelector("h1").textContent="Player 1 Wins!"
}
else
{
    document.querySelector("h1").textContent="Player 2 Wins!"   
}
