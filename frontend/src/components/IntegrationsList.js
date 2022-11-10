import '../styles/AppBuild.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";

function IntegrationsList(props) {
    let iAppClient = props.iAppClient

    // Fetch list of integrations
    const [integrations, setIntegrations] = useState(null)

    async function loadIntegartions() {
        const integrationsPage = await iAppClient.integrations.find()
        setIntegrations(integrationsPage.items)
    }

    useState(() => {
        loadIntegartions()
    }, [])


    return (
        <div className="integrations_list overflow-x-auto">
            <table className="table w-full">
                <tbody>
                {integrations &&
                integrations.map(function (integration) {
                    return (
                        <IntegrationsListItem
                            key={integration.key}
                            integration={integration}
                            iAppClient={iAppClient}
                            onUpdate={loadIntegartions}
                        />
                    )
                })}
                </tbody>
            </table>
        </div>

    )
}

function IntegrationsListItem(props) {
    let key = props.key
    let iAppClient = props.iAppClient
    let integration = props.integration

    let onUpdate = props.onUpdate

    return (
        <tr key={key}>
            <td>
                <div className="avatar">
                    <div className=" w-12 h-12">
                        <img src={integration.logoUri} alt="Avatar Tailwind CSS Component"/>
                    </div>
                </div>
            </td>
            <td>
                {integration.name}
            </td>
            <th>
                {integration.connection ? (
                    <div>
                        <Link className="btn btn-outline btn-sm m-2" to={'/integration/' + integration.key}>Configure</Link>

                    </div>
                ) : (
                    <div>
                        <button className="btn btn-outline btn-sm m-2" onClick={async () => {
                            await iAppClient.integration(integration.key).connect()
                            onUpdate()
                        }}>Connect
                        </button>
                    </div>
                )}
            </th>
        </tr>
    )
}


export default IntegrationsList;
