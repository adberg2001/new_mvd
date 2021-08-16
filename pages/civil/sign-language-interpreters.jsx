import React from 'react';
import Layout from '../../src/Layout/Layout';
import LangInterpreters from '../../src/staticComponents/LangInterpreters';

export default function SignLanguageInterpreters() {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h1>Список сурдопереводчиков с юридическим уклоном</h1>
          <h5>
            Список сертифицированных сурдопереводчиков, которые непосредственно
            помогут лицам с ограниченными возможностями здоровья при получении
            юридических услуг (сопровождение в судебных процессах)
          </h5>
        </div>

        <LangInterpreters />
      </section>
    </Layout>
  );
}
