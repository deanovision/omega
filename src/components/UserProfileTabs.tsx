import { Tabs, Card } from '@mantine/core';
import { Comet, Notebook, Coin } from 'tabler-icons-react';

function UserProfileTabs({timeline}) {
  return (
    <Card withBorder pl={0} pr={0} pt={0} pb={50} p="xl" radius="sm">
        <Tabs>
            <Tabs.Tab label="TIMELINE" icon={<Notebook size={14} />}>{timeline}</Tabs.Tab>
            <Tabs.Tab label="HIGHLIGHTS" icon={<Comet size={14} />} />
            <Tabs.Tab label="OMEGA" icon={<Coin size={14} />} />
        </Tabs>
    </Card>
  );
}
export default UserProfileTabs