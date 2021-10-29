import React from 'react';

const TopBanner = () => {
  return (
    <div className="text-center">
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="object-cover w-full" src="https://images.unsplash.com/photo-1492294112339-ea831887e5d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 className="text-8xl font-serif text-green-900">First slide label</h1>
        <p className="text-xl">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="object-cover w-full" src="https://images.unsplash.com/photo-1623678254109-e7eb91f97bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-8xl font-serif  text-yellow-500">Second slide label</h5>
        <p className="text-xl">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="object-cover w-full" src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-8xl font-serif  text-yellow-900">Third slide label</h5>
        <p className="text-xl">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default TopBanner;