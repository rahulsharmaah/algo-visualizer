"use client";
import React, { useState } from "react";

import BubbleSort from "../../pages/sorting";
import SelectionSort from "../../pages/selection-sort";
import HeapSort from "../../pages/heap-sort";
import QuickSort from "../../pages/quick-sort";
import { Box, Tab, Tabs } from "@mui/material";

function SortingTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Bubble Sort" />
        <Tab label="Selection Sort" />
        <Tab label="Heap Sort" />
        <Tab label="Quick Sort" />
      </Tabs>
      <Box p={3}>
        {currentTab === 0 && <BubbleSort />}
        {currentTab === 1 && <SelectionSort />}
        {currentTab === 2 && <HeapSort />}
        {currentTab === 3 && <QuickSort />}
      </Box>
    </div>
  );
}

export default SortingTabs;
