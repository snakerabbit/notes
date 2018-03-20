import React, { Component } from 'react';
import '../App.css';
import ToolBar from './toolbar';
import List from './list';
import Note from './note';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[],
      current:JSON.parse(localStorage.getItem('notes'))[0]
    };

    this.createNote = this.createNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  createNote(note){
    this.props.createNote(note);
    this.setState({
      current:note
    });
  }


  setCurrentNote(note){
    this.setState({
      current: note
    });
  }

  deleteNote(){
    this.props.deleteNote(this.state.current.objectID);
    if(this.props.notes.length > 0){
      this.setState({
        current:this.props.notes[this.state.current.objectID-1]
      });
    }

  }

  componentDidMount(){
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
        <ToolBar createNote={this.createNote} notes={this.props.notes} deleteNote={this.deleteNote}/>
        <List notes={this.props.notes} setCurrentNote={this.setCurrentNote} fetchNote={this.props.fetchNote}/>
        <Note note={this.state.current} updateNote={this.props.updateNote}/>
      </div>
    );
  }
}

export default App;
