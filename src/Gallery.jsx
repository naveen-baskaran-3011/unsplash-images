import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './context';


export default function Gallery() {
  const { searchTerm } = useGlobalContext();
  const URL = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${import.meta.env.VITE_API_KEY}`;

  async function fetchGallery() {
    return axios.get(URL).then(res => res.data);
  }

  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['gallery', searchTerm],
    queryFn: fetchGallery
  });

  if(isLoading) {
    return (
        <section className="image-container">
            <h4>Loading...</h4>
        </section>
    );
  } else if(isError) {
    return (
        <section className="image-container">
            <h4>There was an error....</h4>
        </section>
    );
  }

  if(data.results.length < 1) {
    return (
        <section className="image-container">
            <h4>No results found.....</h4>
        </section>
    );
  }

  return (
    <section className="image-container">
        {data.results.map(item => {
            const url = item?.urls?.thumb || item?.urls?.regular;
            return (<img
                key={item.id}
                src={url}
                alt={item.alt_description}
                className='img' />);
        })}
    </section>
  )
}
