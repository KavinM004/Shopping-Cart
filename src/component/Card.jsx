import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    // <div className='bg-secondary'>
    <div className="card m-2">
        {/* Card img */}
     {cardData.img1 &&(
         <img
         src="./public/image/imac.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img2 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img3 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro12-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477069877"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img4 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-1-202309_GEO_IN?wid=728&hei=666&fmt=jpeg&qlt=95&.v=1693846567708"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img5 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img6 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=95&.v=1664896361408"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img7 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971522628"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img8 &&(
         <img
         src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"
         className="card-img-top"
         alt="Product"
       />
     )}
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      {cardData.isSoldout && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Soldout
        </div>
      )}
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'IMac', rating: '⭐⭐⭐⭐⭐', price: '₹134900',img1:true },
    { name: 'IPhone 15 Pro Max', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹199000', price: '₹179000', isSpecial: true ,img2:true},
    { name: 'IPad Pro', rating: '⭐⭐⭐⭐⭐', price: '₹81900', isSale: true,img3:true },
    { name: 'IWatch 9 Ultra', rating: '⭐⭐⭐⭐⭐', price: '₹81900',img4:true },
    { name: 'AirPods Pro 2nd Gen',  rating: '⭐⭐⭐⭐⭐',price: '₹26900', isSale: true ,img5:true},
    { name: 'Apple TV 4K', rating: '⭐⭐⭐⭐⭐', price: '₹16900',img6:true },
    { name: 'IMac 13', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹329000', price: '₹299000', isSoldout: true,img7:true },
    { name: 'AirTag', rating: '⭐⭐⭐⭐⭐', price: '₹13490',img8:true },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
