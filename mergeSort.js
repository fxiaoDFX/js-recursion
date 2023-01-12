const merge = (() => {
    function sort(array) {
        if (array.length < 2) return array

        const mid = Math.floor(array.length / 2)

        const left = sort(array.slice(0, mid))
        const right = sort(array.slice(mid, array.length))

        const sorted = []
        while (left.length || right.length) {
            left[0] < right[0] || right[0] === undefined
                ? sorted.push(left.shift())
                : sorted.push(right.shift())
        }

        return sorted
    }

    return { sort }
})()

export default merge
