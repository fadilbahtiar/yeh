import React, { useState } from 'react';
import HikForm from './HikForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Hik = ({ Hiks, completeHik, removeHik, updateHik }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateHik(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <HikForm edit={edit} onSubmit={submitUpdate} />;
  }

  return Hiks.map((Hik, index) => (
    <div
      className={Hik.isComplete ? 'Hik-row complete' : 'Hik-row'}
      key={index}
    >
      <div key={Hik.id} onClick={() => completeHik(Hik.id)}>
        {Hik.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeHik(Hik.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: Hik.id, value: Hik.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Hik;
