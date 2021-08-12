import axios from 'axios';
import { BASE_URL } from '../../api/api';
import Layout from "../../src/Layout/Layout";
import News from "../../src/News";


function NewsPage({news}) {
  return (
    <Layout>
      <News
        last_news={news}
      />
    </Layout>
  );
}

// This function gets called at build time
NewsPage.getInitialProps = async ({query: {category}}) => {
  const {data} = await axios.get(`${BASE_URL}/news/${category}`);

  return {
    news: data
  }
}

export default NewsPage;
