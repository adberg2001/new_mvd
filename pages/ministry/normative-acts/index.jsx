import Layout from '../../../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';
import NormativeList from '../../../src/components/Normative/NormativeList';

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: normativeActs },
  } = await axios.get(`${BASE_URL}/normative_bases`);

  return {
    props: {
      links,
      normativeActs,
    },
  };
}

export default function NormativeActs({ links, normativeActs }) {
  return (
    <Layout links={links}>
      <section className={'container'}>
        <div>
          <h1 className={'section__heading'}>Проекты нормативных актов</h1>
          <NormativeList
            linkBase={'/ministry/normative-acts'}
            dataList={normativeActs}
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
