import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    alert(this.props.note.title);
  }

  render(){
    return(
      <div onClick={this.handleClick} className='buttons'>
        <p>{this.props.note.title}</p>
      </div>
    );
  }
}

export default ListItem;
