//Write your pseduo code first! 



document.querySelector('h1').addEventListener('click', cToF)
// c to f
function cToF(){

    //get value of c
    let temp = Number(document.querySelector('input').value)

    // conversion of c to f
    temp = (temp * 9 / 5) + 32

    // return f 
    document.querySelector('h2').innerText = temp;
}










