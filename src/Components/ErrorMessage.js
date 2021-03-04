import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import '../page/ChangePassword.css';

export default function ErrorMessage(props) {
  return (
    <div className="errorMessage">
      <ErrorOutlineIcon fontSize="small" style={{ marginRight: 5 }} />
      <p>{props.text}</p>
    </div>
  )
}
