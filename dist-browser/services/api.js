export function fetchData(url) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`API data example >>>> Fetched data from ${url}`), 1000);
    });
}
