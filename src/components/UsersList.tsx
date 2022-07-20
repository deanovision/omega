import React from 'react';
import { 
  Avatar, 
  Table, 
  Group, 
  Text, 
  ScrollArea, 
  createStyles, 
  TextInput 
} from '@mantine/core';
import { loremIpsum } from '../utils/dummyData'
import { Search } from 'tabler-icons-react';

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
  data: { login: {uuid: string}; picture: {thumbnail: string}; name: {first: string; last: string}; bio: string;}[]
}

function UsersList({ data }: UsersStackProps) {
  const { classes} = useStyles();
  const rows = data.map((item) => (
    <tr key={item.login.uuid}>
      <td>
        <Group spacing="sm">
          <div className={classes.listContainer}>
            <div>
            <Avatar size={50} src={item.picture.thumbnail} radius={40} />
            </div>
            <div className={classes.textContainer}>
              <Text size="md" weight={500}>
                {`${item.name.first} ${item.name.last}`}
              </Text>
              <Text size="sm" lineClamp={1}>{loremIpsum}</Text>
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
      />
      <Table verticalSpacing="lg">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
export default UsersList