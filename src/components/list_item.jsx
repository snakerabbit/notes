import React from 'react';


class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    return this.props.handleClick(this.props.note);
  }

  render(){
    if(this.props.note){
      return(
        <div onClick={this.handleClick} className='buttons'>
          <p>{this.props.note.title}</p>
        </div>
      );
    } else{
      return(
        <div onClick={this.handleClick} className='buttons'>
        </div>
      );
    }

  }
}

export default ListItem;
