// load dom first before allowing functions.
$(document).ready(function() {
    let index = 0;
    $('.item').eq(index).find('.description').addClass('active');

    //main carousel loop
    function showSlide(i) {
      const totalSlides = $('.item').length;
        index=0;
        index = (i + totalSlides) % totalSlides;
        const offset = -index * 100;
        //animation translations:

        //for slides
        $('.slides').css('transform', `translateX(${offset}%)`);
        
        //for slide descriptions
        $('.description').removeClass('active');
        $('.item').eq(index).find('.description').addClass('active'); 
        
        //for slide indicator
        $('.current-slide').text(index + 1);
         $('.total-slides').text(totalSlides);


      
    console.log(index,totalSlides,offset);

    }
  
    //next and prev buttons
    $('#next').on('click', () => showSlide(index + 1));
    $('#prev').on('click', () => showSlide(index - 1));
  
    // auto-play
    setInterval(() => showSlide(index + 1), 5000);
    
});