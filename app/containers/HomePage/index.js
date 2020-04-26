/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';

import Carousel from 'Components/Carousel';
import { carouselImgs } from 'Constants/varFrontend';
import ImgLoadding from 'Components/ImgLoading';
import HomeWrapper from './style';

export default function HomePage() {
  return (
    <HomeWrapper>
      <Carousel items={carouselImgs} />
      <section className="home-card">
        <div className="container">
          <div className="home-card-list text-center">
            <div className="three-col">
              <div className="row">
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">Shop what news</div>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA2_.jpg"
                      alt=""
                    />
                    <div className="content">Shop top</div>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA3_.jpg"
                      alt=""
                    />
                    <div className="content">Shop top</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="one-col">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-L1_.jpg"
                      alt=""
                    />
                    <div className="content">shop denim</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="two-col">
              <div className="row">
                <div className="col-12 col-md-6">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA4_.jpg"
                      alt=""
                    />
                    <div className="content">shop outerwear</div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA5_.jpg"
                      alt=""
                    />
                    <div className="content">shop outerwear</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="one-col">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="item">
                    <ImgLoadding
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-L2_.jpg"
                      alt=""
                    />
                    <div className="content">shop denim</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="newletter">
            <form className="row">
              <div className="col-12 col-md text-center">
                <span>
                  <ion-icon name="mail-outline" />
                  Stay up to date
                </span>
              </div>
              <div className="col-12 col-md-4 pb-2 pb-md-0">
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="col-12 col-md-4">
                <input type="submit" defaultValue="Subcribe" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}
