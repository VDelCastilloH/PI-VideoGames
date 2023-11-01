import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions'; 

import './pagination.styles.css'

function Pagination () {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => Math.ceil(state.videogames.length / 15));
  
  // crea un array de números que representan los números de las páginas 
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); 

  console.log(pageNumbers);
  console.log(currentPage);

  const prevPage = (currPage) => {
    if(currPage>1){
      setPage(currPage-1)
    }
  }

  const nextPage = (currPage) => {
    if(currPage<pageNumbers.length-1){
      setPage(currPage+1)
    }
  }

  const changePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className='btn-container'>
      <button className='btn-page' key = {'prev'} onClick={() => prevPage(currentPage)}>Prev</button>
      {pageNumbers.map((page) => (
        <button className="btn-page" key={page} onClick={() => changePage(page)}>{page}</button>
      ))}
      <button className='btn-page' key = {'next'} onClick={() => nextPage(currentPage)}>Next</button>
    </div>
  );
};

export default Pagination;
