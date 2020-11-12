import {Spring} from 'react-spring/renderprops';
import React, {useState} from 'react';
import './spring.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import { MenuItem ,Button,Menu} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
      
     
//     },
//     AppBar:{
//         //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
//         backgroundColor:"black",
//         backgroundSize:"cover"
//       },
//     menuButton: {
//       marginRight: theme.spacing(30),
//     },
//     title: {
//       // fontFamily:[	'Racing Sans One'],
//       textAlign:'left',
//       fontSize:'16px',
     
//       cursor:"pointer",
//       padding:"10px",
//       // display: 'swap',
//       [theme.breakpoints.up('sm')]: {
//       display: 'block',
//       },
//     },
//     buttonColor:{
//       fontFamily: [
//         'Racing Sans One', 'cursive',
   
//       ],
//       // fontStyle: 'cursive',
//       fontDisplay: 'swap',
//       fontWeight: 400,
//       textAlign:'left',
//       fontSize:'16px',

//       // cursor:"pointer",
//       // widh:'30px',
     
//       [theme.breakpoints.up('sm')]: {
//       display: 'block',
//       },
//       color:'white',
//     },
//     login:{
//         cursor:"pointer",
//         textAlign:'right',
        
//         padding:"20px",
//         fontSize:'16px',
//         fontFamily: 'Racing+Sans+One',
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(60),
//           display: 'block',
        
       
//         },
//     },
//     search: {
        
//       fontSize:'16px',
      
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
      
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(0),
//         width: 'auto',
//       },
//     },
    
//     searchIcon: {
//       padding: theme.spacing(0, 20),
//       height: '100%',
     
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//     //   justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
   
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '15ch',
//         },
//       },
//     },
//   }));

//   const Navbar = () => {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [anchorEl2, setAnchorEl2] = React.useState(null);
//     const [anchorEl3, setAnchorEl3] = React.useState(null);
//     const [anchorEl4, setAnchorEl4] = React.useState(null);
    
//     const handleClickMainMenu = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleCloseMainMenu = () => {
//       setAnchorEl(null);
//     };  
//     const handleClickAksiya = (event) => {
//       setAnchorEl2(event.currentTarget);
//     };
//     const handleCloseAksiya = () => {
//       setAnchorEl2(null);
//     };
//     const handleClickPayment = (event) => {
//       setAnchorEl3(event.currentTarget);
//     };
//     const handleClosePayment = () => {
//       setAnchorEl3(null);
//     };
//     const handleClickCollectPC = (event) => {
//       setAnchorEl4(event.currentTarget);
//     };
//     const handleCloseCollectPC = () => {
//       setAnchorEl4(null);
//     };

export default function Navbar(){
    return (
        <div className="Navbar">
           {/* <AppBar className={classes.AppBar}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    >
                    <AppBar
                    title={<img src="https://unsplash.it/40/40"/>}/>
                    </IconButton>
            
                </Toolbar>
            </AppBar> */}
            
            <Spring
            from={{  transform: "translate3d(-1000px, 0, 0"}}
            to={{ transform: "translate3d(0px, 0, 0"}}
            config={{duration: 3000}}
            >
                {props => (
                
                    <p style={props}>АКЦИИ ГЛАВНАЯ</p>
                    // <p style={props}>АКЦИИ</p>
                
         
                
                    // <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickPayment}>ОПЛАТА И ДОСТАВКА</Button>,
              
         
             
                    // <Button className={classes.buttonColor} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickCollectPC}> СОБЕРИ СВОЙ ПК</Button>
             
                
                )}
            </Spring>
        </div>
    );
}

