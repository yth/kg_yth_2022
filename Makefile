unittest:
	node tests.js

functional_test1:
	@echo "  result:" $(shell node main.js 3 25 209)
	@echo "expected:" Three,TwoFive,TwoZeroNine

functional_test2:
	@echo "  result:" $(shell node main.js 10 300 5)
	@echo "expected:" OneZero,ThreeZeroZero,Five
