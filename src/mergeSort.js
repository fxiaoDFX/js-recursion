const sort = (() => {
    function mergeSort(array) {
        if (array.length < 2) return array

        const midpoint = Math.floor(array.length / 2)

        const left = array.slice(0, midpoint)
        const right = array.slice(midpoint, array.length)

        const lArray = mergeSort(left)
        const rArray = mergeSort(right)
        const length = lArray.length + rArray.length
        console.log(length)

        const sorted = []
        for (let i = 0; sorted.length < length; i++) {
            if (lArray[0] < rArray[0] || rArray[0] === undefined)
                sorted.push(lArray.shift())
            else sorted.push(rArray.shift())
        }

        return sorted
    }

    const a = [3, 1, 2, 3, 4, 1]
    console.log("result", mergeSort(a))
})()

export default sort
