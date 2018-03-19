import React from 'react';

class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      text:''
    };

  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      text:e.target.value,
      title:e.target.value.split('\n')[0] || ''
    });
  }

  render(){
    return(
      <div className='note'>
        <form>
          <textarea placeholder='type here...' id='input' onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Note;
