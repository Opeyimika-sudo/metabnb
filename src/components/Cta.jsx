import React from 'react'

// Cta images
import nft_one from '../images/nfts_image--one.png'
import nft_two from '../images/nfts_image--two.png'
import nft_three from '../images/nfts_image--three.png'

export default function Cta() {
  return (
    <section className="cta">
      <div className="container my-auto">
        <div className="row d-flex flex-sm-column flex-md-row gx-lg-5 py-5">
          <div className="col-sm-9 col-md-5 hero_text my-lg-5">
            <h2 id='cta_text--header' className='fs-1'>Metabnb NFTs</h2>
            <p id="cta_text--paragraph" className='fs-3 mt-3'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button className="btn cta_click btn-md-lg mt-3">Learn more</button>
          </div>
          <div className="col-sm-10 col-md-7 cta_images mb-sm-5 mb-md-0 cta_images">
                  <img src={nft_one} alt="" className="nft" id="nft_one" />
                  <img src={nft_two} alt="" className="nft" id="nft_two" />
                  <img src={nft_three} alt="" className="nft" id="nft_three" />
          </div>
        </div>
      </div>
    </section>
  )
}
