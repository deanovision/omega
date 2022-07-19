import { useState } from 'react';
import { Drawer, Button, Group, createStyles } from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  button: {
    position: "sticky",
    bottom: 10,
    zIndex: 2,
    borderRadius: 100
  }

}));

function SimpleDrawer({content}) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        {content}
      </Drawer>

      <Group position="center">
        <Button leftIcon={<Menu2 />} className={classes.button} onClick={() => setOpened(true)}>Options</Button>
      </Group>
    </>
  );
}
export default SimpleDrawer