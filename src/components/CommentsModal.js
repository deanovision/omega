import {
  Modal,
  useMantineTheme,
  createStyles,
  Container,
  Group,
  Text,
  Avatar,
} from "@mantine/core";
import { formatTimestamp } from "../utils/helperFunctions";
const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: theme.spacing.sm,
    textAlign: "left",
    marginBottom: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    maxWidth: "820px",
    margin: "auto",
  },
  postedAt: {
    textAlign: "left",
  },
}));
function CommentsModal({
  content,
  modalOpen,
  setModalOpen,
  post,
  samplePost,
  avatarUrl,
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { createdAt, body, postedBy } = post || samplePost;

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
      <Container className={classes.container}>
        <Group align="initial">
          <Avatar size="lg" src={avatarUrl} alt={postedBy} radius="xl" />
          <div>
            <Text weight={700} size="sm">
              {postedBy && postedBy}
            </Text>
            <Text className={classes.postedAt} size="xs" color="dimmed">
              {createdAt &&
                formatTimestamp(createdAt.seconds, createdAt.nanoseconds)}
            </Text>
            <Text className={classes.body} size="sm">
              {body && body}
            </Text>
          </div>
        </Group>
      </Container>
      {content}
    </Modal>
  );
}
export default CommentsModal;
