import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Logo from 'assets/images/logo.svg';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleClick = path => navigate(path)

  const routes = [
    { id: 1, label: 'Trade', path: '/' },
    { id: 2, label: 'Docs', path: '/docs' },
  ];

  return <div className='h-[66px] px-5 flex justify-between items-center border-b border-b-border'>
    <div className='flex items-center'>
      <img src={Logo} alt="" />
      <ul className='flex'>
        {
          routes.map(route => {
            const active = route.path === location.pathname;
            return <li
              key={route.id}
              onClick={() => handleClick(route.path)}
              className={`text-lg ml-[35px] ${active ? `opacity-100` : `opacity-50`}`}
            >
              {route.label}
            </li>
          })
        }
      </ul>
    </div>
    <Button onClick={() => setOpened(true)}>Connect wallet</Button>
  </div>
}

export default Header;