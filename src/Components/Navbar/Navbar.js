import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { MenuItem ,Button,Menu} from '@material-ui/core';
import './Navbar.css';
import logo from '../Images/1.jpeg';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
     
    },
    AppBar:{
        //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
        backgroundColor:"black",
        backgroundSize:"cover"
      },
    menuButton: {
      marginRight: theme.spacing(30),
    },
    title: {
      // fontFamily:[	'Racing Sans One'],
      textAlign:'left',
      fontSize:'16px',
     
      cursor:"pointer",
      padding:"10px",
      // display: 'swap',
      [theme.breakpoints.up('sm')]: {
      display: 'block',
      },
    },
    buttonColor:{
      fontFamily: [
        'Racing Sans One', 'cursive',
   
      ],
      // fontStyle: 'cursive',
      fontDisplay: 'swap',
      fontWeight: 400,
      textAlign:'left',
      fontSize:'16px',

      // cursor:"pointer",
      // widh:'30px',
     
      [theme.breakpoints.up('sm')]: {
      display: 'block',
      },
      color:'white',
    },
    login:{
        cursor:"pointer",
        textAlign:'right',
        
        padding:"20px",
        fontSize:'16px',
        fontFamily: 'Racing+Sans+One',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(60),
          display: 'block',
        
       
        },
    },
    search: {
        
      fontSize:'16px',
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
      },
    },
    
    searchIcon: {
      padding: theme.spacing(0, 20),
      height: '100%',
     
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
   
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '15ch',
        },
      },
    },
  }));
  

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    
    const handleClickMainMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMainMenu = () => {
      setAnchorEl(null);
    };  
    const handleClickAksiya = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleCloseAksiya = () => {
      setAnchorEl2(null);
    };
    const handleClickPayment = (event) => {
      setAnchorEl3(event.currentTarget);
    };
    const handleClosePayment = () => {
      setAnchorEl3(null);
    };
    const handleClickCollectPC = (event) => {
      setAnchorEl4(event.currentTarget);
    };
    const handleCloseCollectPC = () => {
      setAnchorEl4(null);
    };
    
    return (
        <div className={classes.root}>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
            <AppBar
            title={<img src={logo} style={{width: '100px'}}/>}/>
            </IconButton>
       <div >
      <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMainMenu}>
        
      ГЛАВНАЯ
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMainMenu}
      >
        <MenuItem onClick={handleCloseMainMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMainMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMainMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMainMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMainMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMainMenu}>Logout</MenuItem>
      </Menu>
      </div>
      <div >
      <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAksiya}>
        
      АКЦИИ
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleCloseAksiya}
      >
        <MenuItem onClick={handleCloseAksiya}>Profile</MenuItem>
     
        <MenuItem onClick={handleCloseAksiya}>My account</MenuItem>
      
      </Menu>
      </div>
       <div >
      <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickPayment}>
        
      ОПЛАТА И ДОСТАВКА
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl3}
        keepMounted
        open={Boolean(anchorEl3)}
        onClose={handleClosePayment}
      >
        <MenuItem onClick={handleClosePayment}>Profile</MenuItem>
     
        <MenuItem onClick={handleClosePayment}>My account</MenuItem>
      
      </Menu>
      </div>
      <div >
      <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickCollectPC}>
        
      СОБЕРИ СВОЙ ПК
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleCloseCollectPC}
      >
        <MenuItem onClick={handleCloseCollectPC}>Profile</MenuItem>
     
        <MenuItem onClick={handleCloseCollectPC}>My account</MenuItem>
      
      </Menu>
      </div>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
            
              </div>
              <InputBase className={classes.Input}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
   
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
