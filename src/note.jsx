import React from 'react';

class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.note.title,
      text:this.props.note.text
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      text:e.target.value,
      title:e.target.value.split('\n')[0] || ''
    });

  }

  handleSave(e){
    e.preventDefault();
    let newNote = {
      title: this.state.title,
      text: this.state.text
    };

    this.props.updateNote(newNote);
  }

  render(){
    return(
      <div className='note'>
        <form>
          <textarea placeholder='type here...' defaultValue={this.props.note.text} id='input' onChange={this.handleChange}/>
          <input type='submit' value='save' onClick={this.handleSave}/>
        </form>
      </div>
    );
  }
}

export default Note;
