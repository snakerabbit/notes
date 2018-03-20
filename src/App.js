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
      notes:JSON.parse(localStorage.getItem('notes')),
      current:JSON.parse(localStorage.getItem('notes'))[0]
    };

    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
  }

  createNote(note){
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({
      current:note
    });
  }

  updateNote(note){
    let notes = JSON.parse(localStorage.getItem('notes'));
    let newNotes = notes.filter(el => !this.state.current);
    newNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    this.setState({
      current:note
    });

  }

  setCurrentNote(note){
    this.setState({
      current: note
    });
  }

  componentDidMount(){
    let notes=[
      {
        title:'Note1',
        text:'this is note 1'
      },
      {
        title:'Note2',
        text:'this is note 2'
      }
    ];
    localStorage.setItem('notes', JSON.stringify(notes));

  }
  render() {
    console.log(this.state.current);
    return (
      <div className="App">
        <ToolBar createNote={this.createNote} notes={this.state.notes}/>
        <List data = {DATA} notes={this.state.notes} setCurrentNote={this.setCurrentNote}/>
        <Note note={this.state.current} updateNote={this.updateNote}/>
      </div>
    );
  }
}

export default App;
