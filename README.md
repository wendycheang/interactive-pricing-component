# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![desktop](./public/screenshot/desktop-screenshot.png)
![desktop](./public/screenshot/mobile-screenshot.png)


### Links

- Solution URL: [Github Link](https://github.com/wendycheang/interactive-pricing-component)
- Live Site URL: [Netlify](https://sweet-brioche-f7bb53.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned about sliders and how they work differently in Firefox, Chrome and IE


```css
/** formatting **/
.slider {
    appearance: none;
    width: 100%;

    border-radius: 5px;
    height: 1em;
    background: var(--light-grayish-blue);
    outline: none;
}

  
input[type=range].styled-slider.slider-progress::-webkit-slider-runnable-track {
    border-radius: 5px;
    height: 100%;
    background: linear-gradient(var(--dark-cyan), var(--dark-cyan)) 0/var(--slider-ratio) 100% no-repeat, var(--light-grayish-blue);
  }
  
  /** Chrome and Edge **/
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;

    margin-top: calc(max(1em * 0.5, 0px) - 25px);

    border-radius: 50%;
    background-image: url('../images/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% auto;
    background-color: var(--dark-cyan);
    border: 1px solid var(--dark-cyan);
    filter: drop-shadow(0px 10px 7px var(--light-cyan));
}

.slider::-moz-range-thumb {
    padding: 1em;
    border-radius: 50%;
    background-image: url('../images/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% auto;
    background-color: var(--dark-cyan);
    border: 1px solid var(--dark-cyan);
    filter: drop-shadow(0px 10px 7px var(--light-cyan));
}


/** FF*/
.slider::-moz-range-progress {
    height: inherit;
    border-radius: inherit;
    background-color:  var(--dark-cyan);
  }

.slider::-moz-range-track {  
    height: inherit;
    border-radius: inherit;
    background-color: var(--light-grayish-blue);
}

```
```js
const Slider = ({value, updateValue, min, max}) => {

    const sliderPercent = `${(value - min)/(max - min) * 100}%`

    return (
        <input id="myRange" 
        className="slider styled-slider slider-progress" 
        type="range" 
        style={{"--slider-ratio": sliderPercent}}
        min={min} 
        max={max} 
        step="1" 
        value={value} 
        onChange={(event) => updateValue(event.target.value)} />
    )
}

```
### Continued development

I want to continue to buld more complicated HTML and Javascript components like the slider and work on animations which I had to use for the slider as well

### Useful resources

- [CSS Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - Basic how to do a switch
- [Easic Range Slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - Told me how to program a range slider
- [Comma Selector and Pseudo Classes ](https://medium.com/@jonathanabrams/be-wary-of-the-css-comma-selector-and-pseudo-classes-688c02320e7f) - Avoid pseudo classes and comma selectors, did not know that would break
- [Range Sliders](https://css-tricks.com/sliding-nightmare-understanding-range-input/) - Range Sliders are handled differently by each browser
- [Example Range Slider](https://toughengineer.github.io/demo/slider-styler/slider-styler.html#download) - An example of a range slider that I based my code on

## Author

- Frontend Mentor - [@wendycheang](https://www.frontendmentor.io/profile/wendycheang)
