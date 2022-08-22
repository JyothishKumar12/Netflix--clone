
import React ,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from  '../../axios'
import {img_url} from '../../Constants/constants'
function Rowpost(props) {
  const [movies,setMovies] =useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)

      setMovies(response.data.results)

    }).catch(error=>{
      alert(error)
    })
  })
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
        <img className={props.isSmall ? 'smallposter' : 'poster'} alt="Poster" src={`${img_url+obj.backdrop_path}`}/>
        
      )}
        
    
    </div>
    </div>
  )
}

export default Rowpost