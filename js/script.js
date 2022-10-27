// document - это вся страница HTML
// console.log(document);
// console.log(typeof document);



// document.querySelector() - подключается к определенному элементу (ОДНОМУ)


const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minNumber = document.querySelector('.minutes');

    let s = 0, m = 0, h = 0;
function clock() {
    // new Date() - отдает время с компьютера
    // getSeconds() - отдает секунды
    // getMinutes() - отдает минуты
    // getHours() - отдает часы


    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

        if(s == 0) {
            s =seconds;
        }else {
            s += 6;
        }
        if(m == 0) {
            m = minutes;
        }else {
            m += 0.1;
        }
        if(h == 0) {
            h = hours;
        }else  {
            h += 30 / 3600;
        }

        sec.style.transform = `rotate(${s}deg)`;
        sec.style.transition = '1s linear';
        min.style.transform = `rotate(${m}deg)`;
        min.style.transition = '1s linear';
        hour.style.transform = `rotate(${h}deg)`;
        hour.style.transition = '1s linear';

        hourNumber.innerHTML = time.getHours();
        minNumber.innerHTML = time.getMinutes();
        

    setTimeout(() => clock(), 1000); 
        
    

}    

clock();

// Рекурсия - это когда функция вызывает саму себя

// function rekurs(i = 0) {
//     if(i < 100) {
//         i++;
//         console.log(i);
//         rekurs(i);
//     }
// }
// rekurs();


const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < links.length; i++) {
    // addEventListener() - создает события для элемента 
   links[i].addEventListener('click', function() {
    //    this - отдает то оъбект на который было совершенно событие 
       for(let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
       }
       activeTabs(this, tabs[i])
       
   })
    
}

function activeTabs(link, tab) {
    link.classList.add('active');
    tab.classList.add('active');        
}