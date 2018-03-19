import React from 'react';

class ToolBar extends React.Component {
  constructor(props){
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(){
    let newNote={
      title:'New Note',
      text:''
    };
    this.props.createNote(newNote);
  }

  handleDelete(){
    alert('delete');
  }

  render(){
    return(
      <div className='toolbar'>
        <h1>Notes</h1>
        <div onClick ={this.handleCreate} className='buttons'>
          <img src='http://clipart-library.com/images/8T65jX9Gc.png'/>
        </div>
        <div onClick={this.handleDelete} className='buttons'>
          <img src="http://www.kronostek.eu/tutorial/images/ico_elimina.png"/>
        </div>
      </div>
    );
  }
}

export default ToolBar;
