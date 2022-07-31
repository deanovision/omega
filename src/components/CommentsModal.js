import { Modal, useMantineTheme } from "@mantine/core";
// import { useState } from "react";
function CommentsModal({ content, modalOpen, setModalOpen }) {
  //   const [opened, setOpened] = useState(modalOpen);
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      onClose={() => setModalOpen(false)}
      opened={modalOpen}
      size="lg"
    >
      {content}
    </Modal>
  );
}
export default CommentsModal;
