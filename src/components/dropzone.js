import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const DropZone = ({state, setState}) => {
  return (
    <div style={{border: '1px solid black'}}>
      <Dropzone onDrop={(acceptedFiles) => setState({...state, pic: acceptedFiles})}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Click or drag to select photo</p>
          </div>
        </section>
      )}
    </Dropzone>
    </div>
    
  )
}

export default DropZone
