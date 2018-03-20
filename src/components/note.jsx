import React from 'react';

class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.note.title,
      text:this.props.note.text,
      objectID: this.props.note.objectID
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      text:e.target.value
    });

    setTimeout(this.handleSave, 3000);
  }



  handleSave(){
    let newNote={
      title:this.state.title,
      text: this.state.text,
      objectID: this.state.objectID
    };
    if(this.state.title === "New Note" && this.state.text){
      newNote.title = newNote.text.split('\n')[0];
    }
    this.props.updateNote(newNote);
  }


  componentWillReceiveProps(newProps){
    if(this.props.note !== newProps.note){

      this.setState({
        title:newProps.note.title,
        text:newProps.note.text,
        objectID: newProps.note.objectID
      });
    }
  }

  render(){
    return(
      <div className='note'>
        <form>
          <textarea placeholder='type here...'
            value={this.state.text} id='input'
            onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Note;
