let pimg1 = document.querySelector(".img1");
pimg1.addEventListener("mouseenter",function () {
    pimg1.style.scale = 1.1;
    
})
pimg1.addEventListener("mouseout",function () {
    pimg1.style.scale = 1;
})
let pimg2 = document.querySelector(".img2");
pimg2.addEventListener("mouseenter",function () {
    pimg2.style.scale = 1.1;
})
pimg2.addEventListener("mouseout",function () {
    pimg2.style.scale = 1;
})
let pimg3 = document.querySelector(".img3");
pimg3.addEventListener("mouseenter",function () {
    pimg3.style.scale = 1.1;
})
pimg3.addEventListener("mouseout",function () {
    pimg3.style.scale = 1;
})
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
    })
})
let text = document.querySelector("#animation");
text.addEventListener("mouseenter", function () {
    gsap.to(text,{
        x:20,
        duration:1,
        
})
})
text.addEventListener("mouseout", function () {
    gsap.to(text,{
        x:0,
        duration:1,
        
})
})
let word1 = document.querySelector("#word1");
word1.addEventListener("mouseenter", function () {
    gsap.to(word1,{
        x:40,
        duration:1,
        delay:1,
        
})
})
word1.addEventListener("mouseout", function () {
    gsap.to(word1,{
        x:0,
        delay:2,
        
})
})
