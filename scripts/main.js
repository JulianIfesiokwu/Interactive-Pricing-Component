const slider = document.getElementById('myRange');
const price = document.getElementById('price');
const pageViews = document.getElementById('page-views');

function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `linear-gradient(90deg, hsl(174, 86%, 45%) ${percentage}%, transparent ${percentage}%)`;
}

// Update the current price,pageviews and slider gradient (each time you drag the slider handle)
slider.oninput = function() {    
    switch (slider.value) {
        case '1' :
            pageViews.textContent = `${10}K PAGEVIEWS`;
            price.textContent = '$8.00';
            updateGradient(slider.value);      
            break;
        case '2' :
            pageViews.textContent = `${50}K PAGEVIEWS`;
            price.textContent = `$12.00`;
            updateGradient(slider.value);           
            break;
        case '3' :
            pageViews.textContent = `${100}K PAGEVIEWS`;
            price.textContent = `$16.00`;
            updateGradient(slider.value);          
            break;
        case '4' :
            pageViews.textContent = `${500}K PAGEVIEWS`; 
            price.textContent = `$24.00`;
            updateGradient(slider.value);           
            break;
        case '5' :
            pageViews.textContent = `${1}M PAGEVIEWS`;
            price.textContent = `$36.00`;
            updateGradient(slider.value);             
            break;

        default:
    }
}

//displays the default slider value on load
price.innerHTML = `$16.00`;

//update slider gradient on load
updateGradient(slider.value);
  
