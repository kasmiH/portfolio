var typed = new Typed(".multiple-text",{
    
    strings: ["Frontend Developer" , 
    " YouTuber" , " Blogger"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true

}
);


document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 300);
    });
});
