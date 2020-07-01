import Link from 'next/link';

const CategoryBanner = () => {
  return (
    <div className='grocery-categories-banner-area'>
      <div className='ui grid'>
        <div className='four wide column'>
          <div className='single-grocery-categories-box jewelry-categorie overly'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1591397319/grounded/11_ihqrzz.jpg'
              alt='Artisonal Sickers for Grounded HLC - groundedhlc'
            />

            <div className='content'>
              <span className='color-white'>Artisonal</span>
              <h3 className='color-white'>Stickers</h3>
              <Link href='/products?term=stickers'>
                <a className='default-btn'>Shop Now</a>
              </Link>
            </div>
          </div>
        </div>

        <div className='four wide column'>
          <div className='single-grocery-categories-box jewelry-categorie overly'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1593574637/grounded/tinified/IMG_2743_grwenl.jpg'
              alt='Meditation Active Meditation Guided Meditation for Grounded HLC - groundedhlc'
            />

            <div className='content'>
              <span className='color-white'>Active</span>
              <h3 className='color-white'>Meditation</h3>
              <Link href='/products?term=meditation'>
                <a className='default-btn'>Shop Now</a>
              </Link>
            </div>
          </div>
        </div>

        <div className='four wide column '>
          <div className='single-grocery-categories-box jewelry-categorie overly'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1593574637/grounded/tinified/IMG_2509_yj7vts.jpg'
              alt='Lifecoaching Coaching Holistic Coach image for Grounded Hlc - groundedhlc'
            />

            <div className='content'>
              <span className='color-white'>One-on-One</span>
              <h3 className='color-white'>Coaching</h3>
              <Link href='/products?term=coaching'>
                <a className='default-btn'>Shop Now</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='single-grocery-categories-box jewelry-categorie overly'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1593636302/IMG_0081_1_i1ttuh.png'
              alt='how to build bonfire workshop grounding camp - groundedhlc'
            />

            <div className='content'>
              <span className='color-white'>Intentional</span>
              <h3 className='color-white'>Bonfires</h3>
              <Link href='/products?term=packages'>
                <a className='default-btn'>Shop Now</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='four wide column'>
          <div className='single-grocery-categories-box jewelry-categorie overly'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1593577506/grounded/tinified/b122e60a-876c-478d-9faf-1197ba52c716_inigpb.jpg'
              alt='Learn to Snowboard Snowboard lessons Snowboarding for Grounded HLC - groundedhlc'
            />

            <div className='content'>
              <span className='color-white'>Snowboard</span>
              <h3 className='color-white'>Instruction</h3>
              <Link href='/products?term=snowboarding'>
                <a className='default-btn'>Shop Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
