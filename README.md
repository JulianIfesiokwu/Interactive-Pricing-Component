# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- CSS
- Flexbox

### What I learned
I learned about different media queries and how they affect mobile view at different scrren sizes. I am really proud of my media quewries for tablets
@media only screen and (min-width: 600px)and (max-width: 768px) {...}


I also learnt about changing displayed HTML based on screen sizes using javascript. w3schools was particularly useful here.See the js code below. I never knew about this and I was so impressed with the result.

// Change discount text when viewport size changes
function handleViewportChange(mql) {
    if(mql.matches) {
        discount.textContent = `-25%`;
    } else {
        discount.textContent = `-25% discount`;
    }
}

### Continued development

I want to keep improving my js as I had problems with the checkbox and making it revert back to standard prices. I decided to hard code it and will change this later if I can think of a better solution.

### Useful resources

https://www.w3schools.com/

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/egbuna09)


