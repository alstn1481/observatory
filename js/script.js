document.addEventListener("DOMContentLoaded" , ()=> {

    const mainMenu =[...document.getElementsByClassName('mainMenu')];
    const nav      =[...document.getElementsByTagName('nav')];
    const last =        document.getElementById('last');

    mainMenu.forEach( i => {
        i.addEventListener("focus" , () => {
            nav.forEach( j => j.style.height = 0 );
            i.nextElementSibling.style.height= "150px";
        });
    });

    last.addEventListener('blur', ()=> nav[3].style.height = 0 );

    /*************************/
    const slideImg = document.querySelectorAll('#slide img');

    let t = 2;
    const fadeSlide = ()=> {    

        const x =()=> {
            slideImg.forEach( z => z.style.opacity = 1);
            t= 2;
        }
        const y = ()=> {
            slideImg[t].style.opacity = 0;
            t--;
        }
        //삼항연산자
        ( t == 0 ) ?  x() : y();        
       
    }

    setInterval( fadeSlide , 2000);

    /*****************************/
    const btn = document.querySelectorAll("#btn button");
    const h2  = document.querySelectorAll('#btn h2');
    const ul  = document.querySelector("#notice ul");
    const ul_a = document.querySelectorAll("#notice ul a");
    const gallery = document.getElementById("gallery");
    const popup = document.getElementById("popup");

    btn.forEach( i => {

        i.addEventListener("click" , ()=>{
            const active = document.getElementsByClassName('active')[0];
            active.classList.remove('active');
            i.parentElement.classList.add('active');

            const x = () => {
                ul.style.display = "block";
                gallery.style.display = "none";
            }

            const y = () => {
                ul.style.display = "none";
                gallery.style.display = "flex";
            }
            
            ( i.textContent==="공지사항" )  ? x() : y();
        });

    });

    /**** 공지사항 리스트 항목 클릭 *****/
    ul_a.forEach( i => {
        i.addEventListener("click" , ()=> {
            popup.style.display = "block";
        });
    });

    popup.querySelector("button").addEventListener("click" , ()=> {
        popup.style.display = "none";
    });

});//end.............