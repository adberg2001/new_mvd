import cls from "./AnticorruptionalPolitic.module.scss";

export default function AnticorruptionalPoliticComp({anticorruptional_politic}){

  return (
    <section className={`${cls.anticorruptional_politic} container`}>
      <h1 className="section__heading">
        Антикоррупционная политика
      </h1>
      <ul>
        {anticorruptional_politic.map(
          ({id, title, file}) => (
            <li key={`anticorruptional_politic-${id}`}>
              <a target='_blank' rel='noreferrer noopener' className='p-4' href={file}>
                {title}
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  )
}
