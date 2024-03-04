import GanttChart from './components/GanttChart/GanttChart';
import { getGanttData } from './utilities/gantt-utils';


const Dashboard = async () => {

    const data = await getGanttData();
    
    return (
        <div className="grid h-100">
            <div className="col-3">
                <div className="card  mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <h4 className="block text-500 mb-3">Smart Planning</h4>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>

            <div className="col-9 p-0">
                <div className="gauge-row row flex justify-content-between">
                    <div className="col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-900 font-bold text-xl mb-3">Produtividade</span>
                                    <div className="text-700 font-medium text-xl">3.456h47min</div>
                                    <div className="text-500 font-normal">Carga total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-900 font-bold text-xl mb-3">Data de Entrega</span>
                                    <div className="text-700 font-medium text-xl">3.456h47min</div>
                                    <div className="text-500 font-normal">Carga total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-900 font-bold text-xl mb-3">Custos de Fabricação</span>
                                    <div className="text-700 font-medium text-xl">3.456h47min</div>
                                    <div className="text-500 font-normal">Carga total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-900 font-bold text-xl mb-3">Entrega Antecipada</span>
                                    <div className="text-700 font-medium text-xl">3.456h47min</div>
                                    <div className="text-500 font-normal">Carga total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '64vh'}} className="row">
                    <div  style={{ height: '100%'}} className="col-12">
                        <div  style={{ height: '100%'}} className="card">
                            <div style={{ width: '100%', height: '100%' }}>
                                <GanttChart data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
