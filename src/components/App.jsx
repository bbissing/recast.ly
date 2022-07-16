import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);

  }

  populateWithYoutubeData(query) {
    console.log(query);
    searchYouTube(query, (data) => {
      console.log(this);
      this.setState({
        currentVideo: data[0],
        videos: data
      });
    });

  }

  componentDidMount() {
    //props.searchYouTube('cat', console.log('success'));
    this.populateWithYoutubeData('Cute cat video');
    //console.log('test');
  }

  onVideoTitleClick(event, click) {
    //console.log(event, click)
    click.preventDefault();
    let current;
    exampleVideoData.forEach(function(item, index) {
      if (item.id.videoId === event) {
        current = index;
      }
    });
    setTimeout(this.setState({
      done: !this.state.done,
      currentVideo: exampleVideoData[current]
    }), 1000);

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search populateWithYoutubeData={this.populateWithYoutubeData.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickChange={this.onVideoTitleClick} test={this.state.done}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
