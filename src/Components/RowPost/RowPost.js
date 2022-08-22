
import React ,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from  '../../axios'
import {API_KEY, img_url} from '../../Constants/constants'
function Rowpost(props) {
  const [movies,setMovies] =useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213` ).then(response=>{
      console.log(response.data)

      setMovies(response.data.results)

    }).catch(error=>{
      // alert(error)
    })
  })
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
        <img class="poster" alt="Poster" src={`${img_url+obj.backdrop_path}`}/>
        
      )}
        
    
    </div>
    </div>
  )
}

export default Rowpost