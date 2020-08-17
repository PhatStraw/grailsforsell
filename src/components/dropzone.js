import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const DropZone = ({ state, setState, alert }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <Dropzone
        onDrop={async (acceptedFiles) => {
          try {
            const data = new FormData()
            data.append('file', acceptedFiles[0])
            data.append('upload_preset', 'grails')

            const res = await fetch(
              'https://api.cloudinary.com/v1_1/dcmncwymq/image/upload',
              {
                method: 'POST',
                body: data,
              }
            )

            const file = await res.json()
            setState({ ...state, image: file.secure_url })
            alert.show('Picture Added!')
            return
          } catch (err) {
            console.log(err)
          }
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p style={{ margin: '1rem' }}>Click or drag to select photo</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  )
}

export default DropZone
