import React, { useState, useContext } from 'react';
import AuthorizedUserContext from '../contexts/AuthorizedUserContext'
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Image, Button } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {useNavigate} from 'react-router-dom'
import logo from '../assets/omegalogo1.png'
import { logout } from '../firebase/authorizeUsers';
import ToggleColorScheme from './ToggleColorScheme.tsx';
const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    maxWidth: "120px",
    height: "auto"
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function NavBar({ links}: HeaderResponsiveProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const {isAuthorized, setIsAuthorized} = useContext(AuthorizedUserContext)
  let navigate = useNavigate()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggleOpened(false);
        navigate(link.link, {replace: true})
      }}
    >
      {link.label}
    </a>
  ));
  
  const handleAuth = (e) => {
    isAuthorized ? logout(e, setIsAuthorized) : navigate("../auth/login", {replace: true})
  }
  console.log("Authenticated?", isAuthorized)
  return (
    
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
      <Image
        className={classes.logo}
        src={logo}
        alt="Omega Logo"
      />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <ToggleColorScheme />
        <Button radius="xl" onClick={(e)=> handleAuth(e)}>
          {isAuthorized ? "Logout" : "Login"}
        </Button>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
export default NavBar