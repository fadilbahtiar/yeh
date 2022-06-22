import React, { useState } from 'react';
import HikForm from './HikForm';
import Hik from './Hik';

function HikList() {
  const [Hiks, setHiks] = useState([]);

  const addHik = Hik => {
    if (!Hik.text || /^\s*$/.test(Hik.text)) {
      return;
    }

    const newHiks = [Hik, ...Hiks];

    setHiks(newHiks);
    console.log(...Hiks);
  };

  const updateHik = (HikId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setHiks(prev => prev.map(item => (item.id === HikId ? newValue : item)));
  };

  const removeHik = id => {
    const removedArr = [...Hiks].filter(Hik => Hik.id !== id);

    setHiks(removedArr);
  };

  const completeHik = id => {
    let updatedHiks = Hiks.map(Hik => {
      if (Hik.id === id) {
        Hik.isComplete = !Hik.isComplete;
      }
      return Hik;
    });
    setHiks(updatedHiks);
  };

  return (
    <>
      <h1>[ To Do List ]</h1>
      <p> Apa yang mau dilakukan hari ini?</p>
      <HikForm onSubmit={addHik} />
      <Hik
        Hiks={Hiks}
        completeHik={completeHik}
        removeHik={removeHik}
        updateHik={updateHik}
      />
    </>
  );
}

export default HikList;
