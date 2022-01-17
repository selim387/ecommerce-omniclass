$(function () {
    $('.filter-price').each(function (i, element) {
        const min = $(element).data('min');
        const max = $(element).data('max');
        const from = $(element).data('from');
        const to = $(element).data('to');
        
        
    const slider = element.querySelector('.filter-price__slider');
    
    var slider_options = {
            start: [from, to],
            connect: true,
            range: {
                'min': min,
                'max': max
            }
        }; 

    if (typeof slider.noUiSlider === "undefined") {
        noUiSlider.create(slider,slider_options);
     }
 
 // If the slider already exists, then update the options with TRUE parameter
 
     else {
        slider.noUiSlider.updateOptions(slider_options,true);
     }


        const titleValues = [
            $(element).find('.filter-price__min-value')[0],
            $(element).find('.filter-price__max-value')[0]
        ];

        slider.noUiSlider.on('update', function (values, handle) {
            titleValues[handle].innerHTML = values[handle];
        });

   });
});

