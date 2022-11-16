import React from 'react'
import star from '../images/star.png'

import nft1 from '../images/nft_images/nft1.png'
import nft2 from '../images/nft_images/nft2.png'
import nft3 from '../images/nft_images/nft3.png'
import nft4 from '../images/nft_images/nft4.png'
import nft5 from '../images/nft_images/nft5.png'
import nft6 from '../images/nft_images/nft6.png'
import nft7 from '../images/nft_images/nft7.png'
import nft8 from '../images/nft_images/nft8.png'
import nft9 from '../images/nft_images/nft9.png'
import nft10 from '../images/nft_images/nft10.png'
import nft11 from '../images/nft_images/nft11.png'
import nft12 from '../images/nft_images/nft12.png'
import nft13 from '../images/nft_images/nft13.png'
import nft14 from '../images/nft_images/nft14.png'
import nft15 from '../images/nft_images/nft15.png'
import nft16 from '../images/nft_images/nft16.png'

export default function Nft() {
    const nftImages = [
        nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8, nft9, nft10, nft11, nft12, nft13, nft14, nft15, nft16
    ]
    
    const Nfts =nftImages.map((item) => (
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className='card'>
                            <img src={item} alt="" className='card_image img-fluid' />
                            <div className="card_text">
                                <p>Desert king</p>
                                <p id="bolden">1MBT per night</p>
                            </div>
                            <div className='card_text'>
                                <p className="card_text--edit">2345km away</p>
                                <p className="card_text--edit">available for 2weeks stay</p>
                            </div>
                            <div className='star_rating'>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </div> 
                        </div>
                    </div>                       
    ));
  return (
    <div className='inspirations'>
        <div className="container">    
                <div className="row">
                    {Nfts}
                </div>
        </div>  
        
            
    </div>
    
  )
};
