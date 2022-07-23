import React from 'react';
import { createStyles, Container, Group, Anchor, Image } from '@mantine/core';
import logo from '../assets/omegalogo4.png'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : "#fff",
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  logo: {
    maxWidth: "120px",
    height: "auto"
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

function SimpleFooter({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Image
        src={logo}
        alt="Omega Logo"
        height={75}
        className={classes.logo}
      />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
export default SimpleFooter