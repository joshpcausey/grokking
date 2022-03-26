// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
//Write a function to return the maximum number of fruits in both baskets.

const maxNumberOfFruits = (fruits) => {
    let windowStart = 0,
        hashMap = {},
        maxLength = -Infinity;

    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd];
        if(!(rightFruit in hashMap)) {
            hashMap[rightFruit] = 0;
        }
        hashMap[rightFruit]++;

        while(Object.keys(hashMap).length > 2) {
            const leftFruit = fruits[windowStart];
            hashMap[leftFruit]--;
            if(hashMap[leftFruit] === 0) {
                delete hashMap[leftFruit];
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(maxNumberOfFruits(['A', 'B', 'C', 'A', 'C'])) // output 3
console.log(maxNumberOfFruits(['A', 'B', 'C', 'B', 'B', 'C'])) // output 5