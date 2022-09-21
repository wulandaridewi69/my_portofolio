import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

const Router = () => {
    // const [token, setToken] = useState(null);
    // const jwtToken = useMemo(() => ({ token, setToken }), [token]);

        return (
        // <TokenContext.Provider value={jwtToken}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    {/* <Route path="/*" element={<Fail />}></Route> */}
                </Routes>
            </BrowserRouter>

        )

}

export default Router;