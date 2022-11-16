import React from 'react'
// import hero images
import hero_img1 from '../images/hero_image--one.png'
import hero_img2 from '../images/hero_image--two.png'
import hero_img3 from '../images/hero_image--three.png'
import hero_img4 from '../images/hero_image--four.png'

export default function Hero() {
  return (
   <section className='my-5'>
    <div className="container">
        <div className='row d-flex flex-sm-column flex-md-row gx-lg-5'>
            <div className="col-sm-9 col-md-7 hero_text my-lg-5">
                    <h2 className="fs-1 mb-3" id="hero_text--header" >Rent a <span id="span_style" className="fs-1" >Place</span> away from <span id="span_style" className="fs-1">Home</span> in the <span id="span_style" className="fs-1">Metaverse</span></h2>
                    <p className="fs-3 mt-4" id="hero_text--paragraph" >we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <div class="input-group my-4">
                        <input type="text" className="form-control" placeholder="Search for location" aria-label="Search Search for location" aria-describedby="submit" />
                        <button className="btn btn-lg" type="button" id="submit">Search</button>
                    </div>
            </div>
            <div className="col-sm-10 col-md-5 hero_img mb-sm-5 mb-md-0">
                    <img src={hero_img1} alt="" id="hero_img1" className="img-fluid w-sm-20 w-md-10 w-lg-40 one"/>
                    <img src={hero_img2} alt="" id="hero_img2" className="img-fluid w-sm-20 w-lg-40 two"/>
                    <img src={hero_img3} alt="" id="hero_img3" className="img-fluid w-sm-20 w-lg-40 three"/>
                    <img src={hero_img4} alt="" id="hero_img4" className="img-fluid w-sm-20 w-lg-40 four"/>
            </div>             
        </div>
    </div>
   </section>
  )
}
