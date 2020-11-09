import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ViewListIcon from '@material-ui/icons/ViewList';
import ContactsIcon from '@material-ui/icons/Contacts';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
   
  },

  media: {
    height: 0,
    backgroundColor: 'black',
    paddingTop: '56.25%', 
  },

  mainRoot: {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'black',
  textAlign: 'center',
  color: 'white'

 },
  
  mainRoot1: {
  width: '100%',
  textAlign: 'left',
  backgroundColor: 'black',
  color: 'white'

},

  mainRoot2: {
  width: '100%',
  textAlign: 'left',
  backgroundColor: 'black',
},

  mainRoot3: {
  width: '100%',
  textAlign: 'left',
  backgroundColor: 'black',
},

  cardBody:{
  backgroundColor: 'black'
  }

}));

export default function Footer(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openText, setOpenText] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);  
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
 
return(
  <div className={classes.mainRoot}>   
  {/* //card1  */}
    <div className={classes.mainRoot1}>    
      <Card className={classes.root}>
    
      <BottomNavigation className={classes.root}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          
          <BottomNavigationAction  className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })} label="О компании" onClick={handleExpandClick}  icon={<BusinessIcon className={classes.root}/>} />
      </BottomNavigation>
      
      <CardActions disableSpacing>

        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph label="О компании"  icon={<BusinessIcon />} >О компании</Typography>
          <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Акции</Typography>
          <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Сотрудничество</Typography> 
          <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Новости</Typography>
        </CardContent>
      </Collapse>
    </Card>
   </div>

{/* //Card2 */}
   <div className={classes.mainRoot2}>
    <Card className={classes.root}>
      <BottomNavigation className={classes.root}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          
          <BottomNavigationAction  className={clsx(classes.expand,  {
              [classes.expandOpen]: expanded2, 
            },classes.root)} label="Каталог" onClick={handleExpandClick2}  icon={<ViewListIcon className={classes.root} />} />
      </BottomNavigation>
        
        <CardActions disableSpacing>
        </CardActions>
        <Collapse in={expanded2}>
          <CardContent>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Ноутбуки</Typography>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Комплектующие</Typography>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Принтеры и МФУ</Typography> 
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Компьютеры</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
   
   {/* //card3 */}
    <div className={classes.mainRoot3}>    
      <Card className={classes.root}>     
        <BottomNavigation className={classes.root}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >          
            <BottomNavigationAction  className={clsx(classes.expand, {
                [classes.expandOpen]: expanded3,
              })} label="О контакты" onClick={handleExpandClick3}  icon={<ContactsIcon className={classes.root} />} />
        </BottomNavigation>
        
        <CardActions disableSpacing>        
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Оплата и доставка</Typography>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >+99899 999-99-99</Typography>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Узбекистан, Ташкент</Typography> 
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Шайхантахур р-н</Typography>
            <Typography paragraph label="О компании"  icon={<BusinessIcon />} >Абай 4а улица</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>



  </div>


  );
}
