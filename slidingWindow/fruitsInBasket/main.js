// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

const maxFruits = (fruits) => {
    let windowStart = 0,
        fruitHashMap = {},
        maxLength = -Infinity;

    // open window
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd];

        // add each fruit to hashmap/count occurrences
        if(!(rightFruit in fruitHashMap)) {
            fruitHashMap[rightFruit] = 0;
        }
        fruitHashMap[rightFruit]++;

        // fruitHashMap has more keys than our allowed 2 baskets, begin shrinking window
        while(Object.keys(fruitHashMap).length > 2) {
            const leftFruit = fruits[windowStart];

            // remove beginning of window's fruit. Ensure to delete the key if there's none left
            fruitHashMap[leftFruit]--;
            if(fruitHashMap[leftFruit] === 0) {
                delete fruitHashMap[leftFruit];
            }

            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(maxFruits(['A', 'B', 'C', 'A', 'C'])) // output 3
console.log(maxFruits(['A', 'B', 'C', 'B', 'B', 'C'])) // output 5