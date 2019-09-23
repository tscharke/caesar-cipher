![](https://github.com/tscharke/caesar-cipher/workflows/Tests/badge.svg)

# Motivation

In [EarthToJavascript-Slack](http://earthtojavascript.slack.com) the following question
was asked and I found the tasks exciting and this is my approach and thus a possible solution.

# Description

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13
letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

## Tasks

Create a function that takes a string and returns the string ciphered with Rot13. If there're
numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13
"implementation".

### Encrypted message

A encrypted message to test: _qevax zber binygvar, pbatenghyngvbaf lbh trg gb frg gur arkg punyyratr_

## Installation

Since I'm a friend of [Test-Driven-Development](https://en.wikipedia.org/wiki/Test-driven_development) (TDD),
I use [Jest](https://jestjs.io) and [Wallaby](https://wallabyjs.com) here (which I highly recommended 😃).
So you have to install some dependencies and then you can run the tests.

````bash
yarn install && yarn test
````

## Bonus points

- For converting to ascii to handle other characters.
- For a variable key.

## TOOD's

- [ ] Take upper and lower cases
- [ ] Simplify the function and avoid creating a shift cipher before (e.g. using RegEx instead 🤔)

Looking forward to any feedback, reviews and PRs 🙏
