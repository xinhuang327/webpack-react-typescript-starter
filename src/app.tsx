import dva from 'typed-dva';
import count from './models/count';
import router from './router';
// import "babel-polyfill"

const app = dva();
app.model(count);
app.router(router);
app.start('#root');