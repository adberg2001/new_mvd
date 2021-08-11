import Home from "../src/Home";
import Layout from "../src/Layout/Layout";
import axios from "axios";
import { BASE_URL } from "../api/api";

//data: {on_main_slider}
<<<<<<< HEAD
function HomePage({ on_main_slider, services, initialRegion }) {
  return (
    <Layout>
      <Home
        on_main_slider={on_main_slider}
        services={services}
        initialRegion={initialRegion}
      />
=======
function HomePage({on_main_slider, last_news}) {

  return (
    <Layout>
      <Home on_main_slider={on_main_slider} last_news={last_news}/>
>>>>>>> 54a8f69c26406c525ba7060e3e7e5b04e6453b65
    </Layout>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
<<<<<<< HEAD
  const { data: on_main_slider } = await axios.get(
    `${BASE_URL}/news/?on_main_slider=true`
  );

  const {
    data: { results: services },
  } = await axios.get(`${BASE_URL}/services`);

  const { data: initialRegion } = await axios.get(`${BASE_URL}/regions/1/`);

  console.log("server log: ", initialRegion);
=======
  const { data: on_main_slider } = await axios.get(`${BASE_URL}/news/?on_main_slider=true`);
  const { data: last_news } = await axios.get(`${BASE_URL}/news`);
>>>>>>> 54a8f69c26406c525ba7060e3e7e5b04e6453b65

  return {
    props: {
      on_main_slider,
<<<<<<< HEAD
      services,
      initialRegion,
    },
  };
=======
      last_news,
    }
  }
>>>>>>> 54a8f69c26406c525ba7060e3e7e5b04e6453b65
}

export default HomePage;
