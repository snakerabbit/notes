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
      text:'',
      objectID:this.props.notes.length
    };
    this.props.createNote(newNote);
  }

  handleDelete(){
    this.props.deleteNote();
  }

  render(){
    return(
      <div className='toolbar'>
        <h1>Notes</h1>
        <div onClick ={this.handleCreate} className='buttons'>
          <img src='http://clipart-library.com/images/8T65jX9Gc.png' alt='New'/>
        </div>
        <div onClick={this.handleDelete} className='buttons'>
          <img src="http://www.kronostek.eu/tutorial/images/ico_elimina.png" alt="Delete"/>
        </div>
        <div onClick={this.handleDelete} className='buttons' id='hidden'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KFQwZY63y19uHVVgk86v3-W2Teaqkj-DZ6EWV5o7bdnAqymDcg" alt="List"/>
        </div>
      </div>
    );
  }
}

export default ToolBar;
