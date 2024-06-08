import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changeData]=useState([])
    let fetchDatafromAPI=()=>{
      axios.get("https://jsonplaceholder.typicode.com/photos").then(
        (response)=>{
          console.log(response.data)
          changeData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{
      fetchDatafromAPI()
    },[])
       
  
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {
                            data.map(
                                (value,index)=>{
                                    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card" >
                                        <img src={value.url} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">ID:{value.id}</h5>
                                                <p class="card-text">TITLE:{value.title}</p>
                                                <a href="#" class="btn btn-primary">Details</a>
                                            </div>
                                    </div>
                                </div>
                                }
                            )
                           }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View