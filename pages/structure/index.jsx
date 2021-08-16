import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import StructureComponent from "../../src/Strucuture";

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: structure },
  } = await axios.get(`${BASE_URL}/structure`);

  return {
    props: {
      links,
      structure
    },
  };
}

export default function Structure({links, structure}){

  return (
    <Layout links={links}>
      <StructureComponent structure={structure}/>
    </Layout>
  )
}
