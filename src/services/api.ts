export function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Fetched data from ${url}`), 1000);
  });
}
