# using only vanilla JS, I created an RGB slider with text inputs.

## How I did it:
- range inputs are used to determine R, G and B values that maxes out at 255 each (white).
- those values are then inserted into CSS variables assigned to the main background.
- at the same time, they are displayed in the R, G and B text fields

# what I want next:
- I want to add a custom color input box where a user can choose exact color needed to display.

# challenges: 
- I need to figure out how to convert the Hex values into RGB or vice versa so that I can still display them in the same text input fields for a better user experience. 

## what I've learned:
- parseInt(valStr).toString(16)); //converts to hex value by first changing to decimal then re-convert back to string.
