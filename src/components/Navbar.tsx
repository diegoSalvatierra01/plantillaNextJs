/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import UseUserDataCookie from 'hooks/userCookieData/userData';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  const dataUser = UseUserDataCookie();
  console.log('🚀 ~ file: Navbar.tsx:8 ~ Navbar ~ dataUser:', dataUser);

  return (
    <React.Fragment>
      <nav className='flex h-full flex-col items-center justify-center bg-primary'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
