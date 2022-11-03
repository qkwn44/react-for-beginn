// fetcher 함수는 꼭 fetch promise를 return 해야함
// json data의 Promise를 return
export async function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
}
