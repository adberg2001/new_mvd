import axios from 'axios';
import { BASE_URL } from '../../api/api';
import Layout from "../../src/Layout/Layout";
import News from "../../src/News";


function NewsPage({last_news}) {
  return (
    <Layout>
      <div style={{padding: "100px 0 0"}}>
        <News
          last_news={last_news}
        />
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getServerSideProps({query:{category}}) {
  const { data: last_news } = await axios.get(`${BASE_URL}/news/?category=${category}`);

  return {
    props: {
      last_news,
    },
  };
}

export default NewsPage;
