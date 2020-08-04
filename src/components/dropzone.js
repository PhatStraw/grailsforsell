import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const DropZone = ({state, setState, alert}) => {
  return (
    <div style={{border: '1px solid black'}}>
      <Dropzone onDrop={(acceptedFiles) => {
        alert.show('Picture Added!')
        return setState({...state, pic: acceptedFiles})
        }}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p style={{margin: '1rem'}}>Click or drag to select photo</p>
          </div>
        </section>
      )}
    </Dropzone>
    </div>
    
  )
}

export default DropZone
