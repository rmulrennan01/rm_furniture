import React, {useState} from 'react'
import "./Nav_bar.css"
import {Link, AppBar, List, Toolbar, Button, Container, Avatar, Hidden, SwipeableDrawer, ListItem} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
function Navbar() {
    const [showMenu, set_showMenu] = useState(false); 

  return (
        <div>
            <AppBar className='Nav_bar__AppBar' position='relative'> 
                <Container maxWidth="md"> 
                    <Toolbar  disableGutters> 
                    <Avatar variant="rounded" className='Nav_bar__Button'> RM</Avatar>

                    <Hidden xsDown>
                        
                            <Link className='Nav_bar__Button' href="/" underline="none">Home</Link> 
                            <Link className='Nav_bar__Button' href="/Products"  underline="none">Furniture</Link> 
                            <Link className='Nav_bar__Button'  underline="none">Inspiration</Link> 
                            <Link className='Nav_bar__Button' underline="none">Materials</Link> 
                            <Link className='Nav_bar__Button'  underline="none">About</Link> 
                        
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={()=>set_showMenu(true)}>
                            <MenuIcon />
                        </IconButton>

                    </Hidden>
                    </Toolbar>
                </Container>
                <SwipeableDrawer open={showMenu} onOpen={() => set_showMenu(true)} onClose={() => set_showMenu(false)} anchor="top">
                    <Link onClick={()=>set_showMenu(false)} className='Nav_bar__Button' underline="none"> Close </Link>
                    <List>
                        <ListItem>
                            <Link className='Nav_bar__Button' href="/" underline="none">Home</Link> 
                            
                        </ListItem>
                        <ListItem>
                            <Link className='Nav_bar__Button' href="/Products"  underline="none">Furniture</Link> 
                        </ListItem>
                        <ListItem>
                            <Link className='Nav_bar__Button' href="/Products"  underline="none">Inspiration</Link> 
                        </ListItem>
                        <ListItem>
                            <Link className='Nav_bar__Button' href="/Products"  underline="none">Materials</Link> 
                        </ListItem>
                        <ListItem>
                            <Link className='Nav_bar__Button' href="/Products"  underline="none">About</Link> 
                        </ListItem>
                        
                    </List>


                </SwipeableDrawer>
            </AppBar>

        </div>
  )
}

export default Navbar