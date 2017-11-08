import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import Link from 'gatsby-link';
import React from 'react';
import {colors, media} from 'theme';

import logoSvg from 'icons/logo.svg';

const Header = ({location}) => (
  <header
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          [media.between('small', 'large')]: {
            height: 50,
          },
          [media.lessThan('small')]: {
            height: 40,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.brand,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
          <img
            src={logoSvg}
            alt="Reactive Manual Logo"
            css={{
              height: 40,

              [media.lessThan('small')]: {
                height: 30,
              },
            }}
          />
          <span
            css={{
              color: 'inherit',
              marginLeft: 10,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '20px',
              [media.lessThan('large')]: {
                fontSize: 16,
                marginTop: 1,
              },
            }}>
          </span>
        </Link>

        <nav
          css={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',
            width: '60%',

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            [media.lessThan('small')]: {
              maskImage:
                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            },
            [media.lessThan('medium')]: {
              display: 'none',
            },
          }}>
          <HeaderLink
            isActive={location.pathname.includes('/getting-started/')}
            title="Getting Started"
            to="/getting-started/installation.html"
          />
          <HeaderLink
            isActive={location.pathname.includes('/basic-components/')}
            title="Basic Components"
            to="/docs/basic-components"
          />
          <HeaderLink
            isActive={location.pathname.includes('/map-components/')}
            title="Map Components"
            to="/docs/map-components"
          />
          <HeaderLink
            isActive={location.pathname.includes('/search-components/')}
            title="Search Components"
            to="/docs/search-components"
          />
          <HeaderLink
            isActive={location.pathname.includes('/advanced/')}
            title="Advanced"
            to="/docs/advanced"
          />
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
