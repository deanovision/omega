import React, { useState } from "react";
import { Modal, ActionIcon, Group, useMantineTheme } from "@mantine/core";
import { WritingSign } from "tabler-icons-react";
import AddPost from "./AddPost";

function PostModal() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        padding="xs"
        radius={25}
        centered
      >
        <AddPost setOpened={setOpened} />
      </Modal>
      <Group position="center">
        <ActionIcon
          size="xl"
          radius={100}
          variant="light"
          color={theme.colors.blue[3]}
          onClick={() => setOpened(true)}
        >
          <WritingSign strokeWidth={1} size={50} />
        </ActionIcon>
      </Group>
    </>
  );
}
export default PostModal;
