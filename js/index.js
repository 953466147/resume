window.onload = function () {
    /* Swiper */
    let swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: '.all_page',
            clickable: true,
        },
        keyboard: true,
    });
    var work = new Swiper('.work', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.work_page',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });
    function b() {
        var works_1 = new Swiper('.works_1', {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.works_page',
            },
        });
    }
    b();
    /* 点击音频暂停 */
    
    let music = document.getElementById('music'),
        mPlay = document.getElementById('mPlay');
    mPlay.onclick = function () {
        if (music.paused) {
            music.play();
            mPlay.style.animation = "circle 3s linear infinite";
        } else {
            music.pause();
            mPlay.style.animation = "";
        }
    };
    /* 创建随机颜色 */
    function rgb() {
        let r = Math.round(Math.random() * 256);
        let g = Math.round(Math.random() * 256);
        let b = Math.round(Math.random() * 256);
        let rgb = '(' + r + ',' + g + ',' + b + ',' + 0.5 + ')';
        return rgb;
    }
    function sj(A) {
        for (let i = 0; i < A.length; i++) {
            A[i].style.background = "rgb" + rgb();
        }
    }
    let OUT = document.querySelectorAll(".out li");
    let INNER = document.querySelectorAll(".inner li");
    sj(OUT);
    sj(INNER);
    /* 手机隐藏目录 */
    let muen=document.querySelector('.muen'),
        phone=document.querySelector('.phone_page'),
        listI=muen.querySelectorAll('i');
    muen.onclick=function(){
        for(let i=0;i<listI.length;i++){
            
        }
        let p=phone.style.display;
        if(p=='none'){
            phone.style.display='block';
            listI[0].style.transform="translateY(5px) rotate(45deg)";
            listI[1].style.display="none";
            listI[2].style.transform=" translateY(-10px) rotate(-45deg)";
        }else{
            phone.style.display='none';
            listI[0].style.transform="none";
            listI[1].style.display="block";
            listI[2].style.transform=" none";
        }
    }

    console.log('本站模仿：https://www.flqin.com/ 本站采用swiper+jQuery+Bootstrap构建完成的静态页面，页面已开源到我的github上')
}

