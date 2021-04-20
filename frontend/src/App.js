import { Footer, Header } from "./components/base"
import Blogs from "./components/blogs";
import BlogDetail from "./components/blogDetail";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from "./components/notFound";

const App = () => {
    return ( 
        <Router>
            <Header />
                <Switch>
                    <Route path="/" exact>
                         <Blogs /> 
                    </Route>
                    <Route path="/blogdetail/:slug" exact>
                         <BlogDetail /> 
                    </Route>
                    <Route path="*">
                         <NotFound /> 
                    </Route>
                </Switch>
            <Footer />
        </Router>
     );
}
 
export default App;