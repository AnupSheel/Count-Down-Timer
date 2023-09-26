const getColor = () => {
    //hex code

    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode);
}
//event call
// document.getElementById('btn').addEventListener("click",getColor);

//initial call
getColor()
