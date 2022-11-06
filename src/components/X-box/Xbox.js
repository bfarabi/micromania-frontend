import { Icon } from '@iconify/react';
import React from 'react';
import './Xbox.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import magasin from '../../assets/images/payments.svg';
import magasin1 from '../../assets/images/magasin.svg';
import magasin2 from '../../assets/images/shipup (1).svg';

const Xbox = () => {


  return (
    <>
      <div className='container-lg mt-5'>
        <div className="heading-text text-center py-3">
          <small>🚚 La livraison est offerte en magasin et en So Colissimo dès 39,99€ d'achat (hors console) 🚚 </small>
        </div>
      </div>

      {/* xbox area */}
      <div className="xbox-container">
        <div className="container-lg">
          <small>Accueil &gt;
            Jeux Vidéo &gt;
            Avec Bonus &gt;
            Xbox Series S</small>

          <div className="row py-3">
            <div className="col-md-6">
              <span className='offer-bonus'>Bonus Offer </span>
              <h1> xbox slider</h1>

              {/* xbox slider */}
              <Splide aria-label="My Favorite Images">
                <SplideSlide>
                  <img src="https://splidejs.com/images/slides/general/05.jpg" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                  <img src="https://splidejs.com/images/slides/general/06.jpg" alt="Image 2" />
                </SplideSlide>
              </Splide>


            </div>
            <div className="col-md-6">
              <div className="icon-container py-2">
                <Icon className=' border rounded-circle p-2 mx-1' icon="akar-icons:heart" width="40" />
                <Icon className=' border rounded-circle p-2 mx-1' icon="charm:share" width="39" />
                <small className=' border rounded-pill p-2 mx-1' ><Icon className='' icon="mdi:hand-coin-outline" width="25" />  Revendre cette console</small>

              </div>
              <h4>Xbox Series S</h4>
              <div className="d-flex align-items-center">
                <p className='rating-text mb-0'>Sortie le : 10 NOV. 2020 </p>
                <div className="star-rating mx-2 mb-1">
                  <Icon icon="emojione:star" width="20" />
                  <Icon icon="emojione:star" width="20" />
                  <Icon icon="emojione:star" width="20" />
                  <Icon icon="emojione:star" width="20" />
                  <Icon icon="emojione:star" width="20" />
                  <small className='text-warning mx-2 rating-text'>
                    (657)</small>
                </div>
              </div>
              <div className="xbox-series-border my-2">
                <small>Xbox Series S pour 24,99 € par mois pendant 24 mois* **</small>
              </div>
              <small>
                Découvrez la Xbox Series S, la Xbox la plus compacte. DÉTAILS PRODUIT
              </small>
              <div className="xbox-access d-flex flex-wrap my-3">
                <div className="blue-box px-4 py-4">
                  <small> 1 offer <br /> bonus! <br /> details</small>
                </div>
                <div className="box-side-text">
                  <small className="fw-bold ms-2" >Xbox All Access incluant :</small>
                  <ul>
                    <li>Une Xbox Series S pour 24,99€/mois pendant 24 mois.*</li>
                    <li>24 mois de Xbox Game Pass avec plus de 100 jeux exceptionnels</li>
                    <li>un abonnement EA Play</li>
                    <li>Cliquez sur ce lien pour accéder à l'offre</li>
                  </ul>
                </div>
              </div>
              <p className='mb-0'>Plateforme : XBOX SERIES X</p>
              <small>Édition Standard</small> <br />
              <small> État </small>
              <div className="xbox-price mb-3">
                <small>NEUF</small>
                <p className='mb-0'>299,99€</p>
                <small>ou dès 32,15€ / mois</small> <br />
                <small>300 pts
                  fidélité *</small>
              </div>
              <div className='text-end'>
                <a className='voir-text ' href="">VOIR LA DISPONIBILITÉ EN MAGASIN</a>
              </div>
              <div className="button-group d-flex flex-wrap my-2">
                <div className='button-1 m-1' >
                  {"<<"} Ajouter au panier
                </div>
                <div className='button-1 m-1' >
                  {"<<"} Ajouter au panier
                </div>
              </div>

              <div className="row-group">
                <div className="row-1 d-flex my-1">
                  <p className='mb-0'><img src={magasin} alt="" /> Paiement en 4X   </p> <span className='fw-bold text-primary mt-1 ms-2'>Pay</span><span className='fw-bold text-info mt-1'>Pal</span>
                </div>
                <div className="row-1 d-flex my-1">
                  <p className='mb-0'><img src={magasin1} alt="" />
                    Retrait 1h en magasin: Gratuit  </p>
                </div>
                <div className="row-1 d-flex my-1">
                  <p className='mb-0'><img src={magasin2} alt="" />
                    Retrait 1h en magasin: Gratuit  </p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Xbox;