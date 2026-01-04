## Tipps for creating bookmarkletts with ChatGPT

### typical prompts I use

Given this element tree somewhere in a document.

`<insert copy pasted element from webpage>`

Please write a bookmarklet (human readable, multiline, using /* */ style comments) that extends the height of the element to the whole screen.


### typical follow up

Can you extend the script to:
* first click this button (pasted below)
* then asynchronously waits for the element the bookmarklet targets to appear and
* then does the height modifications

`<insert copy pasted button element from webpage>`


### it really likes to mess up the syntax

Please give me the same script in this format:
* preceed with javascript:
* /* */ style comments ONLY
* multiline, human readable


### When it gives you only a patch

Please give me the complete script in this format:
* preceed with javascript:
* /* */ style comments ONLY
* multiline, human readable
```
