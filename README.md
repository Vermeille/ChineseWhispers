# The Whisperer in Chinese

[Demo!](https://vermeille.github.io/ChineseWhispers/)

This is a browser implementation of the chinese whispers graph clustering
algorithm.

```javascript

let graph = [
    [1, 1, 2, 5], // 0
    [0, 0],       // 1
    [0, 3, 3, 3], // 2
    [2, 2, 2],    // 3
    [],           // 4
    [0]           // 5
    // Real life graphs should be much bigger
];

/*
 * Construct a ChineseWhispers algorithm.
 * The first argument is the graph.
 * The second optional argument is the maximum number of iterations. Defaults
 * to 100
 */
let cw = new ChineseWhispers(graph);

// This is optional, it just brings total compability with my kmeans / xmeans
// implementation
cw.start();

while (!cw.ended()) {
    cw.step();
}

console.log(cw.getRes());
```

# References

* *The Whisperer in Darkness* By H. P. Lovecraft
