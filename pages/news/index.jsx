import axios from 'axios';
import { BASE_URL } from '../../api/api';
import Layout from "../../src/Layout/Layout";
import News from "../../src/News";


function NewsPage({last_news}) {
  return (
    <Layout>
      <News
        last_news={last_news}
      />
    </Layout>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  const { data: last_news } = await axios.get(`${BASE_URL}/news`);

  return {
    props: {
      last_news,
    },
  };
}

export default NewsPage;
