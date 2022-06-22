import React, { useState, useEffect, useRef } from 'react';

function HikForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='Hik-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='Hik-input edit'
          />
          <button onClick={handleSubmit} className='Hik-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Masukan Nama'
            value={input}
            onChange={handleChange}
            name='text'
            className='Hik-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='Hik-button'>
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default HikForm;
