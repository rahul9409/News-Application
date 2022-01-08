import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Nav.css'
import categories from '../data/Category';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// import { createMuiTheme, ThemeProvider,useMediaQuery} from '@material-ui/core';
export default function Drawer({setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });
//  const theme=React.useMemo(
//    ()=>
//    createMuiTheme({
//      palette:{
//        type:prefersDarkMode ? "dark":"light"
//      },
//    }),
//    [prefersDarkMode]
//  );
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            Categories
          </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem button key={text} onClick={()=>setCategory(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="button" onClick={toggleDrawer(anchor, true)}
          style={{color:"grey"}}>
              <MenuRoundedIcon/>
        </Button>
        <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
      ))}
    </div>
  );
}