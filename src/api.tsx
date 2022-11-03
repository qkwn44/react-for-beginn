const BASE_URL = `https://api.coinpaprika.com/v1/coins`;
// fetcher 함수는 꼭 fetch promise를 return 해야함
// json data의 Promise를 return
export async function fetchCoins() {
  return fetch(`${BASE_URL}`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}
//fetchCoinInfo의 argu로 coinId라는 이름의 string prop로 전달
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}
