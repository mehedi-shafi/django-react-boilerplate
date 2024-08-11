import logo from './logo.svg';
import './App.css';
import theme from './setupTheme';
import moment from 'moment';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import Topbar from './components/Topbar';
import AuthorizedRoute from './components/Routes/AuthorizedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    moment.locale('en');

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <BrowserRouter>
                        <Topbar />
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            {/* <AuthorizedRoute
                            path="/survey/:id"
                            public
                            exact
                            Component={}
                        /> */}
                            <Route
                                path="/"
                                public
                                element={
                                    <AuthorizedRoute component={DashBoard} />
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
