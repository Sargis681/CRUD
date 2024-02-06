import React, { useRef, useState, useEffect } from 'react';
import './list.css';
import { useDispatch} from 'react-redux';
import { deleteList, updateEditItem, } from '../../store/addSlice/addSlice';

function List({ id, text,date }) {
    const [bottom, setBottom] = useState(true);
    const [charCount, setCharCount] = useState(0);
  
    const dispatch = useDispatch();
   
    const ref = useRef();
  
    useEffect(() => {
      if (ref.current) {
        const count = ref.current.textContent.length;
        setCharCount(count);
      }
    }, [bottom]);
  
    return (
      <div className="list">
        <div className="list__top">
          <span ref={ref} className={bottom ? "list__text" : "list-text--x"}>
            {text}
          </span>
          <div className="list__work">
          
          <span className='list__date'>{date}</span>

            <img
              onClick={() => dispatch(deleteList(id))}
              className="list__delete"
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              alt=""
            />
            <img
              onClick={() => dispatch(updateEditItem({ id, text,date }))}  
              className="list__edit"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
              alt=""
            />
          </div>
        </div>
  
        {charCount > 59 ? (
          <img
            onClick={() => setBottom((prev) => !prev)}
            className="list__bottom"
            src="https://icons.veryicon.com/png/o/miscellaneous/mobile-aone/bottom-2.png"
            alt="boot"
          />
        ) : (
          ""
        )}
      </div>
    );
}

export default List;