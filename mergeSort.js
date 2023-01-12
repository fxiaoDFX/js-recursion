export default function mergeSort(array) {
    if (array.length < 2) return array

    const mid = Math.floor(array.length / 2)

    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid, array.length))

    const sorted = []
    while (left.length || right.length) {
        left[0] < right[0] || right[0] === undefined
            ? sorted.push(left.shift())
            : sorted.push(right.shift())
    }

    return sorted
}
