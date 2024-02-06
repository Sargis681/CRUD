import React, { useRef } from 'react';
import './crudBox.css';
import CrudList from '../CrudList/CrudList';
import { useDispatch, useSelector } from 'react-redux';
import { addText, selectAdd, updateEditItem, resetItem } from '../../store/addSlice/addSlice';

function CrudBox() {
  const data = useSelector(selectAdd);
  const formRef = useRef();
  const dispatch = useDispatch();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const all = formRef.current.elements
    const text = formRef.current.elements.str.value;
    const date = formRef.current.elements.date.value
    console.log(formRef.current.elements.date.value);

    if (text !== "") {
      if (data.editItem && data.editItem.text) {
        dispatch(updateEditItem({ id: data.editItem.id, text, date }));
      } else {

        dispatch(addText(all));
      }
    }



    formRef.current.reset();
    dispatch(resetItem());
  };

  return (
    <div className='crudBox'>
      <p>{data.editItem ? data.editItem.text : ''}</p>
      <form onSubmit={handleSubmit} ref={formRef} className='crudBox__form' action="">
        <label className='crudBox__label' htmlFor="text">Crud Form</label>
        <input
          className='crudBox__input'
          type="text"
          name="str"
          id="text"
          defaultValue={data.editItem ? data.editItem.text : ''}
        />
        <input type="date"
          name="date"
          id=""
          defaultValue={data.editItem.date ? data.editItem.date : new Date().toISOString().split('T')[0]}
        />
        <button type='submit' className='crudBox__button'>Add</button>
      </form>
      <CrudList />
    </div>
  );
}

export default CrudBox;
