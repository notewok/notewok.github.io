import MainContent from "./components/MainContent";
import { CalendarProvider } from "./context/CalendarContext";

const App = () => {
  return (
    <CalendarProvider>
      <MainContent/>
    </CalendarProvider>
  );
}



export default App;
