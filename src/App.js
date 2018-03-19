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
      current:null
    };

    this.createNote = this.createNote.bind(this);
  }

  createNote(note){
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({
      current:note
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
        <List data = {DATA} notes={this.state.notes}/>
        <Note/>
      </div>
    );
  }
}

export default App;
