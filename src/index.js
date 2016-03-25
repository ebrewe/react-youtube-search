import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBzUBhx29igBXTJuUa1dg2h_2IwlxEoHZ8";


class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term}, (videos) => {
       this.setState({
         videos:videos,
         selectedVideo: videos[0]
       });

    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <div className="col-md-8">
          <Searchbar onSearchTermChange={ videoSearch } />
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <VideoList
          onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reactMount'));
