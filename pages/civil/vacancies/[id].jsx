import React from "react";
import Layout from "../../../src/Layout/Layout";
import axios from "axios";
import { BASE_URL } from "../../../api/api";

export async function getServerSideProps({ query: { id } }) {
  const { data } = await axios.get(`${BASE_URL}/vacancies/${id}`);

  return {
    props: {
      vacancy: data,
    },
  };
}

export default function NormativeBaseDetail({ vacancy }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h1>{vacancy.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: vacancy.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
