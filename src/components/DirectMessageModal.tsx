import React, { useState } from "react";
import { Modal, Group, useMantineTheme, Button } from "@mantine/core";
import { MailForward } from "tabler-icons-react";
import AddDirectMessage from "./AddDirectMessage";

function DirectMessageModal({ recipient }) {
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
        <AddDirectMessage {...{ recipient, setOpened }} />
      </Modal>
      <Group position="center">
        <Button
          size="xs"
          variant="outline"
          mt={10}
          color={theme.colors.blue[3]}
          onClick={() => setOpened(true)}
          leftIcon={<MailForward strokeWidth={1} />}
        >
          SEND MESSAGE
        </Button>
      </Group>
    </>
  );
}
export default DirectMessageModal;
