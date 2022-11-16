import React from 'react'
import metabnb from '../images/metabnb.png'
import { Link } from 'react-router-dom'

import metamask from '../images/metamask-wallet.png'
import arrow from '../images/arrow.png'
import walletconnect from '../images/walletconnect.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={metabnb} alt="metabnb" width="150" height="24"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mt-sm-4 mt-lg-0">
                <li className="nav-item item list-inline-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item item list-inline-item">
                <Link className="nav-link active" to="/places">Place to stay</Link>
                </li>
                <li className="nav-item item list-inline-item">
                <a className="nav-link active" href="#">NFTs</a>
                </li>
                <li className="nav-item item list-inline-item">
                <a className="nav-link active" href="#">Community</a>
                </li>
            </ul>
            <button className="btn navbar_button" data-bs-toggle="modal" data-bs-target="#connectWallet">Connect Wallet</button>

            <div class="modal fade" id="connectWallet" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Connect Wallet</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>Choose your preferred wallet</p>
                      <div className="wallets">
                        <div className=" wallet metamask">
                          <div className="wallet_item">
                            <img src={metamask} alt="" className="metamask_img" />
                            <p id="wallet">Metamask</p>
                          </div>
                          <img src={arrow} alt="" className='arrow'/>
                        </div>
                        <div className="wallet walletconnect">
                        <div className="wallet_item">
                          <img src={walletconnect} alt="" className="" />
                          <p id="wallet">Walletconnect</p>
                        </div>
                          <img src={arrow} alt="" className='arrow'/>
                        </div>
                      </div>
                    </div>
                    {/* <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button> */}
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    </nav>
  )
}
