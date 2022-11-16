import React from 'react'

// Company Logos
import mbtoken from '../images/mbtoken.svg'
import metamask from '../images/metamask.svg'
import opensea from '../images/opensea.svg'

export default function Logos() {
  return (
    <section className="my-5">
      <div className="container-fluid">
        <div className="row companies py-4">
                <img src={mbtoken} alt="" className="company" />
                <img src={metamask} alt="" className="company" />
                <img src={opensea} alt="" className="company" />
        </div>
      </div>
    </section>
  )
}
