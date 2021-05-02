# kg_yth_2022
Application for Software Engineer Internship at Kargo

# Programming Problem
Given a list of integers, we want to turn each integer into a string that represents the phonetic equivalent of the integer when we read each digit of the integer, and concatenate each such string together with a comma separating them.

## Given Example
Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.

Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

## Assumptions
Based on the given example, I assume the list of integers only contain positive integers. I also assume that we will only be dealing with proper list of integers, which can be defined as the following:

List-of-Integer::= [ { INTEGER }^{ * (,) } ]

### Examples that matches the definition
[]

[1]

[2, 3]

[12987, 0, 23, 987]

### Examples that does not match the definition
[ ,0]

[1, "One"]

[2, 2.32]

[3, ]

# Solution Overview
There are two clear patterns that we can take advantage of in our solution.
One, we can perform the same action to deal with each integer in the list of integers. Two, we can perform the same action to deal with each digit in each integer. If we had two helper functions that helps us deal with those two actions, the rest will be simply putting the pieces together.

If we approach the problem from this perspective, we can also easily test each piece that we create, which will increase our confidence in the solution.

# Performance Analysis
We do work in proportion to how many digits there are in the list of integers that we are passed. For each digit, we perform a lookup to see how to map it to a bit of string, and then we concatenate the strings together.

String concatenation can be expensive if we have to constantly allocate or reallocate memory to fit a larger string, and repeated copy the string into new memory regions. Assuming that the final string is not very long, and that we can allocate all the memory we need in one go upfront, we just need to copy at most six characters for each digit  (e.g. "three" + ","). We can consider this a constant amount of work for each digit.

The overall time complexity is O(n), where n is the number of digits. The overall space complexity is also O(n), where n is the number of digits. The maximum number of characters that we hold for each digit to is six. During the execution, we also create at most O(n) stack frames at one time for the recursive call, and we can assume the sizes of the stack frame have a constant upper bound.

In the naive approach, we used a series of "if" statements to find out how to map a digit to a string. In the worst case, we would have to make 9 checks before finding the correct mapping. However, we can use a hash table to speed up the lookup. However, there is also an overhead of using a hash table, although the overhead is trivial by today's standards. We can do better by simply using an global array since we know the digits range from zero to nine, so we can use the array index to perform the lookup. That way, we have a faster lookup while saving the expense of using a hash table.

We can increase the size of our lookup array to include, for example, all two digit combinations, and deal every two digits instead of every digit. However, this will make our time and space complexities O(n/2), which is the same as O(n).

# Design Choice
Based on the description of the problem, we want to create the means to turn a list of positive integers into its phonetic equivalent in string form. The proposed means of running of program (main.js) would mean that the command line arguments would be passed in as a list of strings. It would be easier to work with strings from the start, but I felt it ran counter to the spirit of the problem posed. As a result, I decided to turn the command line arguments into a list of integers before calling my function on the result.

By doing things this way, we obtained a potentially useful library for dealing with the problem of turning integers and lists of integers into their phonetic equivalent in the future. Another benefit of this approach is that we can easier extend it to cover other scenarios (please see below).

# Potential Improvements
The scope of this library is pretty limited. We only deal with positive integers. It would be nice if we could extend this to cover negative integers, or even floating point numbers. With the current library that we have develop, we could easier perform the extension.

For negative integers, we could create another function that check whether a number we want to convert is positive or negative. If the number is negative, we can simply return the concatenation of "Minus" and the result of calling `integer_to_string` function on the result of the negative input multiplied by `-1`. Otherwise, we just return the result of calling `integer_to_string` on the input.

For a floating point number, we could create another function that split the integral part of the number from the fractional part of the number. We return the concatenation of the result of calling `integer_to_string` on the integral part of the number, "Period", and the result of calling `integer_to_string` on the fractional part of the number.

With both of the above two functions and with only a few minor adjustments to the rest of the code, we can perform phonetic conversion on all of the regular numbers in JavaScript. If we wanted complete coverage, we would also need to add checks and conversions for NaN and Infinity.

# Challenges Encountered
Despite the widespread popularity of JavaScript, I have not used the language before. I used this opportunity to learn JavaScript and Node.js. It was a very positive experience. Some of the syntax is very C like, which makes many parts of the language seem familiar. In addition, JavaScript has some useful Lisp features that I could draw on to make solving the problem in JavaScript easier.
