import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const StaticHeader = ({ user }) => {
  const router = useRouter();
  const [menuActive, setMenuActive] = React.useState(false);
  const [search, setSearch] = React.useState({ search: '' });
  // console.log(user)
  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  const isActive = (route) => {
    return route == router.pathname;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = (e) => {
    Router.push({
      pathname: '/products',
      query: { term: search.search },
    });
  };

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='ui grid navbar-area'>
      <div className='computer tablet only row'>
        <div className='ui inverted fixed menu navbar page grid'>
          <Link href='/'>
            <a className={`item ${isActive('/') ? 'active' : null}`}>
              <i className='home icon'></i>
              Home
            </a>
          </Link>

          <div className='ui simple dropdown item'>
            Products
            <i className='dropdown icon'></i>
            <div className='menu'>
              <Link href='/products?term=stickers'>
                <a className={`item`}>Stickers</a>
              </Link>
              <Link href='/products?term=meditation'>
                <a className={`item`}>Meditation</a>
              </Link>
              <Link href='/products?term=coaching'>
                <a className={`item`}>Coaching</a>
              </Link>
              <Link href='/products?term=snowboarding'>
                <a className={`item`}>Snowboarding</a>
              </Link>

              <Link href='/products'>
                <a className={`item`}>All Products</a>
              </Link>
            </div>
          </div>
          <Link href='/cart'>
            <a className={`item ${isActive('/cart') ? 'active' : null}`}>
              Cart
            </a>
          </Link>
          <Link href='/about'>
            <a className={`item ${isActive('/about') ? 'active' : null}`}>
              About
            </a>
          </Link>

          <div className='right menu'>
            {user ? (
              <>
                <div className='ui simple dropdown item'>
                  {user.name}
                  <i className='dropdown icon'></i>
                  <div className='menu'>
                    {isRootOrAdmin && (
                      <Link href='/admin/dashboard'>
                        <a
                          className={`item ${
                            isActive('/admin/dashboard') ? 'active' : null
                          }`}
                        >
                          <i className='dashboard icon'></i>
                          Dashboard
                        </a>
                      </Link>
                    )}

                    <Link href='/profile'>
                      <a
                        className={`item ${
                          isActive('/profile') ? 'active' : null
                        }`}
                      >
                        <i className='user icon'></i>
                        My Profile
                      </a>
                    </Link>
                    <Link href='/my-orders-history'>
                      <a
                        className={`item ${
                          isActive('/my-orders-history') ? 'active' : null
                        }`}
                      >
                        <i className='history icon'></i>
                        My Orders History
                      </a>
                    </Link>
                    <div className='divider'></div>
                    <Link href='#'>
                      <a
                        className={`item`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                      >
                        <i className='sign-out icon'></i>
                        Logout
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <React.Fragment>
                <Link href='/auth/login'>
                  <a
                    className={`item ${
                      isActive('/auth/login') ? 'active' : null
                    }`}
                  >
                    Login
                  </a>
                </Link>

                <Link href='/auth/signup'>
                  <a
                    className={`item ${
                      isActive('/auth/signup') ? 'active' : null
                    }`}
                  >
                    Signup
                  </a>
                </Link>
              </React.Fragment>
            )}
            <form
              className='ui form'
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className='ui transparent icon input'>
                <input
                  className='prompt'
                  type='text'
                  placeholder='Search...'
                  name='search'
                  value={search.search}
                  onChange={handleOnChange}
                />
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                  className='search link icon'
                ></i>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className='mobile only row'>
        <div className='ui fixed inverted navbar menu'>
          <Link href='/'>
            <a className='brand item'>grounded</a>
          </Link>
          <div className='right menu open'>
            <Link href='#'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  menuToggle();
                }}
                className='menu item'
              >
                <i className='align justify icon'></i>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`ui vertical navbar menu ${
            menuActive ? 'mobile-active-show' : 'mobile-active-hide'
          }`}
        >
          <Link href='/'>
            <a
              className={`item ${isActive('/') ? 'active' : null}`}
              onClick={menuToggle}
            >
              <i className='home icon'></i>
              Home
            </a>
          </Link>
          <div className='ui simple pointing left dropdown item'>
            Products
            <i className='dropdown icon'></i>
            <div className='menu'>
              <Link href='/products?term=stickers'>
                <a className={`item`} onClick={menuToggle}>
                  Stickers
                </a>
              </Link>
              <Link href='/products?term=coaching'>
                <a className={`item`} onClick={menuToggle}>
                  Coaching
                </a>
              </Link>
              <Link href='/products?term=meditation'>
                <a className={`item`} onClick={menuToggle}>
                  Meditation
                </a>
              </Link>
              <Link href='/products?term=snowboarding'>
                <a className={`item`} onClick={menuToggle}>
                  Snowboarding
                </a>
              </Link>
              <Link href='/products'>
                <a className={`item`} onClick={menuToggle}>
                  All Products
                </a>
              </Link>
            </div>
          </div>
          <Link href='/cart'>
            <a
              className={`item ${isActive('/cart') ? 'active' : null}`}
              onClick={menuToggle}
            >
              Cart
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={`item ${isActive('/about') ? 'active' : null}`}
              onClick={menuToggle}
            >
              About
            </a>
          </Link>

          <div className='menu root-user'>
            {user ? (
              <>
                <div className='ui simple dropdown item'>
                  {user.name}
                  <i className='dropdown icon'></i>
                  <div className='menu'>
                    {isRootOrAdmin && (
                      <Link href='/admin/dashboard'>
                        <a
                          className={`item ${
                            isActive('/admin/dashboard') ? 'active' : null
                          }`}
                          onClick={menuToggle}
                        >
                          <i className='dashboard icon'></i>
                          Dashboard
                        </a>
                      </Link>
                    )}

                    <Link href='/profile'>
                      <a
                        className={`item ${
                          isActive('/profile') ? 'active' : null
                        }`}
                        onClick={menuToggle}
                      >
                        <i className='user icon'></i>
                        My Profile
                      </a>
                    </Link>
                    <Link href='/my-orders-history'>
                      <a
                        className={`item ${
                          isActive('/my-orders-history') ? 'active' : null
                        }`}
                        onClick={menuToggle}
                      >
                        <i className='history icon'></i>
                        My Orders History
                      </a>
                    </Link>
                    <div className='divider'></div>
                    <Link href='#'>
                      <a
                        className={`item`}
                        onClick={handleLogout}
                        onClick={menuToggle}
                      >
                        <i className='sign-out icon'></i>
                        Logout
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <React.Fragment>
                <Link href='/auth/login'>
                  <a
                    className={`item ${
                      isActive('/auth/login') ? 'active' : null
                    }`}
                    onClick={menuToggle}
                  >
                    Login
                  </a>
                </Link>

                <Link href='/auth/signup'>
                  <a
                    className={`item ${
                      isActive('/auth/signup') ? 'active' : null
                    }`}
                    onClick={menuToggle}
                  >
                    Signup
                  </a>
                </Link>
              </React.Fragment>
            )}
            <form
              className='ui form'
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
                menuToggle();
              }}
            >
              <div className='ui transparent icon input'>
                <input
                  className='prompt'
                  type='text'
                  placeholder='Search...'
                  name='search'
                  value={search.search}
                  onChange={handleOnChange}
                />
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearch();
                    menuToggle();
                  }}
                  className='search link icon'
                ></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticHeader;
