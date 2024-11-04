// stores text and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton")

function changeTextColor(){
    const colors = ["red","yellow","green","blue","orange","purple","pink","indigo"];
    changeColorButton.addEventListener("click",() => {
       const randomColor = colors[Math.floor(Math.random()* colors.length)];
       textElement.style.color = randomColor;
    });
}
changeTextColor();


const pictureElement = document.getElementById("toggle-image");

function changePicture(){
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB",
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9URafHFy7iN-BEcc9cA-i99hf1leoNwo40S56elyYY3Fmy0:https://i.ytimg.com/vi/oV_J4sXJsCc/maxresdefault.jpg&s"
    ];
    
    let currentIndex = 0;
    
    pictureElement . addEventListener("click",() => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
        
    });
    
}
changePicture();