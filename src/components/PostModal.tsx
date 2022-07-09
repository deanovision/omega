import { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';
import Post from './Post.tsx'

function PostModal() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
        <>
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        >
          <Post />
        </Modal>
        <Group position="center">
            <Button onClick={() => setOpened(true)}>Create a post</Button>
        </Group>
        </>

    );
}
export default PostModal