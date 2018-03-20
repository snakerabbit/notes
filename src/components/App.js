import React, { Component } from 'react';
import '../App.css';
import ToolBar from './toolbar';
import List from './list';
import Note from './note';
import Modal from'react-modal';

const styles={
  content : {
  top                   : '0',
  left                  : '0',
  right                 : '0',
  bottom                : '0',
  fontFamily            : 'Cormorant Garamond, serif'
}
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[],
      current:null,
      modalOpen: false
    };

    this.createNote = this.createNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    if(this.state.current){
      this.props.deleteNote(this.state.current.objectID);
      if(this.props.notes.length > 0){
        this.setState({
          current:this.props.notes[this.state.current.objectID-1]
        });
      }
    }


  }

  openModal(){
    this.setState({
      modalOpen: true
    });
  }
  closeModal(){
    this.setState({
      modalOpen: false
    });
  }


  componentDidMount(){
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
        <ToolBar createNote={this.createNote} notes={this.props.notes} deleteNote={this.deleteNote} openModal={this.openModal}/>
        <div className='list'>
          <List notes={this.props.notes} setCurrentNote={this.setCurrentNote} fetchNote={this.props.fetchNote}/>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          style={styles}>
          <List notes={this.props.notes} setCurrentNote={this.setCurrentNote} fetchNote={this.props.fetchNote} closeModal={this.closeModal}/>
          </Modal>
        <Note note={this.state.current} updateNote={this.props.updateNote}/>
      </div>
    );
  }
}

export default App;
