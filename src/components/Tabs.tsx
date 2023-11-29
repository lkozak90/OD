"use client";
import { Box, Tab } from "@mui/material";
import React from "react";
import { SlideIn } from "./SlideIn";
import { TabContext, TabList, TabPanel } from "@mui/lab";

interface Item {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: Item[];
}

const Tabs = ({ items }: TabsProps) => {
  const [tab, setTab] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <TabContext value={tab}>
      <SlideIn variant="down">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="Offer feature tabs">
            {items.map(({ id, title }) => (
              <Tab key={`${id}-tab`} label={title} value={id} />
            ))}
          </TabList>
        </Box>
      </SlideIn>
      <SlideIn variant="down">
        {items.map(({ id, content }) => (
          <TabPanel key={`${id}-panel`} value={id}>
            {content}
          </TabPanel>
        ))}
      </SlideIn>
    </TabContext>
  );
};

export { Tabs };
