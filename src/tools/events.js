export function sleep(s) {
    // Wait for s seconds
    return new Promise((resolve) => setTimeout(resolve, s*1000))
}