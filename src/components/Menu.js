import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ProductList from "./ProductList";
import ProductRegister from "./ProductRegister";
import CategoryList from "./CategoryList";
import CategoryRegister from "./CategoryRegister";
import { Container } from "@mui/system";
import { Category, FormatListNumberedRtl, Inventory2 } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Menu() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [visivel, setVisivel] = React.useState(1)

    function SeletorDeComponente() {
        if (visivel === 1) {
            return <ProductRegister texto={"Cadastro de Produtos"} />
        } else if (visivel === 2) {
            return <ProductList texto={"Lista de Produtos"} />
        } else if (visivel === 3) {
            return <CategoryRegister texto={"Cadastro de Categorias"} />
        } else {
            return <CategoryList texto={"Lista de Categorias"} />
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Gerenciador de Produtos
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem onClick={() => (setVisivel(1))} key={1} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory2 />
                            </ListItemIcon>
                            <ListItemText primary={"Cadastro de  Produtos"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => (setVisivel(2))} key={2} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatListNumberedRtl />
                            </ListItemIcon>
                            <ListItemText primary={"Lista de Produtos"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => (setVisivel(3))} key={3} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Category />
                            </ListItemIcon>
                            <ListItemText primary={"Cadastro de Categorias"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => (setVisivel(4))} key={4} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatListNumberedRtl />
                            </ListItemIcon>
                            <ListItemText primary={"Lista de Categorias"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />

                <Container>
                    {SeletorDeComponente()}
                </Container>
            </Main>
        </Box>
    );
}
