import React from 'react';
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { Users, Notebook} from 'tabler-icons-react';
import PostModal from './PostModal.tsx'

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  stats: {label: string, value: string}[];
  email: string;
}

function UserCardWithButton({ avatar, name, title, stats, email }: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
        <Group mr={400} mb={20} noWrap>
            <Avatar src={avatar} size={50} radius={100}  />
            <div>
                <Text size="lg" weight={500} className={classes.name}>
                    {name}
                </Text>
                <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                    @username
                </Text>
            </div>
        </Group>
        <Group noWrap>
            <div>
            {/* <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                {title}
            </Text>

            <Text size="lg" weight={500} className={classes.name}>
                {name}
            </Text> */}

            <Group noWrap spacing={10} mt={3}>
                <Notebook size={16} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  185 Posts
                </Text>
                <Users size={16} className={classes.icon} />
                <Text size="sm" color="dimmed">
                  500 Followers
                </Text>
            </Group>
            </div>
        </Group>
    </div>
  );
}
export default UserCardWithButton