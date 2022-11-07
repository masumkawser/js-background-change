const imgs=[];
imgs[0]='./img/1.jpg';
imgs[1]='./img/2.jpg';
imgs[2]='./img/3.jpg';

window.onload=function(){
    const random=Math.floor(Math.random()*imgs.length);
    document.body.style.backgroundImage=`url(${imgs[random]})`;
}