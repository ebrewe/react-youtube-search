import React from 'react';

class Searchbar extends React.Component {
   constructor(props){
      super(props);

      this.state = {term:''};
   }

   render() {
     return (
       <div className="searchbar">
         <input
            value={this.state.term}
            placeholder="Search Videos"
            onChange={(e)=>{this.onInputChange(e.target.value)}}
         />
       </div>
     );
   }

   onInputChange(term){
     this.setState({term});
     this.props.onSearchTermChange(term);
   }
}

export default Searchbar;
