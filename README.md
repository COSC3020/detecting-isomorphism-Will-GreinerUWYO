# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst-case scenario requires the permutation to be the last one checked. This means there are V! permutations it might check.
Each edge must be swapped to fit the check conditions, which means E edges for each permutation.
Therefore the worst-case big $\Theta$ is $\Theta(V! * E)$

## Sources and Plagarism Statement

Took the test code from fellow student Collin Davis' repository.
Took the brute force implementation of heap's algorithm from my brute force algorithm, just tweaked to fit the setting.
Used this for factorilization code [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/)
Used this for understanding more on isomorphism [Wikipedia](https://en.wikipedia.org/wiki/Graph_isomorphism)

Worked with Michael Stoll and Jim Ward to help debug the code.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
