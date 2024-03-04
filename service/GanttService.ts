import { SchedulerData } from '@bitnoi.se/react-scheduler';

export const GanttService = {
    async getGanttData() {
        const res = await fetch('http://localhost:8080/data');

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    }
};
