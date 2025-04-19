import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import { ThemeProvider } from 'styled-components'
import { light } from '@devoinc/genesys-brand-devo'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <ThemeProvider theme={light}>
            <Theme>
                <BrowserRouter>
                    <AuthProvider>
                        <Layout>
                            <Views />
                        </Layout>
                    </AuthProvider>
                </BrowserRouter>
            </Theme>
        </ThemeProvider>
    )
}

export default App
