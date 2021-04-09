var planes = [
    "Background/254360.jpg",
    "Background/254361.jpg",
    "Background/254379.jpg",
    "Background/254431.jpg",
    "Background/254475.jpg",
    "Background/2636727.jpg",
    "Background/pexels-pixabay-76964.jpg"
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if (counter == 7)
    {
        counter = 0;
    }
    img.src = planes[counter];
    counter = counter + 1;
});