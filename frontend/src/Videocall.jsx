import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneSlash, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import "./Videocall.css"

const VideoCall = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      sources: []
    });

    // Hide video tracks
    player.ready(() => {
      const tracks = player.remoteTextTracks();
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        if (track.kind === 'video') {
          track.mode = 'disabled';
        }
      }
    });

    return () => {
      if (player) {
        player.dispose(); // Clean up video.js player
      }
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js"></video>
      </div>
      <div class="header">
      <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faPhoneSlash} />
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faMicrophoneSlash} />
        
      </div>
    </div>
  );
};

export default VideoCall;