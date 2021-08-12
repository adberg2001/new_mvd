import NewsListSection from "../components/NewsListSection";

export default function News({last_news}){

  return (
    <div>
      <NewsListSection last_news={last_news} title='Новости'/>
    </div>
  )
}
