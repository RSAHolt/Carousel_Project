// load dom first before allowing functions.
$(document).ready(function() {
    let index = 0;

    function showSlide(i) {
      const totalSlides = $('.item').length;
        index=0;
        index = (i + totalSlides) % totalSlides; // wrap around
        const offset = -index * 100;
        $('.slides').css('transform', `translateX(${offset}%)`);

      
    console.log(index,totalSlides,offset);

    }
  
    //next and prev buttons
    $('#next').on('click', () => showSlide(index + 1));
    $('#prev').on('click', () => showSlide(index - 1));
  
    // auto-play
    setInterval(() => showSlide(index + 1), 5000);
    
});