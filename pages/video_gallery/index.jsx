import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import cls from "./photo_gallery.module.scss";
import Image from "next/image";
import {IconButton} from "@material-ui/core";
import {PlayArrowOutlined} from "@material-ui/icons";

export async function getServerSideProps() {
  const {
    data: {results: links},
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: {results: videos},
  } = await axios.get(`${BASE_URL}/viedo-gallery`);

  return {
    props: {
      links,
      videos
    },
  };
}

export default function VideoGallery({links, videos}) {

  return (
    <Layout links={links}>
      <div style={{padding: "160px 0 0"}}>
        <h1 className='section__heading'>Видеогалерея</h1>
        <div className={`container ${cls.video_wrapper}`}>
          {
            !!videos?.length && videos.map(({video, id}) => (
              <a key={`photo_gellery-${id}`} href={video} rel='noreferrer noopener' target='_blank'>
                <div className={`${cls.video_wrapper__video_wrapper} col-md-3 col-12`}
                >
                  <video>
                    <source src={video}/>
                  </video>
                  <div className={cls.video_wrapper__video_wrapper__play_arrow}>
                    <IconButton>
                      <PlayArrowOutlined style={{fontSize: 40}}/>
                    </IconButton>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
