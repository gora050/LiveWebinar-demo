import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import IntegrationPage from "./components/IntegrationPage";
import {IntegrationAppClient} from "@integration-app/sdk";
import IntegrationsList from "./components/IntegrationsList";



// Backend-generated Token
// https://console.integration.app/w/63600a4b452f6b159139e33b/docs/getting-started/authentication-token
const iAppClient = new IntegrationAppClient(
    {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZsYWRAaW50ZWdyYXRpb24uYXBwIiwibmFtZSI6IlRlc3QgRGVtbyBVc2VyIiwiZmllbGRzIjp7ImF1dGhUb2tlbiI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSlNVekkxTmlJc0ltcDBhU0k2SWpCbU9ESXdOelptT0RBNE9XVTNORGxqTVRGak1UQmtObVF5WVRWa09HVmtZamM1TjJVek5ETmxaRFE0WmpBeE5XTmtPR0ZrTldZM016WTRZemhtTkRVMU5qa3daV1F3TnpNMlptVTROR0V3SW4wLmV5SmhkV1FpT2lJME1ETTFJaXdpYW5ScElqb2lNR1k0TWpBM05tWTRNRGc1WlRjME9XTXhNV014TUdRMlpESmhOV1E0WldSaU56azNaVE0wTTJWa05EaG1NREUxWTJRNFlXUTFaamN6Tmpoak9HWTBOVFUyT1RCbFpEQTNNelptWlRnMFlUQWlMQ0pwWVhRaU9qRTJOamd3T0RneE1UUXNJbTVpWmlJNk1UWTJPREE0T0RFeE5Dd2laWGh3SWpveE5qWTRNVGMwTlRFMExDSnpkV0lpT2lJeU56YzFNek1pTENKelkyOXdaWE1pT2x0ZExDSmxiblJsY25CeWFYTmxJam8wTENKbGJXRnBiQ0k2SW5ac1lXUkFhVzUwWldkeVlYUnBiMjR1WVhCd0luMC5lNjE2bXRqZzVrTTBhckpFa0RoMnlmSGNqWElBcmFhOU8ySk90QV8xNmdNMjJCSng0ZXpLemJ1MkZWRGxHNlQ4bG5ES01BTWxIaXJTXzNyOHpHQVVxeVo0NldFNlFUZ0JFc3N0QWpQSGNpTWt0NFpEOGplUVQ3WDJ2SFloNTBHMDFtZ1owaE5xUUNhOTVSdFdpZTNqLUxSWEpfMXRXakJza1RnbjVYc3VNdDJmemkwR213Wmx2NERjZFJRbjVVclhVTkllQ3Q4UHVwVzBLaEN2OFVDX1AtUG16UWktUnlfU3pxcTcxYV9oUjY2dVdSZS0teDVzNU5vc3g3dTlKTlliU0NaX0FWRlFxbF9heXB5bDV4V1djREUtOFlpWFEtSi02S0xQYUdKVTFadUpQRmRxc3VwMlZpUVJKS3FjS052b3NLdTZRVHlCRVJDYkhDd29iM2lCVU96aHg0UFVmZm5KOWpPZVEtSmFQVjRNRldXNm5fSGdxclVEbk1RNkY1MFBlWFpUWlpaRFhJNGluU3VGQ25zbDQ0UVhBWHFFX25jWmZzajRaY1lVSlpoQlFiSEtuVTBuXzhOMHZIcWpkSFAybXI4UVhOakI2S3BGNGNtb25OajF5cWpBTzVOSVU2T2tHdG9uRTRwdmVoWWxXLXVxOXpSdmRHU0pLQ25iV1dLY192X2tKejgwTmsyU2t5SnEyT3BlVW9jYWdjNjJSczVUN1BGUGoycnhfLXM1WGEzRVFGaFl1NVE1aG5GNlZnR2d5WVB0X0ZYcDg3NlZSeWhtODlLYjBYWlZEMzdFNWxVX3BmeWJvUk5WNGtDSk4wa2FzNmV0WUpXbUp6YTZGa0wzN0ZsQndvTE9UUC1CSjlXUVBQTzR2MUIwd215Z01XN1hhdDNnTml5X0ZFVSJ9LCJpc3MiOiI1YTAyY2I2Mi1jMDkyLTQwYWEtYmI5ZC1mNzAzOTA2NjRjYWQiLCJleHAiOjE2OTk2MjQyMDd9.sJcK7Rd7AoDGzB1_WsoBbsGHwPNncU60zann_FqT8Gk",
    },)


ReactDOM.render(
    <BrowserRouter>
        <div className='flex place-content-center p-16'>
            <div className='container sm-auto'>
                <div className='mockup-window border bg-primary text-base-100 border-4 border-primary'>
                    <div className='navbar bg-primary text-primary-content'>
                        <div className='flex-none'>
                            <a className='btn btn-ghost normal-case text-xl'>
                                <img src="https://app.livewebinar.com/assets/img/logos/livewebinar-white.png" style={{ maxHeight: 50}}/>
                            </a>
                        </div>
                        <div className='flex-none'>
                            <ul className='menu menu-horizontal p-0'>
                                <li>
                                    <Link to={'/'}>Integrations</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 py-16 bg-base-100 text-base-content rounded-xl'>
                        <Routes>
                            <Route path='/' element={<IntegrationsList iAppClient={iAppClient}></IntegrationsList>}/>
                            <Route path='/integration/:integrationKey' element={<IntegrationPage iAppClient={iAppClient}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById('root'),
)
