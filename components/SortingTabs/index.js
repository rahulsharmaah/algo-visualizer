import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import BubbleSort from "../../pages/sorting";
import SelectionSort from "../../pages/selection-sort";
import HeapSort from "../../pages/heap-sort";
import QuickSort from "../../pages/quick-sort";
import MergeSort from "../../pages/merge-sort";
import styled from "styled-components";

const SortingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const SortingAlgorithm = styled.div`
  width: 48%; /* Two algorithms per row for computers */
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%; /* Single column for mobile */
  }
`;

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
        textColor="secondary"
        centered
      >
        <Tab label="All" />
        <Tab label="Bubble Sort" />
        <Tab label="Merge Sort" />
        <Tab label="Selection Sort" />
        <Tab label="Heap Sort" />
        <Tab label="Quick Sort" />
      </Tabs>
      <Box p={3}>
        {currentTab === 0 && (
          <SortingContainer>
            <SortingAlgorithm>
              <BubbleSort />
            </SortingAlgorithm>
            <SortingAlgorithm>
              <MergeSort />
            </SortingAlgorithm>
            <SortingAlgorithm>
              <SelectionSort />
            </SortingAlgorithm>
            <SortingAlgorithm>
              <HeapSort />
            </SortingAlgorithm>
            <SortingAlgorithm>
              <QuickSort />
            </SortingAlgorithm>
          </SortingContainer>
        )}
        {currentTab === 1 && <BubbleSort />}
        {currentTab === 2 && <MergeSort />}
        {currentTab === 3 && <SelectionSort />}
        {currentTab === 4 && <HeapSort />}
        {currentTab === 5 && <QuickSort />}
      </Box>
    </div>
  );
}

export default SortingTabs;
