import React from 'react';
import ListItem from './list_item';

class List extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(note){
    if(this.props.closeModal){
      this.props.closeModal();
    }
    if(note){
      return this.props.setCurrentNote(note);
    }

  }

  render(){
    if(this.props.notes){
      if(this.props.notes.length === 0){
        return(
          <div onClick={this.handleClick}>
            <p style={{opacity:'0.3'}}>No Notes</p>
          </div>
        );
      } else {
        return(
          <div>
            {this.props.notes.map((note, idx) =>{
              return(
                <ListItem key={idx} note={note} handleClick={this.handleClick}/>
              );
            })}
          </div>
        );
      }
    } else {
      return(
        <div className='list'>
        </div>
      );
    }

  }
}

export default List;
