import React from 'react';

class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.note.title,
      text:this.props.note.text,
      changed: false
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      text:e.target.value,
      changed: true
    });

    setTimeout(this.handleSave, 1000);
  }

  handleSave(){
    let newNote={
      title:this.state.title,
      text: this.state.text
    };


    console.log(newNote);

    this.props.updateNote(newNote);
  }


  componentWillReceiveProps(newProps){
    if(this.props.note !== newProps.note){
      this.setState({
        title:newProps.note.title,
        text:newProps.note.text
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
          <input type='submit' value='save' onClick={this.handleSave}/>
        </form>
      </div>
    );
  }
}

export default Note;
