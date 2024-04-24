function fib(n) {

    function fibHelper(currentIndex, lastTwoFibs, sequence) {
        if (currentIndex >= n) {
            return sequence;
        }
        const nextFib = lastTwoFibs[0] + lastTwoFibs[1];
    
        return fibHelper(currentIndex + 1, [lastTwoFibs[1], nextFib], [...sequence, nextFib]);
    }

    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    return fibHelper(1, [0, 1], [0, 1]);
}
