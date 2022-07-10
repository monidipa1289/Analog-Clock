        const hour = document.querySelector('.hour');
        const minutes = document.querySelector('.minute');
        const seconds = document.querySelector('.seconds');
        const digital = document.querySelector('.digital');
        const container = document.querySelector('.container');
        setInterval(() => {
             let h = new Date().getHours();
             let m = new Date().getMinutes();
             let s = new Date().getSeconds();
             if(h>=12)
             h=h-12;
             seconds.style.transform = `rotate(${s*6}deg)`;
             minutes.style.transform = `rotate(${6*m+0.1*s}deg)` ;
             hour.style.transform = `rotate(${30*h+0.5*m+0.00833*s}deg)` ;
             digital.innerHTML = `${h} : ${m} : ${s}`;
        }, 1000);
        
    
