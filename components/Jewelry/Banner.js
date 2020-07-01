import Link from 'next/link';

const Banner = () => {
  return (
    <div className='jewelry-main-banner'>
      <div className='jewelry-banner-content'>
        <div className='line'></div>
        <span className='sub-title'>Postively Charged</span>
        <h1>Grounded HLC</h1>
        <p>
          Energetically Connected with Another Either Directly Or Through A
          Conductor, To Live Life From A Grounded Perspective.
        </p>
        <Link href='/products?term=stickers'>
          <a className='default-btn'>Shop Now</a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
