'use client';
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useState } from "react";

interface IGanttChartProps {
  data: SchedulerData;
}

const GanttChart =  (props: IGanttChartProps) => {
  const [filterButtonState, setFilterButtonState] = useState(0);
   
  return (
    <div className="relative w-full h-full">
      <Scheduler
        data={props.data || []}
        // isLoading={}
        onRangeChange={(newRange) => console.log(newRange)}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0)
        }}
        config={{
          zoom: 1,
          maxRecordsPerPage: 4,
          filterButtonState,
        }}
      />
    </div>
  );
};

export default GanttChart;
