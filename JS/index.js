window.onload = function () {
    /////////////////////////////////////第一步轮播开始//////////////////////////////////////////
    let boxs = document.querySelector('.banner > .box');
    let imgs = document.querySelectorAll('.banner > .box > a > img');
    let leftbtn = document.querySelector('.leftbtn');
    let rightbtn = document.querySelector('.rightbtn');
    let dot = document.querySelectorAll('.dot');
    let index = 0;
    let flag = true;

    for(let i=0; i<dot.length; i++){
        dot[i].onclick = function () {
            for(let j=0; j<dot.length;j++){
                dot[j].classList.remove('hot');
                imgs[j].style.zIndex = 10;
                animate(imgs[j],{opacity:0})
            }
            imgs[i].style.zIndex = 999;
            animate(imgs[i],{opacity:1});
            dot[i].classList.add('hot');
            index = i;
        }
    }

    let t = setInterval(move,2000);
    boxs.onmouseenter = function () {
        clearInterval(t);
    };
    boxs.onmouseleave = function () {
        t = setInterval(move,2000);
    };
    function move() {
        index++;
        if(index === imgs.length){
            index = 0;
        }
        imgs.forEach(function (element) {
            element.style.zIndex = 10;
            animate(element,{opacity:0})
        });
        imgs[index].style.zIndex = 999;
        animate(imgs[index],{opacity: 1},function () {
            flag = true;
        });
        dot.forEach(element=>element.classList.remove('hot'));
        dot[index].classList.add('hot');
    }
    leftbtn.onclick = function () {
        if(!flag){
            return
        }
        flag = false;
        movel()
    };
    rightbtn.onclick = function () {
        if(!flag){
            return;
        }
        flag = false;
        move();
    };
    function movel() {
        index--;
        if(index< 0){
            index = imgs.length-1;
        }
        imgs.forEach(function (element) {
            element.style.zIndex = 10;
            animate(element,{opacity: 0});
        })
        dot.forEach(element=>element.classList.remove('hot'));
        imgs[index].style.zIndex = 999;
        animate(imgs[index],{opacity: 1},function () {
            flag = true;
        });
        dot[index].classList.add('hot');
    }


    ///////////////////////////////////////////第二部分轮播开始//////////////////////////////////////
    let title = document.querySelector('.title');
    let titleMap = document.querySelectorAll('.titlemap')[0];
    let btnl = document.querySelector('.container > .owl > .leftbtn');
    let btnr = document.querySelector('.container > .owl > .rightbtn');
    // let widths = parseInt(getComputedStyle(titleMap,null).width)+ 30;
    let widths = titleMap.offsetWidth;
    let t1 = setInterval(movet,2000);
    let flagt = true;

    function movet() {
       if(flagt){
           flagt = false;
            animate(title,{left:-widths},1000,function () {
                title.appendChild(title.firstElementChild);
                title.style.left = 0;
                flagt =true;
            })
        }
    }
    title.onmouseenter =function(){
        clearInterval(t1)
    };
    title.onmouseleave = function(){
        t1 = setInterval(movet,2000)
    };
    btnr.onclick = function () {
        movet();
    };

    // btnl.onclick = function () {
    //     movez();
    // };
    //
    // function movez(){
    //     if(flagt){
    //         flagt = false;
    //         title.appendChild(title.lastElementChild);
    //         animate(title,{left:widths},1000,function () {
    //             title.appendChild(title.lastElementChild);
    //             title.style.left = 0;
    //             flagt =true;
    //         })
    //     }
    // }





}