import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
    AppBar:{
       
   
       
        //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
        backgroundColor:"#2F3133",
        backgroundSize:"cover"
      },
    menuButton: {
      marginRight: theme.spacing(20),
    },
    title: {
      textAlign:'left',
      fontSize:'16px',
      cursor:"pointer",
      padding:"20px",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
     
      },
    },
    login:{
        cursor:"pointer",
        textAlign:'right',
        padding:"20px",
        fontSize:'16px',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(60),
          display: 'block',
       
        },
    },
    search: {
        
        fontSize:'16px',
      position: 'relative',
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
             
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
             ГЛАВНАЯ
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
            АКЦИИ
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
              ОПЛАТА И ДОСТАВКА
            </Typography>
            <Typography className={classes.title} variant="h6" noWrap>
            СОБЕРИ СВОЙ ПК
            </Typography>
           
            <Typography className={classes.login} variant="h6" noWrap>
            LOGIN 
            </Typography>
          
            
           
            <div className={classes.search}>
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
            </div>
   
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
