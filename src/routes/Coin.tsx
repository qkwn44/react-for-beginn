import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loading = styled.span`
  text-align: center;
  font-size: 24px;
  color: white;
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  state: string;
}
interface ITag {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
function Coin() {
  const [loading, setLoading] = useState(true);
  //useParams URL의 파라미터 사용가능
  const { coinId } = useParams<{ coinId: string }>();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log("data", infoData);
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log("data", priceData);

      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        {/* 외부에서 디테일 페이지로 접근할 경우 state를 가져오지 못 함 */}
        <Title> {state || "Loading"}</Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : null}
    </Container>
  );
}

export default Coin;
