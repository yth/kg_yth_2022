# kg_yth_2022
Application for Software Engineer Internship at Kargo

# Programming Problem
Given a list of integers, we want to turn each integer into a string that represents the phonetic equivalent of the integer when we read each digit of the integer, and concatenate each such string together with a comma separating them.

## Given Example
Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

## Assumptions
Based on the given example, I assume the list of integers only contain positive integers. I also assume that we will only be dealing with proper list of integers, which can be defined as the following:

List-of-Integer::= [{INTEGER}^*(,)]

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
