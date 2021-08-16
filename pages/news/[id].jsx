import Layout from '../../src/Layout/Layout';
import NewsDetailComponent from '../../src/NewsDetail';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export default function News({ news: serverNews, links }) {
  console.log(serverNews);
  return (
    <Layout links={links}>
      <NewsDetailComponent {...serverNews} />
    </Layout>
  );
}

News.getInitialProps = async ({ query: { id } }) => {
  const { data } = await axios.get(`${BASE_URL}/news/${id}`);

  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  return {
    news: data,
    links,
  };
};
