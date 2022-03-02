import React, {useState} from 'react'
import "./Nav_bar.css"
import {AppBar, List, Toolbar, Button, Container, Avatar, Hidden, SwipeableDrawer, ListItem} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
function Nav_bar() {
    const [showMenu, set_showMenu] = useState(false); 

  return (
        <div>
            <AppBar className='Nav_bar__AppBar' position='relative'> 
                <Container maxWidth="md"> 
                    <Toolbar  disableGutters> 
                    <Avatar variant="rounded" className='Nav_bar__Button'> RM</Avatar>

                    <Hidden xsDown>
                        
                            <Button className='Nav_bar__Button' variant="button" underline="none">Home</Button> 
                            <Button className='Nav_bar__Button' variant="button" underline="none">Furniture</Button> 
                            <Button className='Nav_bar__Button' variant="button" underline="none">Inspiration</Button> 
                            <Button className='Nav_bar__Button' variant="button" underline="none">Materials</Button> 
                            <Button className='Nav_bar__Button' variant="button" underline="none">About</Button> 
                        
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={()=>set_showMenu(true)}>
                            <MenuIcon />
                        </IconButton>

                    </Hidden>
                    </Toolbar>
                </Container>
                <SwipeableDrawer open={showMenu} onOpen={() => set_showMenu(true)} onClose={() => set_showMenu(false)} anchor="top">
                    <Button onClick={()=>set_showMenu(false)}> Close </Button>
                    <List>
                        <ListItem>
                            Hey
                        </ListItem>
                    </List>


                </SwipeableDrawer>
            </AppBar>

        </div>
  )
}

export default Nav_bar