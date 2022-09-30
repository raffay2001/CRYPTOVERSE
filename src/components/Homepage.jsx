import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;

const Homepage = () => {
  const { data, error, isLoading } = useGetCryptosQuery(10);
  const gloabalStats = data?.data?.stats;
  // console.log(data.data.stats);

  if (isLoading) return <Loader />;

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
          <Statistic
            title="Total Exchanges"
            value={millify(gloabalStats.totalExchanges)}
          />
        </Col>{" "}
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(gloabalStats.totalMarketCap)}
          />
        </Col>{" "}
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(gloabalStats.total24hVolume)}
          />
        </Col>{" "}
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(gloabalStats.totalMarkets)}
          />
        </Col>{" "}
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world.
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News.
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Homepage;
