import React from 'react';
import ListItem from './list_item';
class List extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

  }


  render(){
    return(
      <div className='list'>
        {this.props.notes.map((note, idx) =>{
          return(
            <ListItem key={idx} note={note}/>
          );
        })}
      </div>
    );
  }
}

export default List;
