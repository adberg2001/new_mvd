import Home from '../src/Home';
import Layout from '../src/Layout/Layout';
import axios from "axios";
import {BASE_URL} from "../api/api";

//data: {on_main_slider}
function HomePage({on_main_slider}) {

  return (
    <Layout>
      <Home on_main_slider={on_main_slider}/>
    </Layout>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const { data: on_main_slider } = await axios.get(`${BASE_URL}/?on_main_slider=true`);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      on_main_slider,
    }
  }
}

export default HomePage;
