import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
   //putting {video} vs props is ES6 sugar for using (props)
   //with const video = props.video on this line.
   //const onVideoSelect = props.videoSelect ... etc

   const imageUrl = video.snippet.thumbnails.default.url;

   return (
     <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left col-md-5">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body col-md-7">
            <div className="media-heading">
              <h2>{video.snippet.title}</h2>
            </div>
          </div>
        </div>
      </li>
   );
}

export default VideoListItem;
