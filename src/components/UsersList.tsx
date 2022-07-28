import React from 'react';
import { 
  Avatar, 
  Table, 
  Group, 
  Text, 
  ScrollArea, 
  createStyles, 
  TextInput ,
  ActionIcon
} from '@mantine/core';
import { Search, ArrowRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  listContainer: {
    display: "flex"
  },

  textContainer: {
    textAlign: "left", 
    paddingLeft: 20
  },
}));

interface UsersStackProps {
  data: { uid: string; avatarUrl: string; name: string; bio: string;}[]
}

function UsersList({ data }: UsersStackProps) {
  const { classes} = useStyles();
  const rows = data.map((item) => (
    <tr key={item.uid}>
      <td>
        <Group spacing="sm">
          <div className={classes.listContainer}>
            <div>
            <Avatar size={50} src={item.avatarUrl} radius={40} />
            </div>
            <div className={classes.textContainer}>
              <Text size="md" weight={500}>
                {item.name}
              </Text>
              <Text size="sm" lineClamp={1}>{item.bio}</Text>
            </div>
          </div>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search"
        radius="xl"
        size="md"
        required
        icon={<Search size={14} />}
        rightSection={
        <ActionIcon size={32} radius="xl" color="blue" variant="filled">
          <ArrowRight />
        </ActionIcon>
        }
      />
      <Table verticalSpacing="lg">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
export default UsersList