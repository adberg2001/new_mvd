import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import cls from './Layout.module.scss';
import Link from 'next/link';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function Nav() {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  const [menus, setMenus] = useState({
    goverment: false,
    ministry: false,
    civils: false,
  });

  const handleMenuOpen = (name) => {
    setMenus({
      ...menus,
      [name]: true,
    });
  };

  const menuRef = useRef(null);

  const hideMenus = () => {
    setMenus({
      goverment: false,
      ministry: false,
      civils: false,
    });
  };

  useOutsideClick(menuRef, hideMenus);

  return (
    <nav className={cls.Nav}>
      <ul className={cls.DesktopNavList}>
        <li>
          <Link href={'/'}>
            <a>Главная</a>
          </Link>
        </li>
        <li
          style={{ position: 'relative' }}
          onClick={() => handleMenuOpen('ministry')}
        >
          <Link href={'/'}>
            <a>Министерство</a>
          </Link>

          {menus.ministry && (
            <ul ref={menuRef} className={cls.navLinksMenu}>
              <li>
                <Link href="/management">
                  <a>Руководсво</a>
                </Link>
              </li>
              <li>Структура</li>
              <li>
                <Link href="/ministry/history">
                  <a>История</a>
                </Link>
              </li>
              <li>Государственная символика</li>
              <li>
                <Link href="/ministry/normative-bases">
                  <a>Нормативная база</a>
                </Link>
              </li>
              <li>
                <Link href="/ministry/normative-acts">
                  <a>Проекты нормативных актов</a>
                </Link>
              </li>
            </ul>
          )}
          {menus.ministry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>

        <li
          style={{ position: 'relative' }}
          onClick={() => handleMenuOpen('civils')}
        >
          <a>Для граждан</a>
          {menus.civils && (
            <ul ref={menuRef} className={cls.navLinksMenu}>
              <li>
                <Link href="/civils/phone-numbers">
                  <a>Телефоны доверия</a>
                </Link>
              </li>
              <li>
                <Link href="/vacancies">
                  <a>Вакансии в ОВД</a>
                </Link>
              </li>
              <li>
                <Link href="/civils/rozysk">
                  <a>Внимание, розыск!</a>
                </Link>
              </li>
              <li>
                <Link href="/civils/sign-language-interpreters">
                  <a>Список сурдопереводчиков с юридическим уклоном!</a>
                </Link>
              </li>
            </ul>
          )}
          {menus.civils ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>
        <li>
          <a href="#services">Услуги</a>
        </li>
        <li
          style={{ position: 'relative' }}
          onClick={() => handleMenuOpen('goverment')}
        >
          <a>Госпрограмма</a>
          {menus.goverment && (
            <ul ref={menuRef} className={cls.navLinksMenu}>
              <li>
                <a
                  href="https://mvd.gov.kg/rus/program-gov/program-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Программа по переходу Кыргызской Республики к устойчивому
                  развитию на 2013-2017
                </a>
              </li>
              <li>
                <Link href={'/gov_programs/reform'}>
                  <a href="">Меры по реформированию ОВД КР</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://mvd.gov.kg/rus/program-gov/testimonial2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Проекты и их реализация
                </a>
              </li>
              <li>
                <Link href={'/gov_programs/lang_pro'}>
                  <a>
                    Национальная программа развития государственного языка и
                    совершенствования языковой политики в Кыргызской Республике
                    на 2014-2020 годы
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/gov_programs/peace_act">
                  <a>Миротворческая деятельность</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#footer">Контакты</a>
        </li>
        <li>
          <Link href="/gender-policy">
            <a>Гендарная политика</a>
          </Link>
        </li>
        <li>
          <a href="">Рус/Кыр</a>
        </li>
      </ul>

      <div
        onClick={() => setBurgerMenuActive(!isBurgerMenuActive)}
        className={[
          cls.BurgerMenuBtn,
          isBurgerMenuActive ? cls.BurgerMenuBtnActive : '',
        ].join(' ')}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={[
          cls.MobileNavList,
          isBurgerMenuActive ? cls.MobileNavListActive : '',
        ].join(' ')}
      >
        <li>Главная</li>
        <li>Министерство</li>
        <li>Для граждан</li>
        <li>Услуги</li>
        <li>Госпрограмма</li>
        <li>Контакты</li>
        <li>
          <Link href="https://mvd.gov.kg/gendernaya-politika.html">
            <a target="_blank">Политика</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
