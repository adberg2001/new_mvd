import React from 'react';
import Layout from '../../src/Layout/Layout';

export default function PeaceAct() {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h3>МИРОТВОРЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ</h3>

          <p>
            <a
              className="mb-4"
              href="https://mvd.gov.kg/doc/result_test_30_11.pdf"
              target="_blank"
              rel="noreferrer"
            >
              СПИСОК по алфавитному порядку (А-Я) кандидатов, которые прошли
              тестирование в формате CLA (комбинированная языковая оценка на
              английском языке) по стандарту ООН в городе Бишкек и в
              миротворческих миссиях ООН.
            </a>
          </p>

          <p>
            <a
              className="mb-4"
              href="http://mvd.gov.kg/child/analys.html"
              target="_blank"
              rel="noreferrer"
            >
              Количественный анализ номинированных кандидатов в миротворческие
              миссии для прохождения интервью и соответствующие экзамены в
              формате CLA
            </a>
          </p>

          <p>
            <a
              href="http://mvd.gov.kg/child/candidates.html"
              target="_blank"
              rel="noreferrer"
            >
              Количественный анализ номинированных кандидатов в миротворческие
              миссии для прохождения интервью и соответствующие экзамены в
              формате CLA по стандарту ООН по состоянию на 03.12.2020
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
