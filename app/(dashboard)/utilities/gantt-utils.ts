import { SchedulerData } from '@bitnoi.se/react-scheduler';
import { GanttService } from '../../../service/GanttService';
import randomColor from 'randomcolor';

export const getGanttData = async (): Promise<SchedulerData> => {
    const data = await GanttService.getGanttData();

    return transformData(data);
};

const transformData = (data: any[]): SchedulerData => {
    const machineMap = {};

    data.forEach((item, index) => {
        if (!machineMap[item.Machine]) {
            machineMap[item.Machine] = {
                id: (index + 1).toString(), // Gere um ID único para a máquina
                label: {
                    icon: '',
                    title: item.Machine,
                    subtitle: ''
                },
                data: []
            };
        }

        machineMap[item.Machine].data.push({
            id: (index + 1).toString(),
            startDate: new Date(item.Start),
            endDate: new Date(item.Finish),
            occupancy: 0,
            title: `OP - ${item.OF}`,
            description: `${item.OF}`,
            bgColor: randomColor()
        });
    });

    return Object.values(machineMap) as SchedulerData;
};
