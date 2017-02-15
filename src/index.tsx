import dva from 'typed-dva'
import Routers from "./router"
import ItemModel from "./models/item"
import UserModel from "./models/user"
import * as createLoading from 'dva-loading'
// import './index.html';
import './index.less'

import { hashHistory, browserHistory } from "react-router"


// 1. Initialize
const app = dva({
	history: hashHistory,
})

// 2. Plugin
app.use(createLoading())

// 3. Model
app.model(ItemModel)
app.model(UserModel)

// 4. Router
app.router(Routers)

// 5. Start
app.start('#root')
