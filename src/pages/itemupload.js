import React, { useState } from 'react'
import DropZone from '../components/dropzone'

import '../css/bare.css'

const ItemUpload = () => {
  const [state, setState] = useState({
    pic: {},
    name: '',
    price: '00.00',
    size: '',
    description: '',
    category: '',
    condition: ''
  })

  const onChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className="Wrap">
      <form
        onSubmit={onSubmit}
        style={{
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          margin: '1rem',
        }}
      >
        <div className="form">
          <label>Name</label>
          <input placeholder="Name" name='name' value={state.name} onChange={onChange} />
        </div>

        <div className="form">
          <label>Size</label>
          <input placeholder="Size" name='size' value={state.size} onChange={onChange} />
        </div>
        <div className="form">
          <label>Price</label>
          <input placeholder="$100.00" name='price' value={state.price} onChange={onChange} />
        </div>

        <div className="form">
          <label>Description</label>
          <textarea placeholder="Description" name='description' value={state.description} onChange={onChange} />
        </div>

        <div className="form">
          <label>Category</label>
          <select placeholder="Category" name='category' value={state.category} onChange={onChange}>
            <option value="vintage">Vintage</option>
            <option value="streetwear">Streetwear</option>
            <option value="hype">Hype</option>
          </select>
        </div>
        <div className="form">
          <label>Condition</label>
          <select placeholder="Condition" name='condition' value={state.condition} onChange={onChange}>
            <option>Used</option>
            <option>New</option>
          </select>
        </div>

        <div className='form'>
        <label>Photo</label>
          <DropZone state={state} setState={setState}/>
        </div>

        <div className="form">
          <button type='submit'>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default ItemUpload
