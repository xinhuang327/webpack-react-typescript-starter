import dva, { connect } from 'typed-dva';
import Routers from "./router"
import CountModel from "./models/count"
import * as createLoading from 'dva-loading';
// import './index.html';
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugin
app.use(createLoading());

// 3. Model
// app.model(require('./models/item'));
// app.model(require('./models/user'));
app.model(CountModel)

// 4. Router
app.router(Routers);

// 5. Start
app.start('#root');
