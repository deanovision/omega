import { useState } from 'react';
import { Drawer, Button, Group, createStyles } from '@mantine/core';
import UpdateProfile from '../pages/updateprofile/UpdateProfile';
import { UserPlus } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  button: {
    // position: "sticky",
    // bottom: 10,
    // zIndex: 2,
    // borderRadius: 100
  }

}));

function EditProfileDrawer({user, align}) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
      >
        <UpdateProfile user={user} setOpened={setOpened} />
      </Drawer>

      <Group position={align}>
        <Button 
          size="xs" 
          uppercase
          leftIcon={<UserPlus size={20} />}
          variant="outline"
          className={classes.button} onClick={() => setOpened(true)}>
            Edit Profile
        </Button>
      </Group>
    </>
  );
}
export default EditProfileDrawer