/*
STRINGS
"" '' [` `]
let text = `i am "vaibhav" `;
let text = "vaibhav";
let length = text.length ;

== equal  === not equal
variable allow in ${  }

text.at(2) = text[2]
The at() method is a new addition to JavaScript.
It allows the use of negative indexes while charAt() do not.

Property access[]
 might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
Propert access is read only, but str[0] = "A" gives no error in "sloppy mode".

The concat() method joins two or more strings:
Strings are immutable: Strings cannot be changed, only replaced.

slice(start, end)
substring(start, end)
substr(start, length)

The substring() method extract a part of a string and returns the extracted parts in a new string:
advised to use substring() or slice() instead.
The trim() method removes whitespace from both sides of a string:
The padStart() method pads a string from the start.xxxx5
The padEnd() method pads a string at the end.  5xxxx
It pads a string with another string (multiple times) until it reaches a given length.

The repeat() method
returns a string with a number of copies of a string.
method returns a new string.
does not change the original string.
replace() method
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
To replace all matches, use a regular expression with a /g flag (global match):

A string can be converted to an array with the split() method:
text.split("")     // Split on characters
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
text.split("") is most unsafe
It breaks up 4-byte emojis (like 💩 becomes ['\uD83D', '\uDCA9']).
Spread [...text] is partially safe:
It works for simple emojis like 💩 or 🔥, but destroys complex emojis like 👨‍👩‍👧‍👦, 🧑‍⚕️ (doctor), or flags.
Intl.Segmenter is 100% Safe:
It handles every emoji, accent, and complex characters.













*/