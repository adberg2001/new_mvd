import cls from "./RubricsNav.module.scss"
import {Button, Card, Menu, MenuItem} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import React from "react";
import {Link} from "next/link"

export default function RubricsNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={cls.RubricsNav}>
        <Card className={`${cls.desc_menu}`} style={{borderRadius: 25, padding: 18}}>
          <h3 className={`mb-4`}>Рубрики</h3>
          <ul>
            <li>
              <Link href={''}>
                <a href="">Вопросы миграции</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Безопасный город</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Туризм</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Безопасность граждан</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Криминалистика</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Мнение общественности</a>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <a href="">Новости министерства</a>
              </Link>
            </li>
          </ul>
        </Card>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={`${cls.menu_button}`}
                variant='contained' color='primary'
                style={{backgroundColor: "#0094ff"}}>
          <MenuIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Вопросы миграции</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Безопасный город</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Безопасность граждан</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Криминалистика</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Мнение общественности</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Новости министерства</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href={''}>
              <a href="">Туризм</a>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </>
  )
}
