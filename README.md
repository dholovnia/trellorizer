# Trellorizer

Greasemonkey script for adding background colors to Trello cards. This is helpful for those using Trello for Kanban-esque purposes who want to see, at a glance, the breakdown of the types of cards and what's blocked. The background color of each card is determined by the color of the label applied to that card.

Tested on:

- Chrome, using the Tampermonkey extension

Special cases:

- It takes only 1 label for the background colors and other will be left so that users can still see access them.

Limitations:

- For cards with more than one label last color will win. Other colors will be left as they were.

[Click here](https://raw.githubusercontent.com/dholovnia/trellorizer/master/trellorizer.js) to install.
