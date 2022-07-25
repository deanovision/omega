import { useState } from 'react';
import { Tabs, Card, MediaQuery } from '@mantine/core';
import { TrendingUp, Notebook, World } from 'tabler-icons-react';

function DashboardTabs({timeline, trendingNewsInfo}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <MediaQuery largerThan="sm" styles={{display: 'none'}}>
        <Card withBorder pl={0} pr={0} pt={0} pb={5} p="xl" radius="sm">
            <Tabs active={activeTab} onTabChange={setActiveTab}>
                <Tabs.Tab 
                  label="NEWS FEED" 
                  icon={<Notebook size={14} />}>
                    {timeline}
                </Tabs.Tab>
                <Tabs.Tab 
                  label="TRENDING" 
                  icon={<TrendingUp size={14} />}>
                    {trendingNewsInfo}
                  </Tabs.Tab>
                <Tabs.Tab 
                  label="EXPLORE" 
                  icon={<World size={14} />} />
            </Tabs>
        </Card>
      </MediaQuery>
      {/* Desktop     */}
      <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
        <Card withBorder pl={0} pr={0} pt={0} pb={5} p="xl" radius="sm">
            <Tabs active={activeTab} onTabChange={setActiveTab}>
                <Tabs.Tab 
                  label="NEWS FEED" 
                  icon={<Notebook size={14} />}>
                    {timeline}
                </Tabs.Tab>
                <Tabs.Tab 
                  label="TRENDING" 
                  icon={<TrendingUp size={14} />}>
                    {trendingNewsInfo}
                  </Tabs.Tab>
                <Tabs.Tab 
                  label="EXPLORE" 
                  icon={<World size={14} />} />
            </Tabs>
        </Card>
      </MediaQuery>
    </>
  );
}
export default DashboardTabs