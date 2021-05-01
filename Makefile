functional_test:
	@echo "  result:" $(shell node main.js 3 25 209)
	@echo "expected:" Three,TwoFive,TwoZeroNine

test0:
	@echo "  result:" $(shell node main.js 0)
	@echo "expected:" Zero

test1:
	@echo "  result:" $(shell node main.js 1)
	@echo "expected:" One

