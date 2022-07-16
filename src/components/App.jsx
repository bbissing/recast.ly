import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      currentVideo: exampleVideoData[0]
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);

  }
  populateWithYoutubeData(query) {
    this.props.searchYouTube(query, (data) => {
      this.setState({
        currentVideo: data[0],
        videos: data
      });
    });
  }

  componentDidMount() {
    //props.searchYouTube('cat', console.log('success'));
    this.populateWithYoutubeData('cat');
    //console.log('test');
    setState()
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
      done:!this.state.done,
      currentVideo: exampleVideoData[current]
    }), 1000);

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3" >
            <div><h5><em>test</em> test</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} state={this.state} onClickChange={this.onVideoTitleClick} test={this.state.done}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
