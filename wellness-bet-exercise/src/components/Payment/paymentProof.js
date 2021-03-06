import Dropzone from "react-dropzone";
import axios from "axios";
import React from "react";
import './payment.css';
import * as ROUTES from '../../constants/routes';
import Popup from "reactjs-popup";

const Group = props =>{
 return <h1>{props.group}</h1>
}
class Payment extends React.Component {
  render() {
    console.log(Group)
    console.log('~~~~~~~~~~~~', this.props)
    return (
      <div>
        <Dropzone onDrop={this.handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className='payment-drag-n-drop'{...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "jd4lvk5f"); 
      formData.append("api_key", "629151892737318"); // Cloudinary Key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (Cloudinary URL)
      return axios
        .post("https://api.cloudinary.com/v1_1/wellness-bet/image/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url;
          const user_id= this.props.payment.userData.member.user_id;
          const group_id = this.props.payment.userData.member.group_id;
          
          
          console.log(data, fileURL);
          console.log('Payment Proof Props', this.props)
          console.log('user_id', this.props.payment.userData.member.user_id)
          
          console.log('group_id', this.props.payment.userData.member.group_id)
          //:user_id/:group_id` REPLACE numbers at end of URL
            return axios.put(`${ROUTES.URL}/api/participants/buyinproof/${user_id}/${group_id}`, {
            buyin_proof: fileURL,
    
          })
          
        })
        
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      //Post URLto DB
      console.log('Your Upload Was Successful!')
    });
  };
}

export default Payment;
