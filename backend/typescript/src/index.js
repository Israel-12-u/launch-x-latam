
function timeout(n) {
    return new Promise((res => setTimeout(res, n)))
}

async function addNumber(a, b) {
    await timeout(1000)
    return a + b
}

; (async () => {
    console.log(await addNumber(3, 4))
})()