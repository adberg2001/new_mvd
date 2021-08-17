import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import cls from "./Layout.module.scss";
import Link from "next/link";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Collapse } from "@material-ui/core";

export default function Nav() {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  const [menus, setMenus] = useState({
    government: false,
    ministry: false,
    civil: false,
    massMedia: false,
  });

  const [mobileMenus, setMobileMenus] = useState({
    government: false,
    ministry: false,
    civil: false,
    massMedia: false,
  });

  const handleMenuOpen = (name) => {
    setMenus({
      ...menus,
      [name]: true,
    });
  };

  const menuRef = useRef(null);
  const mobileNavRef = useRef(null);

  const hideMenus = () => {
    setMenus({
      government: false,
      ministry: false,
      civil: false,
      massMedia: false,
    });
  };

  useOutsideClick(menuRef, hideMenus);
  useOutsideClick(mobileNavRef, () => setBurgerMenuActive(false));

  return (
    <nav className={cls.Nav}>
      <ul className={cls.DesktopNavList}>
        <li>
          <Link href={"/"}>
            <a>Главная</a>
          </Link>
        </li>
        <li
          style={{ position: "relative" }}
          onClick={() => handleMenuOpen("ministry")}
        >
          <Link href={"/"}>
            <a>Министерство</a>
          </Link>

          {menus.ministry && (
            <ul ref={menuRef} className={cls.navLinksMenu}>
              <li>
                <Link href={"/management"}>
                  <a>Руководство</a>
                </Link>
              </li>
              <li>
                <Link href={"/structure"}>
                  <a>Структура</a>
                </Link>
              </li>
              <li>
                <Link href={"/ministry/history"}>
                  <a>История</a>
                </Link>
              </li>
              <li>
                <Link href={"/gov_symbols"}>
                  <a>Государственная символика</a>
                </Link>
              </li>
              <li>
                <Link href={"/ministry/normative-bases"}>
                  <a>Нормативная база</a>
                </Link>
              </li>
              <li>
                <Link href={"/ministry/normative-acts"}>
                  <a>Проекты нормативных актов</a>
                </Link>
              </li>
            </ul>
          )}
          {menus.ministry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>

        <li
          style={{ position: "relative" }}
          onClick={() => handleMenuOpen("civil")}
        >
          <a>Для граждан</a>
          {menus.civil && (
            <ul ref={menuRef} className={cls.navLinksMenu}>
              <li>
                <Link href={"/civil/phone-numbers"}>
                  <a>Телефоны доверия</a>
                </Link>
              </li>
              <li>
                <Link href={"/civil/vacancies"}>
                  <a>Вакансии в ОВД</a>
                </Link>
              </li>
              <li>
                <Link href={"/civil/colleges"}>
                  <a>Учебные заведения МВД КР</a>
                </Link>
              </li>
              <li>
                <Link href={"/civil/rozysk"}>
                  <a>Внимание, розыск!</a>
                </Link>
              </li>
              <li>
                <Link href={"/civil/sign-language-interpreters"}>
                  <a>Список сурдопереводчиков с юридическим уклоном!</a>
                </Link>
              </li>
            </ul>
          )}
          {menus.civil ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>

        <li
          style={{ position: "relative" }}
          onClick={() => handleMenuOpen("massMedia")}
        >
          <a>Для СМИ</a>
          {menus.massMedia && (
            <div ref={menuRef} className={cls.navLinksMenu__massMedia}>
              <h6>Пресс служба МВД</h6>
              <p className={cls.navLinksMenu__massMedia__contacts}>
                Наши контакты:
                <br />
                <a href={"tel: +996 312 26 62 54"}> +996 312 26 62 54</a>
                <br />
                Пресс-центр МВД КР:
                <br />
                <a href={"tel: +996 312 26 62 90"}> +996 312 26 62 90</a>
                <br />
                Email: <a href={"mailto:pressa@mvd.kg"}>pressa@mvd.kg</a>
                <br />
                Адрес: г.Бишкек ул. Фрунзе 469
              </p>
              <Link href={"/photo_gallery"}>
                <a>Фотогалерея</a>
              </Link>
              <Link href={"/video_gallery"}>
                <a>Видеогалерея</a>
              </Link>
            </div>
          )}
          {menus.massMedia ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>

        <li>
          <a href={"/#services"}>Услуги</a>
        </li>

        <li
          style={{ position: "relative" }}
          onClick={() => handleMenuOpen("government")}
        >
          <a>Госпрограмма</a>
          {menus.government && (
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
                <Link href={"/gov_programs/reform"}>
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
                <Link href={"/gov_programs/lang_pro"}>
                  <a>
                    Национальная программа развития государственного языка и
                    совершенствования языковой политики в Кыргызской Республике
                    на 2014-2020 годы
                  </a>
                </Link>
              </li>

              <li>
                <Link href={"/gov_programs/peace_act"}>
                  <a>Миротворческая деятельность</a>
                </Link>
              </li>
            </ul>
          )}
          {menus.government ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>
        <li>
          <a href="/#footer">Контакты</a>
        </li>
        <li>
          <Link href={"/gender-policy"}>
            <a>Гендерная политика</a>
          </Link>
        </li>
        <li>
          <Link href={"/anticorruptional_politic"}>
            <a>Антикоррупционная политика</a>
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
          isBurgerMenuActive ? cls.BurgerMenuBtnActive : "",
        ].join(" ")}
      >
        <span />
        <span />
        <span />
      </div>

      <List
        // ref={mobileNavRef}
        className={[
          cls.MobileNavList,
          isBurgerMenuActive ? cls.MobileNavListActive : "",
        ].join(" ")}
      >
        <ListItem className={cls.ListItem}>
          <Link href="/">
            <a>
              <ListItemText primary="Главная" />
            </a>
          </Link>
        </ListItem>

        <ListItem
          button
          className={cls.ListItem}
          onClick={() =>
            setMobileMenus({
              ...mobileMenus,
              ministry: !mobileMenus.ministry,
            })
          }
        >
          <ListItemText primary="Министерство" />
          {mobileMenus.ministry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={mobileMenus.ministry} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={cls.Nested}>
              <Link href={"/management"}>
                <a>
                  <ListItemText primary={"Руководство"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/structure"}>
                <a>
                  <ListItemText primary={"Структура"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/ministry/history"}>
                <a>
                  <ListItemText primary={"История"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <ListItemText primary={"Государственная символика"} />
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/ministry/normative-bases"}>
                <a>
                  <ListItemText primary={"Нормативная база"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/ministry/normative-acts"}>
                <a>
                  <ListItemText primary={"Проекты нормативных актов"} />
                </a>
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() =>
            setMobileMenus({
              ...mobileMenus,
              civil: !mobileMenus.civil,
            })
          }
          className={cls.ListItem}
        >
          <ListItemText primary="Для граждан" />
          {mobileMenus.civil ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={mobileMenus.civil} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={cls.Nested}>
              <Link href={"/civil/phone-numbers"}>
                <a>
                  <ListItemText primary={"Телефоны доверия"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/vacancies"}>
                <a>
                  <ListItemText primary={"Вакансии в ОВД"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/collages"}>
                <a>
                  <ListItemText primary={"Учебные заведения МВД КР"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/civil/rozysk"}>
                <a>
                  <ListItemText primary={"Внимание, розыск!"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/civil/sign-language-interpreters"}>
                <a>
                  <ListItemText
                    primary={"Список сурдопереводчиков с юридическим уклоном!"}
                  />
                </a>
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() =>
            setMobileMenus({
              ...mobileMenus,
              massMedia: !mobileMenus.massMedia,
            })
          }
          className={cls.ListItem}
        >
          <ListItemText primary="Для СМИ" />
          {mobileMenus.massMedia ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={mobileMenus.massMedia} timeout={"auto"} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={cls.Nested}>
              <ListItemText primary={"Наши контакты:"} />
            </ListItem>

            <ListItem className={cls.Nested}>
              <a href={"tel: +996 312 26 62 54"}> +996 312 26 62 54</a>
            </ListItem>

            <ListItem className={cls.Nested}>
              <ListItemText primary={"Пресс-центр МВД КР:"} />
            </ListItem>

            <ListItem className={cls.Nested}>
              <a href={"tel: +996 312 26 62 90"}> +996 312 26 62 90</a>
            </ListItem>

            <ListItem className={cls.Nested}>
              Email: <a href={"mailto:pressa@mvd.kg"}>pressa@mvd.kg</a>
            </ListItem>

            <ListItem className={cls.Nested}>
              <ListItemText primary={"Адрес: г.Бишкек ул. Фрунзе 469"} />
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/photo_gallery"}>
                <a>
                  <ListItemText primary={"Фотогалерея"} />
                </a>
              </Link>
            </ListItem>

            <ListItem className={cls.Nested}>
              <Link href={"/video_gallery"}>
                <a>
                  <ListItemText primary={"Видеогалерея"} />
                </a>
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem className={cls.ListItem}>
          <a href={"/#services"}>
            <ListItemText primary="Услуги" />
          </a>
        </ListItem>

        <ListItem
          button
          onClick={() =>
            setMobileMenus({
              ...mobileMenus,
              government: !mobileMenus.government,
            })
          }
          className={cls.ListItem}
        >
          <ListItemText primary="Госпрограмма" />
          {mobileMenus.government ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={mobileMenus.government} timeout={"auto"} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={cls.Nested}>
              <a
                href="https://mvd.gov.kg/rus/program-gov/program-1"
                target="_blank"
                rel="noreferrer"
              >
                Программа по переходу Кыргызской Республики к устойчивому
                развитию на 2013-2017
              </a>
            </ListItem>
            <ListItem className={cls.Nested}>
              <Link href={"/gov_programs/reform"}>
                <a>
                  <ListItemText primary={"Меры по реформированию ОВД КР"} />
                </a>
              </Link>
            </ListItem>
            <ListItem className={cls.Nested}>
              <a
                href="https://mvd.gov.kg/rus/program-gov/testimonial2"
                target="_blank"
                rel="noreferrer"
              >
                Проекты и их реализация
              </a>
            </ListItem>
            <ListItem className={cls.Nested}>
              <Link href={"/gov_programs/lang_pro"}>
                <a>
                  Национальная программа развития государственного языка и
                  совершенствования языковой политики в Кыргызской Республике на
                  2014-2020 годы
                </a>
              </Link>
            </ListItem>
            <ListItem className={cls.Nested}>
              <Link href={"/gov_programs/peace_act"}>
                <a>
                  <ListItemText primary={"Миротворческая деятельность"} />
                </a>
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem className={cls.ListItem}>
          <ListItemText primary="Контакты" />
        </ListItem>
        <ListItem className={cls.ListItem}>
          <Link href="https://mvd.gov.kg/gendernaya-politika.html">
            <a target="_blank">
              <ListItemText primary={"Политика"} />
            </a>
          </Link>
        </ListItem>
      </List>
    </nav>
  );
}
