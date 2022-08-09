import React from "react";
import { Container, Card } from "@mantine/core";
import DirectMessagesList from "../../components/DirectMessagesList";

function DirectMessages() {
  return (
    <>
      <Container mt={20} size="md" px={0}>
        <Card withBorder p="xl" radius="sm">
          <DirectMessagesList />
        </Card>
      </Container>
    </>
  );
}
export default DirectMessages;
