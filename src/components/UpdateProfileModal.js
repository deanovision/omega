import { useState } from 'react';
import { Modal, Button, Group, createStyles } from '@mantine/core';
import UpdateProfile from '../pages/updateprofile/UpdateProfile';
import { UserPlus } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
  button: {
    // position: "sticky",
    // bottom: 10,
    // zIndex: 2,
    // borderRadius: 100
  }

}));

function UpdateProfileModal({user, align}) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
        padding="xs"
      >
        <UpdateProfile user={user} setOpened={setOpened} />
      </Modal>

      <Group>
        <Button 
          size="xs" 
          mt={10}
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
export default UpdateProfileModal