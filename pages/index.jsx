import Home from "../src/Home";
import Layout from "../src/Layout/Layout";
import axios from "axios";
import { BASE_URL } from "../api/api";

//data: {on_main_slider}
function HomePage({ on_main_slider, services, initialRegion }) {
  return (
    <Layout>
      <Home
        on_main_slider={on_main_slider}
        services={services}
        initialRegion={initialRegion}
      />
    </Layout>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  const { data: on_main_slider } = await axios.get(
    `${BASE_URL}/news/?on_main_slider=true`
  );

  const {
    data: { results: services },
  } = await axios.get(`${BASE_URL}/services`);

  const { data: initialRegion } = await axios.get(`${BASE_URL}/regions/1/`);

  console.log("server log: ", initialRegion);

  return {
    props: {
      on_main_slider,
      services,
      initialRegion,
    },
  };
}

export default HomePage;
