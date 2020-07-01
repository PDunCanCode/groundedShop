import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = ({ user }) => {
  const router = useRouter();
  // console.log(user)
  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  // const isRootOrAdmin = isRoot || isAdmin;

  const isActive = (route) => {
    return route == router.pathname;
  };
  return (
    <>
      <footer className='footer-area'>
        <div className='ui grid'>
          <div className='four wide column'>
            <div className='single-footer-widget'>
              <h3>About The Shop</h3>

              <div className='about-the-store'>
                <p>
                  Grounded is an original voice of JP Duncan, and one of the
                  leading virtual destinations for holistic coaching, active
                  meditation, and offers a curated selection of well-meaning,
                  contemporary, artist-made stickers.
                </p>
              </div>
            </div>
          </div>

          <div className='four wide column'>
            <div className='single-footer-widget pl-4'>
              <h3>Quick Links</h3>

              <ul className='quick-links'>
                <li>
                  <Link href='/about'>
                    <a>Our Story</a>
                  </Link>
                </li>
                <li>
                  <Link href='/products'>
                    <a>Shop Now!</a>
                  </Link>
                </li>
                <li>
                  <Link href='/products'>
                    <a>Cart</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='four wide column'>
            <div className='single-footer-widget'>
              <h3>Support Links</h3>

              <ul className='customer-support'>
                {user ? (
                  <>
                    <li>
                      <Link href='/profile'>
                        <a>My Profile</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/my-orders-history'>
                        <a>My Orders History</a>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href='/auth/signup'>
                        <a>Signup</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/auth/login'>
                        <a>Login</a>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='four wide column'>
            <div className='single-footer-widget'>
              <h3>Reach Out</h3>

              <ul className='footer-contact-info'>
                <li>
                  <a href='#' target='_blank'>
                    Central Valley, California
                  </a>
                </li>
                <li>
                  <a href='tel:+015592595000'>+01 559 259 5000</a>
                </li>
                <li>
                  <a href='mailto:jpduncan@gmail.com'>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom-area'>
          <p>
            Copyright &copy; 2020 <a href='/'>Grounded</a> Designed By{' '}
            <a href='https://github.com/PDunCanCode/' target='_blank'>
              Duncan
            </a>{' '}
            | All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
