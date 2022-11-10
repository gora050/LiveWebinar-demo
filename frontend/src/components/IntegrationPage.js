import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";


export function IntegrationPage(props) {
    let iAppClient = props.iAppClient
    const {integrationKey} = useParams()
    const navigate = useNavigate();

    const [integration, setIntegration] = useState(null)

    const [flows, setFlows] = useState(null)

    async function  updateState() {
        setIntegration(await iAppClient.integration(integrationKey).get())
        setFlows((await iAppClient.flows.find({
            integrationKey: integrationKey,
        })).items)

    }
    useState(() => {
        updateState()
    }, [])

    return (
        <div>
            {integration ? (
                <div>
                    <div className="card bg-base-100 shadow rounded-md shadow-slate-400 m-4">
                        <div className="card-body">
                            <h2 className="card-title">
                                <img src={integration.logoUri} className="h-24"/>
                                {integration.name}
                            </h2>
                            <div className="card-actions w-full flex justify-between ">


                                <button className=" btn btn-outline btn-error btn-sm m-2 " onClick={async () => {
                                    await iAppClient.integration(integration.key).disconnect()
                                    navigate('/')
                                }}>Disconnect
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 text-xl font-bold'>Integration Flows</div>
                    <div className=''>
                        <table className='table w-full'>
                            <tbody>
                            {flows ? flows.map((flow) => (
                                <FlowRow
                                    key={flow.id}
                                    title={flow.name}
                                    flow={flow}
                                    integrationKey={integrationKey}
                                    onChange={updateState}
                                    iAppClient={iAppClient}
                                />
                            )) : (<tr></tr>)}
                            </tbody>
                        </table>
                    </div>


                </div>

            ) : (
                <div></div>
            )}</div>

    )
}


function FlowRow({integrationKey, flow, title, onChange, iAppClient}) {
    const accessor = iAppClient.flowInstance({
        integrationKey: integrationKey,
        flowKey: flow.key,
        autoCreate: true,
    })

    return (
        <tr key={flow.key}>
            <td>
                <div className='flex items-center space-x-3'>
                    <div>
                        <div className='font-bold'>{title}</div>
                    </div>
                </div>
            </td>
            <th>
                <button
                    className='btn btn-sm btn-outline'
                    onClick={() => {
                        accessor.openConfiguration()
                    }}
                >
                    Configure
                </button>
            </th>
        </tr>
    )
}

export default IntegrationPage;
