"use client";
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BubbleSort from "@/app/sorting/page";
import SelectionSort from "@/app/selection-sort/page";
import HeapSort from "@/app/heap-sort/page";
import QuickSort from "@/app/quick-sort/page";


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
