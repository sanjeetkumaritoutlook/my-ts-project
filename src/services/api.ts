export function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`API data example >>>> Fetched data from ${url}`), 1000);
  });
}
