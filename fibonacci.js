const fibonacci = (() => {
    function fibs(num) {
        if (num < 1) return []
        if (num === 1) return [0]
        const fibArray = [0, 1]

        for (let i = 2; i < num; i++) {
            fibArray.push(fibArray[i - 2] + fibArray[i - 1])
        }
        return fibArray
    }

    function fibsRec(num) {
        if (num === 0) return []
        if (num === 1) return [0]
        if (num === 2) return [0, 1]
        return fibsRec(num - 1).concat([
            fibsRec(num - 1)[num - 3] + fibsRec(num - 1)[num - 2],
        ])
    }

    return { fibs, fibsRec }
})()

export default fibonacci
