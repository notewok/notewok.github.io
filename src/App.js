import { Provider } from 'react-redux';
import {store} from "./store/store.js";
import MainContent from "./components/MainContent";

function App() {
  return (
      <Provider store={store}>
        <MainContent/>
      </Provider>
  );
}

export default App;
