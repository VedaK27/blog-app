import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";

function App() {

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Login />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/create"
                            element={<CreatePost />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;