import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBzUBhx29igBXTJuUa1dg2h_2IwlxEoHZ8";


class App extends Component {
  constructor(props){
      super(props);

      this.state = { videos: [] };

      YTSearch({key:API_KEY, term: 'surfboards'}, (data) => {
         this.setState({videos:data});

         //if we pass 'videos instead of data, we can setState({videos}) as syntactic sugar'
      });
  }

  render(){
    return (
      <div>
        <Searchbar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reactMount'));
