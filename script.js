let container = document.querySelector(".container");
let video = document.querySelector(".back video");
let contBtn = document.querySelector("#continue-btn");
let skipBtn = document.querySelector("#skip-btn");
let choices = document.querySelector(".choices");
let shownChoice1 = false;

container.addEventListener("click", function(){
    if(!container.classList.contains("anim")){
        console.log("flip!");
        container.classList.add("anim");
        video.play();
        container.querySelector(".front").style.zIndex = 0;
    }
});

video.addEventListener("timeupdate", function(){
    if(video.currentTime > 5 && !shownChoice1){
        video.pause();
        choices.style.visibility = "visible";
        shownChoice1 = true;
    }
})

contBtn.addEventListener("click", function(){
    video.play();
    choices.style.visibility = 'hidden';
})

skipBtn.addEventListener('click', function(){
    choices.style.visibility = "hidden";
    video.currentTime = 210;
    video.play();
  });
  
container.addEventListener('click', function(){
if(!container.classList.contains("anim")){
    container.classList.add("anim");
    video.play();
}
});

video.addEventListener('ended', function(){
    container.classList.remove("anim");
    shownChoices = false;
});