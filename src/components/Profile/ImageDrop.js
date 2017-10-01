import React from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import InterestsForm from './InterestsForm'
import UserAdapter from '../../adapters/UserAdapter'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../../actions/profile'

const CLOUDINARY_UPLOAD_PRESET = 'zqvt4w5a';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/djlznf9dr/image/upload'

class ImageDrop extends React.Component {
  
  getFiles = (file) => {
    this.props.setProfileImage(file);
  }

  handleDrop = (files) => {
    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); 
      return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url
        UserAdapter.saveUserImage(fileURL).then(data => this.props.updateUserData(data))
      })
    });
  }

  render() {
    return (
      <div className="dropzone">
        <Dropzone 
          onDrop={this.handleDrop} 
          multiple={false}
          accept="image/*" 
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}

export default connect(null,mapDispatchToProps)(ImageDrop)