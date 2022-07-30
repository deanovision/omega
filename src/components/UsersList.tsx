import {useState, useEffect} from 'react';
import { 
  Avatar, 
  Table, 
  Group, 
  Text, 
  ScrollArea, 
  createStyles, 
  TextInput ,
  ActionIcon,
} from '@mantine/core';
import { Search, ArrowRight} from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  listContainer: {
    display: "flex"
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  userInfo: {
    width: "90%"
  },
  buttonContainer: {
    width: "10%"
  },

  textContainer: {
    width: "100%",
    textAlign: "left", 
    justifyContent: "space-between",
    paddingLeft: 20
  },
}));

interface UsersStackProps {
  data: { uid: string; avatarUrl: string; name: string; bio: string;}[]
}

function UsersList({ data }: UsersStackProps) {
  // const theme = useMantineTheme();
  const [users] = useState(data)
  const [search, setSearch] = useState("")
  const { classes} = useStyles();

  useEffect(()=> {
    // implement extended search by 
    // querying database if search results 
    // from filtered array ever hits 0
    // database query would include the 
    // current search term and set new 
    // usersList based on what is returned
  }, [])

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  })
  const rows = filteredUsers.map((item) => (
    <tr key={item.uid}>
      <td>
        <Link className={classes.container} style={{textDecoration: 'none', color: 'inherit'}} to={`/auth/users/${item.uid}`}>
        <Group className={classes.userInfo} spacing="sm">
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
        </Link>
      </td>
    </tr>
  ));
  const handleChanges = e => {
    setSearch(e.target.value)
  }

  return (
    <ScrollArea>
      <TextInput
        onChange={(e)=> handleChanges(e)}
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