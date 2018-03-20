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
    return(
      <div onClick={this.handleClick} className='buttons'>
        <p>{this.props.note.title}</p>
      </div>
    );
  }
}

export default ListItem;
