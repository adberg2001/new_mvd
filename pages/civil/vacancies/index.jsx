import axios from "axios";
import Layout from "../../../src/Layout/Layout";
import { BASE_URL } from "../../../api/api";
import VacanciesComponent from "../../../src/Vacancies";

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: vacancies },
  } = await axios.get(`${BASE_URL}/vacancies`);

  return {
    props: {
      links,
      vacancies,
    },
  };
}

export default function Vacancies({ links, vacancies }) {
  return (
    <Layout links={links}>
      <VacanciesComponent vacancies={vacancies} />
    </Layout>
  );
}
