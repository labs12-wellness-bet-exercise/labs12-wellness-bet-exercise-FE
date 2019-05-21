import Dropzone from "react-dropzone";
import axios from "axios";
import React from "react";
import './payment.css';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <Dropzone onDrop={this.handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className='payment-drag-n-drop'{...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
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
          const fileURL = data.secure_url; // Store this for future use
          console.log(data, fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      console.log('Your Upload Was Successful!')
    });
  };
}

export default Payment;
