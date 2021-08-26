import React, { ReactElement, useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player';
import { getVideoMovieApi } from '../../api/movies';

interface Props {
  openModal: any;
  setOpenModal: any;
  videoId: number;
}

function Modalvideo({ openModal, setOpenModal, videoId }: Props): ReactElement {
  // const [openModal, setOpenModal] = useState(false);
  // // const urlVideo =`https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0`
  // const urlVideo =`https://www.youtube.com/watch?v=${videoId}`
  // console.log("url video", urlVideo);
  const [video, setVideo] = useState(null);
  const getVideoMovie = async (idMovie: number) => {
    const response = await getVideoMovieApi(idMovie);
    console.log('el resp', response);
    let idVideo: null = null;
    response.results.forEach((video: any, index: number) => {
      if (video.site === 'YouTube' && !idVideo) {
        idVideo = video.key;
      }
    });
    setVideo(idVideo);
  };

  useEffect(() => {
    getVideoMovie(videoId);
  }, [videoId]);

  const onCloseModal = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      styles={{
        modal: {
          maxWidth: 'unset',
          width: '100%',
          padding: 'unset',
          height: '100%',
          alignItems: 'center',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
        closeButton: {
          background: 'yellow',
        },
      }}
      center>
      <ReactPlayer
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${video}`}
      />
    </Modal>
  );
}

export default Modalvideo;
