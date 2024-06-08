import React from 'react'
import Navbar from './Navbar'

const View = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">ID:</h5>
                                            <p class="card-text">TITLE:</p>
                                            <a href="#" class="btn btn-primary">Details</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="..." class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">ID:</h5>
                                            <p class="card-text">TITLE:</p>
                                            <a href="#" class="btn btn-primary">Details</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View