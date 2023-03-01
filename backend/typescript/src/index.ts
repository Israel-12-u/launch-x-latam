
function timeout(n: number) {
    return new Promise((res => setTimeout(res, n)))
}

export async function addNumber(a: number, b: number) {
    await timeout(1000)
    return a + b
}

; (async () => {
    console.log(await addNumber(3, 4))
})()