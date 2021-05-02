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

# Performance Analysis
We do work in proportion to how many digits there are in the list of integers that we are passed. For each digit, we perform a lookup to see how to map it to a bit of string, and then we concatenate the strings together.

String concatenation can be expensive if we have to constantly allocate or reallocate memory to fit a larger string. Assuming that the final string is not very long, and that we can allocate all the memory we need in one go upfront, we just need to copy at most five characters for each digit. We can consider this a constant amount of work for each digit.

The overall time complexity is O(n), where n is the number of digits. The overall space complexity is also O(n), where n is the number of digits. The maximum number of characters that we hold for each digit to is six (e.g. "three" + ",").

In the naive approach, we use a series of "if" statements to find out how to map a digit to a string. In the worst case, we would have to make 9 checks before finding the correct mapping. However, we can use a hash table to speed up the lookup. However, there is also an overhead of using a hash table, although a trivial amount by today's standards. We can do better by simply using an global array since we know the digits range from zero to nine, and use the array index to perform the lookup. That way, we have an O(1) lookup while saving the expense of using a hash table.
