import Layout from "../../src/Layout/Layout";
import NewsDetailComponent from "../../src/NewsDetail";
import axios from "axios";
import {BASE_URL} from "../../api/api";

export default function News({news: serverNews}) {
  console.log(serverNews)
  return (
    <Layout>
      <NewsDetailComponent {...serverNews}/>
    </Layout>
  )
}

News.getInitialProps = async ({query: {id}}) => {
  const {data} = await axios.get(`${BASE_URL}/news/${id}`);
  return {
    news: data
  }
}

