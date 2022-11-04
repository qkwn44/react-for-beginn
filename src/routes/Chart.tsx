import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  // const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
  // return  fetchCoinHistory(coinId)
  // );
  const { data, isLoading } = useQuery(["ohlcv", coinId], () => {
    return fetchCoinHistory(coinId);
  });

  console.log("data!!!!!!!!!!!!!!!", data);
  return <h1>Chart: {coinId}</h1>;
}

export default Chart;
