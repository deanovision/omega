import { Avatar, Group, Text, Card } from "@mantine/core";

function DirectMessageSimple({ conversation }) {
  return (
    <>
      <Card>
        <Group>
          <Avatar size={50} src={conversation.avatarUrl} radius={40} />
          <Text size="md" weight={500}>
            {conversation.name}
          </Text>
          <Text size="sm" lineClamp={1}>
            {conversation.lastMessage}
          </Text>
        </Group>
      </Card>
    </>
  );
}
export default DirectMessageSimple;
