const slider = document.getElementById('myRange');
const price = document.getElementById('price');
const pageViews = document.getElementById('page-views');

//displays the default value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {    
    switch (slider.value) {
        case '1' :
            pageViews.textContent = `${10}K PAGEVIEWS`;
            price.textContent = '$8';        
            break;
        case '2' :
            pageViews.textContent = `${50}K PAGEVIEWS`;
            price.textContent = `$12`;           
            break;
        case '3' :
            pageViews.textContent = `${100}K PAGEVIEWS`;
            price.textContent = `$16`;         
            break;
        case '4' :
            pageViews.textContent = `${500}K PAGEVIEWS`; 
            price.textContent = `$24`           
            break;
        case '5' :
            pageViews.textContent = `${1}M PAGEVIEWS`;
            price.textContent = `$36`            
            break;

        default:
    }
}
  price.innerHTML = `$12`;