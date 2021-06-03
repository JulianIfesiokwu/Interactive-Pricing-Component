const slider = document.getElementById('myRange');
const price = document.getElementById('price');
const pageViews = document.getElementById('page-views');
const mediaQuery = window.matchMedia('(max-width: 600px)');
const discount = document.getElementById('discount');
const mql = window.matchMedia('(max-width: 600px)');
const discountCheckbox = document.getElementById('checkbox');

const priceObject = {
    nonDiscountedPrice: [8, 12, 16, 24, 36],
    discountedPrice: [6, 9, 12, 18, 27]
}

// Change discount text when viewport size changes
function handleViewportChange(mql) {
    if(mql.matches) {
        discount.textContent = `-25%`;
    } else {
        discount.textContent = `-25% discount`;
    }
}

// Apply gradient when slider thumb moves
function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `linear-gradient(90deg, hsl(174, 86%, 45%) ${percentage}%, transparent ${percentage}%)`;
}

// Apply discount to prices
function discountPrice() {
    if(!discountCheckbox.checked) {
        switch (slider.value) {
            case '1' :
                price.textContent = `$8.00`  
            break;
            case '2' :
                price.textContent = `$12.00`           
                break;
            case '3' :
                price.textContent = `$16.00`        
                break;
            case '4' :
                price.textContent = `$24.00`         
                break;
            case '5' :
                price.textContent = `$36.00`           
                break;

            default:            
        };
    }    

    if(discountCheckbox.checked) {
        switch (slider.value) {
            case '1' :
                price.textContent = `$6.00`  
            break;
            case '2' :
                price.textContent = `$9.00`           
                break;
            case '3' :
                price.textContent = `$12.00`        
                break;
            case '4' :
                price.textContent = `$18.00`         
                break;
            case '5' :
                price.textContent = `$27.00`           
                break;

            default:            
        };
    }
}


// Update the current price,pageviews and slider gradient (each time you drag the slider handle)
slider.oninput = function() {
    
    switch (slider.value) {
        case '1' :
            pageViews.textContent = `${10}K PAGEVIEWS`;
            discountPrice();
            updateGradient(slider.value); 
            break;
        case '2' :
            pageViews.textContent = `${50}K PAGEVIEWS`;
            discountPrice();
            updateGradient(slider.value);           
            break;
        case '3' :
            pageViews.textContent = `${100}K PAGEVIEWS`;
            discountPrice();
            updateGradient(slider.value);          
            break;
        case '4' :
            pageViews.textContent = `${500}K PAGEVIEWS`; 
            discountPrice();
            updateGradient(slider.value);           
            break;
        case '5' :
            pageViews.textContent = `${1}M PAGEVIEWS`;
            discountPrice();
            updateGradient(slider.value);             
            break;

        default:
    }
}



//displays the default slider value on load
price.innerHTML = `$16.00`;

//update slider gradient on load
updateGradient(slider.value);

//check viewport size on load
handleViewportChange(mql);

mql.addListener(handleViewportChange);
  
discountCheckbox.addEventListener('click', discountPrice);