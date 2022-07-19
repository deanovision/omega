import React from 'react';
import { createStyles, Card } from '@mantine/core';
// import { Users } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    maxWidth: "820px",
    margin: "auto",
    borderRadius: "0px"
  },
  cardDetails: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : "#f2f2f4",
    maxWidth: "820px",
    margin: "auto"
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
  userDetails: {
    marginLeft: "auto",
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

function UserCardPlusBackground({ image, avatar, name, job}: UserCardImageProps) {
//removed theme from line below
  const { classes} = useStyles();


  return (
    <Card p="xl" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 220 }} />
      {/* <Avatar src={avatar} size={160} radius={100} mx="auto" mt={-130} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text> */}
    </Card>
  );
}
export default UserCardPlusBackground