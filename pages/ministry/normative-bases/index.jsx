import Layout from '../../../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';
import NormativeList from '../../../src/components/Normative/NormativeList';

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: normativeBases },
  } = await axios.get(`${BASE_URL}/normative_base_projects`);

  return {
    props: {
      links,
      normativeBases,
    },
  };
}

export default function NormativeBases({ links, normativeBases }) {
  return (
    <Layout links={links}>
      <section className={'container'}>
        <div>
          <h1 className={'section__heading'}>Нормативная база</h1>
          <h5 className={'text-center'}>
            ЦЕНТРАЛИЗОВАННЫЙ БАНК ДАННЫХ <br />
            ПРАВОВОЙ ИНФОРМАЦИИ <br />
            КЫРГЫЗСКОЙ РЕСПУБЛИКИ
          </h5>

          <NormativeList
            linkBase={'/ministry/normative-bases'}
            dataList={normativeBases}
          />
        </div>

        {/* <Pagination
        color="primary"
        size="large"
        page={1}
        count={3}
        style={{margin: '50px auto 0'}}
        className={'d-flex justify-content-center'}
      /> */}
      </section>
    </Layout>
  );
}
