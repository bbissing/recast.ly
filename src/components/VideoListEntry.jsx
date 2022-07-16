// var VideoListEntry = (props) => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title" onClick={props.onClickChange}>{props.video.snippet.title}</div>
//       <div className="video-list-entry-detail">{props.video.snippet.description}</div>
//     </div>
//   </div>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: PropTypes.object.isRequired
// };

var VideoListEntry = (props) => {
  // function handleClick(e) {
  //   e.preventDefault();
  //   // console.log('helo');
  //   // console.log(props.video.videoId, e, props.video.id.videoId)
  //   props.onClickChange(props.video.id.videoId);

  // }

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={click => props.onClickChange(props.video.id.videoId, click)}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;




// var VideoListEntry = (props) => {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log(e);
//     props.state.done = true;
//   }

//   return (
//     <div className="video-list-entry media">
//       <div className="media-left media-middle">
//         <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
//       </div>
//       <div className="media-body">
//         <div className="video-list-entry-title" onClick={handleClick}>{props.video.snippet.title}</div>
//         <div className="video-list-entry-detail">{props.video.snippet.description}</div>
//       </div>
//     </div>
//   )
// };