"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { SlideIn } from "./SlideIn";
import { ExpandMore } from "@mui/icons-material";

interface Item {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionsProps {
  items: Item[];
}

const Accordions = ({ items }: AccordionsProps) => {
  const [accordion, setAccordion] = React.useState<string | false>("1");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setAccordion(isExpanded ? panel : false);
    };

  return (
    <SlideIn variant="down">
      {items.map(({ id, title, content }) => (
        <Accordion
          key={`${id}-accordion`}
          expanded={accordion === id}
          onChange={handleAccordionChange(id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${title}-content`}
            id={`${title}-header`}
          >
            <Typography variant="h5">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
      ))}
    </SlideIn>
  );
};

export { Accordions };
