import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const demoImg =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const {
    data: cryptoNews,
    error,
    isLoading,
  } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImg}
                  alt="news"
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}....`
                  : news.description}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
