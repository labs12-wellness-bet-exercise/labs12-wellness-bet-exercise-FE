import React from 'react';
import axios from 'axios';
import { json } from 'body-parser';


class GroupPhoto extends React.Component {
  state = {
    group_photo:"https://kurbo.com/wp-content/uploads/2017/01/pilates-exercise.jpg"
  }
  
  submitGroup = e => {
    e.preventDefault()
    let group = {
      group_name: this.props.group_name,
      buy_in_amount: Number(this.props.buy_in_amount),
      start_date: this.props.start_date,
      end_date: this.props.end_date,
      group_message: this.props.group_message,
      group_photo: this.state.group_photo,
      admin_id: 1
    }
    console.log(group)
    axios
      .post('https://wellness-bet.herokuapp.com/api/groups', group)
      .then(res => {
        res
          .status(200)
          .json({
            message: "Group successfully created",
            res
          })
         
      })
      .catch(error => {
        console.log(error)
      })
  }

  

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })}

  render() {
    return(
    <div className='imageUploader'>
        <h3>Group Message</h3>
        <p>{this.props.group_message}</p>
        <img src={this.state.group_image} alt='avatar' />
        <label>Image link for your group photo</label>   
        <input className='linkSpace'
          name='group_photo'
          onChange={this.handleChange} 
          value={this.state.group_photo}
          type='link' 
          placeholder='image link'/>
              <button onClick={this.props.messageAddedToggle}>
                Back
              </button>
              {this.state.group_photo.length > 0 ? 
              <button 
                onClick={this.submitGroup}>
                Submit
              </button>:
              <p className='fadedNext'>Next</p>}
    </div>

    )
  }
}
export default GroupPhoto