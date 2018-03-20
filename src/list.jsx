import React from 'react';
import ListItem from './list_item';
class List extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(note){
    return this.props.setCurrentNote(note);
  }


  render(){
    if(this.props.notes){
      return(
        <div className='list'>
          {this.props.notes.map((note, idx) =>{
            return(
              <ListItem key={idx} note={note} handleClick={this.handleClick}/>
            );
          })}
        </div>
      );
    } else {
      return(
        <div className='list'>
          <p>No Notes</p>
        </div>
      );
    }

  }
}

export default List;
