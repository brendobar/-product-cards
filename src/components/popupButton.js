import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Popup from './Popup'






export default function PopupButton(){



    const call = {
        position:'unset',
        padding: '.3vw 3vw',
        color:'white',
        backgroundColor:'#F13C6E',
        borderRadius:'20px'
      }
            
      const [open, setOpen] = React.useState(false)
      const [scroll, setScroll] = React.useState('paper');
  
      const handleClickOpen = (scrollType) => () => {
          setOpen(true);
          setScroll(scrollType);
      };
  
      const handleClose = () => {
          setOpen(false);
      };
  
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
          if (open) {
              const { current: descriptionElement } = descriptionElementRef;
              if (descriptionElement !== null) {
                  descriptionElement.focus();
              }
          }
      }, [open]);

    


  return (
    <div>
        <Button style={call} variant="outlined" onClick={handleClickOpen('body')}>Купить</Button>
            <Dialog style={{backgroundColor:'#00000050'}}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">

                <DialogTitle id="scroll-dialog-title"><p style={{fontSize:'2vw', textAlign:'center'}}>Оформление заявки</p></DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>

                        <Popup/>

                    </DialogContentText>
                </DialogContent>
                    
            </Dialog>
    </div>
  );
}