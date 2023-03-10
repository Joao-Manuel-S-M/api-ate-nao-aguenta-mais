import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [inf, setInf] = useState('') 

  
  const getInf = async () => {
    try {
      
      const response = await axios.get(`https://api.github.com/users/${name}`, {
        headers: {
          'Authorization': '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',
        }
      })
      console.log(name)
      const data = response.data
      setInf(data)
      
      console.log(name)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  
  
  
  
  
  
  
const [name, setName] = useState([])
 
 


const env = (e) => {
   setName(e.target[0].value)
   e.preventDefault()      
 }

 

 
  

 useEffect(() => {
  if (name) {
    getInf()
  }
}, [name])



function date () {
  const dates = new Date(inf.created_at)

  if (!isNaN(dates)){
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    const dateFormated = dates.toLocaleString('pt-Br', options)
    return dateFormated
  } 

} 


 
 
  
  
  
  
  
  return (
    <div id='content'>
      <p className='title'>devfinder</p>
      <form onSubmit={env}>
        <img src="src/assets/icon.png" className='iconsearch'/>
        <input 
          type="text"
          className='inputtext'
          name='name'
          placeholder='Search GitHub username…'
        />
        <input type='submit' value={"Enviar"} className="inputbtn"/>
      </form>





      <div className="card">
        <div className="content-inf">
          <img src={inf.avatar_url} alt="" className='img'/>
          <div className='infs'>
            <h1 className='name'>{/* João Manuel */} {inf.name}</h1>
            <span className='date'>{date()}</span>  
            <span className='username'>{/*@joao-manuel-s-m*/} @{inf.login}</span>
            <br />
            <p className="about">{/*Desenvolvedor Front-End*/}{inf.bio}</p>
            <div className='activities'>
              <div className="items">
                <span>Repos</span>
                <h1>{/*6*/}{inf.public_repos}</h1>
              </div>
              <div className="items">
                <span>Followers</span>
                <h1>{/*18*/}{inf.followers}</h1>
              </div>
              <div className="items">
                <span>Following</span>
                <h1>{/*20*/}{inf.following}</h1>
              </div>
            </div>
          </div>
        </div>
        
        <br />

        <div className="group-links">
          <div className='pair-links'>
            <div className='link'>
              <img src="" alt="" id='img1' />

              {}
              
            </div>
            <div className='link'>
              <img src="src/assets/link.svg" alt="" />
              <a href="">
                {inf.blog == "" ? "Não existe" : () => {inf.blog.substr(8)}}
              </a>
            </div>
          </div>

          <div className='pair-links'>
            <div className='link'>
              <img src="src/assets/twitter.svg" alt="" />
              <a href="">
              {inf.twitter_username == undefined ? "Não existe" : inf.twitter_username}
              </a>
            </div>

            <div className='link'>
              <img src="src/assets/work.svg" alt="" />
              {inf.company == undefined ? "Não existe" : inf.company}
            </div>  
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
