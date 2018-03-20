import React, { Component } from 'react';
import './App.css';
import ToolBar from './toolbar';
import List from './list';
import Note from './note';
import DATA from './data';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[],
      current:JSON.parse(localStorage.getItem('notes'))[0]
    };

    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  createNote(note){
    this.props.createNote(note);
    this.setState({
      current:note
    });
  }

  updateNote(note){
    // let notes = JSON.parse(localStorage.getItem('notes'));
    // let newNotes = notes.filter(el => !this.state.current);
    // newNotes.push(note);
    // localStorage.setItem('notes', JSON.stringify(newNotes));
    // this.setState({
    //   current:note
    // });

  }

  setCurrentNote(note){
    this.setState({
      current: note
    });
  }

  deleteNote(){
    this.props.deleteNote(this.state.current.title);

  }

  componentDidMount(){
    // localStorage.removeItem('notes');
    this.props.fetchNotes();
    // let notes = [
    //   {
    //     title:'Note 1',
    //     text:'note note note '
    //   },
    //   {
    //     title:'Note 2',
    //     text:'note note note'
    //   }
    // ];
    // localStorage.setItem('notes', JSON.stringify(notes));
  }
  render() {
    return (
      <div className="App">
        <ToolBar createNote={this.createNote} notes={this.props.notes} deleteNote={this.deleteNote}/>
        <List data = {DATA} notes={this.props.notes} setCurrentNote={this.setCurrentNote}/>
        <Note note={this.state.current} updateNote={this.props.updateNote}/>
      </div>
    );
  }
}

export default App;
