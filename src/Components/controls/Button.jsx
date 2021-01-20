import React from 'react'

import { Button as MuiButton, makeStyles } from "@material-ui/core";

export default function Button(props){
  
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(10),
            outlineColor: 'pink'
        },
      
    }));
    const {text,size,color,variant,onClick,...others}=props
    const classes = useStyles();
    return (
        <MuiButton 
          variant={variant || "contained"}
          size={size || "large"}
          color={color|| "secondary"}
          onClick={onClick}
          {...others}
          classes={{root:classes.root}}
          >
        </MuiButton>
    )
}


