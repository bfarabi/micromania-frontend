import { Icon } from '@iconify/react';
import React from 'react';
import './Xbox.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// // Default theme
// import '@splidejs/react-splide/css';
// // or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// // or only core styles
// import '@splidejs/react-splide/css/core';
import { Carousel } from 'react-responsive-carousel';

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
              {/* <Splide aria-label="My Favorite Images">
                <SplideSlide>
                  <img src="https://splidejs.com/images/slides/general/05.jpg" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                  <img src="https://splidejs.com/images/slides/general/06.jpg" alt="Image 2" />
                </SplideSlide>
              </Splide> */}

              {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}> */}
              <Carousel >
                <div>
                  <img src="https://splidejs.com/images/slides/general/06.jpg" alt="" />
                </div>
                <div>
                  <img src="https://splidejs.com/images/slides/general/05.jpg" alt="" />
                </div>
              </Carousel>


            </div>
            <div className="col-md-6">
              <div className="icon-container py-2">
                <Icon className=' border rounded-circle p-2 mx-1' icon="akar-icons:heart" width="40" />
                <Icon className=' border rounded-circle p-2 mx-1' icon="charm:share" width="39" />
                <small className=' border rounded-pill p-2 mx-1' ><Icon className='' icon="mdi:hand-coin-outline" width="25" />  Revendre cette console</small>

              </div>
              <h4>Xbox Series S</h4>
              <p className='rating-text'>Sortie le : 10 NOV. 2020</p>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Xbox;