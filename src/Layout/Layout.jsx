import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import Switcher from "../components/Switcher";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuIcon from "@mui/icons-material/Menu";
const Layout = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="h-[120px] m-auto w-[1400px] sm:w-[340px] md:w-[600px] flex items-center justify-between">
        <div className="">
          <Link to={'/'}><img className="md:h-[40px]" src={logo} alt="" /></Link>
        </div>
        <div className="flex md:hidden sm:hidden md:text-[11px] dark:text-[#ffffff78] items-center gap-x-[40px]">
          <Link to={"/Как покупать"}><p>Как покупать</p></Link>
          <p>Распродажи</p>
          <p>Цены</p>
          <p>Помощь</p>
          <p>Бонусы</p>
          <p>Блог</p>
          <p>Магазины</p>
        </div>
        <div className="flex items-center">
          <div className="mr-[20px]">
            <Switcher />
          </div>
          <button className="flex sm:hidden items-center">
            <img className="md:h-[25px]" src={user} alt="" />
            <p className="ml-[11px] dark:text-[#ffffff78] md:text-[13px]">
              Вход
            </p>
          </button>
          <button className="h-[48px] md:hidden sm:hidden w-[170px] rounded-[36px] md:h-[40px] md:w-[150px] md:text-[13px] bg-[#00C97B] ml-[42px] text-[white]">
            Связаться с нами
          </button>
          <div className="hidden md:ml-[30px] md:block sm:block ">
            <React.Fragment>
              <Button variant="outlined" onClick={handleClickOpen}>
                <MenuIcon />
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <div className="flex text-[black] md:text-[11px] items-center gap-x-[40px]">
                    <p>Как покупать</p>
                    <p>Распродажи</p>
                    <p>Цены</p>
                    <p>Помощь</p>
                    <p>Бонусы</p>
                    <p>Блог</p>
                    <p>Магазины</p>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleClose} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
