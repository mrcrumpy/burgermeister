# Burgermeister
The burgermeister is a nearly pure CSS approach to animate the well known burger menu icon on interaction.

The outcome can be seen here:
http://mrcrumpy.github.io/burgermeister/

## How
The Icon of a element and its :before and :after pseudoelements (the 3 strokes).
On hover the :before and :after pseudoelements will be transitioned, creating a single stroke with the element.
On click the element gets a additional active class, which gives the element a transparent background and rotates the pseudoelements 45° creating a cross to close the menu.