import React from 'react'
import { toast } from 'react-toastify';

function PageCount({setPageNo , pageNo}) {

    function previousHandler(){
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }else {
            toast.error("No Pages Available after 1")
        }
    }
    function nextHandler(){
        setPageNo(pageNo+1);
    }

  return (
    <div className='switch_pages_bar'>
        <div className='buttons'>
            <button className='Previous_button' onClick={previousHandler}>Previous</button>
            <p className='page_count'>Page {pageNo}</p>
            <button className='Next_button' onClick={nextHandler}>Next</button>
        </div>
      
    </div>
  )
}

export default PageCount
