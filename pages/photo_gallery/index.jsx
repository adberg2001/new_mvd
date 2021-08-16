import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import cls from "./photo_gallery.module.scss";
import Image from "next/image";

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

  return (
    <Layout links={links}>
      <div style={{padding: "160px 0 0"}}>
        <h1 className='section__heading'>Фотогалерея</h1>
        <div className={`container ${cls.photos_wrapper}`}>
          {
            !!photos?.length && photos.map(({create, image}, i) => (
              <a key={`photo_gellery-${i}`} href={image} rel='noreferrer noopener' target='_blank'>
                <div className={`${cls.photos_wrapper__image_wrapper} col-md-3 col-12`}
                >
                  <Image src={image} layout="fill" className={cls.image}/>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
