import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  //  componentDidUpdate() {
  //   console.log(props)
  //  }


  <div className="video-list">
      <div><h5><em>{props.videos.map(video =>
        <div key={video.id.videoId}>
          <VideoListEntry video={video} />
        </div>
        )}</em>view goes here</h5></div>
  </div>

// var VideoList = (props) => (
//   <ul>
//     {props.videos.map(video =>
//       <VidoListEntry video={video} />
//     )}
//   </ul>
// );



  // <div className="video-list">
  //   <div><h5><em><VideoListEntry video={props.videos[0]}/></em> view goes here</h5></div>
  //   <div><h5><em><VideoListEntry video={props.videos[1]}/></em> view goes here</h5></div>
  //   <div><h5><em><VideoListEntry video={props.videos[2]}/></em> view goes here</h5></div>
  //   <div><h5><em><VideoListEntry video={props.videos[3]}/></em> view goes here</h5></div>
  //   <div><h5><em><VideoListEntry video={props.videos[4]}/></em> view goes here</h5></div>
  // </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
