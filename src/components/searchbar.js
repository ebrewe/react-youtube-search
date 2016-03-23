import React from 'react';

class Searchbar extends React.Component {
   constructor(props){
      super(props);

      this.state = {term:''};
   }

   render() {
     return (
       <div>
         <input
            value={this.state.term}
            placeholder="Search Videos"
            onChange={(e)=>{this.setState({term:e.target.value})}}
         />
       </div>
     );
   }
}

export default Searchbar;
