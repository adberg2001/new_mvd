import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import cls from "./photo_gallery.module.scss";

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: photos },
  } = await axios.get(`${BASE_URL}/photo-gallery`);

  return {
    props: {
      links,
      photos
    },
  };
}

export default function PhotoGallery({links, photos}){
  console.log(photos)
  return (
    <Layout links={links}>

      <div className={`container d-flex ${cls.photos_wrapper}`}>
        {/*{*/}
        {/*  photos.map(())*/}
        {/*}*/}
      </div>

    </Layout>
  )
}
