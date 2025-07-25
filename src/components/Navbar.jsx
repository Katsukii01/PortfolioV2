import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../constants';  // Zmieniamy na NavLinks, ponieważ to jest importowane
import { logo } from '../assets';
import Flag from 'react-world-flags'; 
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [active, setActive] = useState('');  // Zmienione z links na NavLinks


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Zmiana języka
  };


      useEffect(() => {
      setActive(active);
      setUnderlineToActiveLink();
    }, [i18n.language]);


    const mdToLgQuery = window.matchMedia('(min-width: 1024px)');

    useEffect(() => {
      const handleWindowResize = (e) => {
        if (e.matches) {
          setUnderlineToActiveLink();
        }
      };
  
      mdToLgQuery.addEventListener('change', handleWindowResize);
  
      // Cleanup listener on unmount
      return () => {
        mdToLgQuery.removeEventListener('change', handleWindowResize);
      };
    }, [active]);

   const handleActive = (link) => {
     setActive(link.title);

     // Pobierz element kliknięty i jego pozycję
     const clickedLink = document.querySelector(`[href='#${link.id}']`).parentElement;
     const underline = document.getElementById('underline');

     // Oblicz szerokość i pozycję elementu
     const linkWidth = clickedLink.offsetWidth;
     const linkLeft = clickedLink.offsetLeft;

     // Ustaw szerokość i pozycję podkreślenia
     underline.style.width = `${linkWidth}px`;
     underline.style.left = `${linkLeft}px`;
   };

   const setUnderlineToNone = () => {
     const underline = document.getElementById('underline');
     underline.style.width = '0px';
     underline.style.left = '0px';
   }

   const setUnderlineToActiveLink = () => {
    const lowercaseActive = active.toLowerCase();
    const underline = document.getElementById('underline');
    if (!underline) {
      console.warn('Underline element not found');
      return;
    }

    const link = document.querySelector(`[href='#${lowercaseActive}']`);
    if (!link) {
      console.warn(`Link with href='#${lowercaseActive}' not found`);
      return;
    }
  
    const parentLink = link.parentElement;
    if (!parentLink) {
      console.warn('Parent element not found');
      return;
    }
  
    const linkWidth = parentLink.offsetWidth;
    const linkLeft = parentLink.offsetLeft;
  
    underline.style.width = `${linkWidth}px`;
    underline.style.left = `${linkLeft}px`;
  }
  
  const [toggle, setToggle] = useState(false);

  const LanguageSwitcher = () => (
  <div className="flex gap-2">
    {[
      { id: 'pl', code: 'PL', label: 'Polski' },
      { id: 'en', code: 'GB', label: 'English' },
    ].map(({ id, code, label }) => (
      <button
        key={id}
        onClick={() => changeLanguage(id)}
        aria-label={label}
        className={`p-1 h-6 rounded-md transition ring-2 ${
          i18n.language === id
            ? 'ring-blue-500 bg-blue-500/10 shadow'
            : 'ring-transparent hover:ring-blue-400'
        }`}
      >
        <Flag code={code} alt={label} width={24} height={24} />
      </button>
    ))}
  </div>
);


  return (
    <nav className={' w-full flex items-center  fixed top-0 z-20'}>
      <div className="navbar w-full flex justify-between items-center max-w-7xl mx-auto m-1 p-4 bg-glass rounded-3xl">
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            setUnderlineToNone();
            window.scrollTo(0, 0);
            
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain backdrop-invert-0 rounded-3xl' />
          <p className='text-white text-[18px] font-bold flex '>
           Kacper
          </p>
        </Link>

        <ul className='list-none hidden xl:flex flex-row gap-10 nav-menu'>
        {NavLinks.map((link) => (  // Zmienione z links na NavLinks
          <li
            key={link.id}
            className={`relative text-[18px] font-medium cursor-pointer m-2 ${
              active === link.title ? "text-white" : "text-[#a8a8a8]"
            }`}
            onClick={() => handleActive(link)}
          >
            <a className="block w-full h-full" href={`#${link.id}`}>{t(link.title)}</a>
          </li>
        ))}

        <LanguageSwitcher />
        <div id="underline" className="underline"></div>
        </ul>

        {/* Mobile menu */}
        <div className='xl:hidden flex flex-1 justify-end items-center'>
          <input id="checkbox2" type="checkbox" checked={toggle} 
          readOnly/>
          <label className="toggle toggle2" htmlFor="checkbox2" alt="menu"
            onClick={() => setToggle(!toggle)}>
            <div id="bar4" className="bars"></div>
            <div id="bar5" className="bars"></div>
            <div id="bar6" className="bars"></div>
          </label>
       

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 bg-black absolute top-24 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
            {NavLinks.map((link) => (  // Zmienione z links na NavLinks
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-[#a8a8a8]"
                } font-poppins font-medium cursor-pointer text-[16px]`}
               
                onClick={() => handleActive(link)}
              >
                <a href={`#${link.id}`}>{t(link.title)}</a>
              </li>
            ))}
             <LanguageSwitcher />
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
