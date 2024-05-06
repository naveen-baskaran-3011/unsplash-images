import React from 'react'
import { useGlobalContext } from './context';

export default function SearchForm() {
  const {
    searchTerm,
    changeSearchTerm
  } = useGlobalContext();
  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    const searchValue = submitEvent.target.elements.search.value;

    if(!searchValue) return;
    changeSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input' />
        <button type="submit" className='btn'>
          search
        </button>
      </form>
    </section>
  )
}
