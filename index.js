function shuffle(xs) {
    for (let i = 0; i < xs.length; ++i) {
        let j = Math.floor(Math.random() * (xs.length - i)) + i;
        let tmp = xs[i];
        xs[i] = xs[j];
        xs[j] = tmp;
    }
    return xs;
}

function range(start, end, step = 1) {
    let xs = new Array(Math.floor((end - start) / step));
    for (let i = 0; i < xs.length; ++i) {
        xs[i] = start;
        start += step;
    }
    return xs;
}

function count(xs) {
    let cnt = {};
    for (let x of xs) {
        cnt[x] = (cnt[x] || 0) + 1;
    }
    let asPairs = [];
    for (let k in cnt) {
        asPairs.push([k, cnt[k]]);
    }
    asPairs.sort((x, y) => y[1] - x[1] || x[0] - x[1]);
    return asPairs;
}

class ChineseWhispers {
    constructor(links, maxIter = 100) {
        this.links = links;
        this.clusters = range(0, links.length);
        this.maxIter = maxIter;
    }

    start() {
        return this.step();
    }

    step() {
        let toVisit = shuffle(range(0, this.links.length));
        this.done = true;
        toVisit.forEach(x => {
            let node = x;
            let neighborsClusters = this.links[node].map(x => this.clusters[x]);
            let mostCommonNeighbor =
                neighborsClusters.length !== 0
                    ? count(neighborsClusters)[0][0] | 0
                    : this.clusters[x];
            this.done = this.done && this.clusters[node] == mostCommonNeighbor;
            this.clusters[node] = mostCommonNeighbor;
        });
        --this.maxIter;
        this.done = this.done || this.maxIter === 0;
        return this.clusters;
    }

    ended() {
        return this.done;
    }

    getRes() {
        return this.clusters;
    }
}

try {
    module.exports = ChineseWhispers;
} finally {}
