import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, error, isLoading } = useGetCryptosQuery();
  const gloabalStats = data?.data?.stats;
  // console.log(data.data.stats);

  if (isLoading) return "Loading....";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cyptocurrencies" value={gloabalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(gloabalStats.totalExchanges)} />
        </Col>{" "}
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(gloabalStats.totalMarketCap)} />
        </Col>{" "}
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(gloabalStats.total24hVolume)} />
        </Col>{" "}
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(gloabalStats.totalMarkets)} />
        </Col>{" "}
      </Row>
    </>
  );
};

export default Homepage;
