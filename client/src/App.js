import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CalendarComponent from "./components/Calendar";
import Holidays from "./components/Holidays";
import Calendar from "react-awesome-calendar";

function App() {
  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2019-05-02T18:00:00+00:00",
      to: "2019-05-05T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2019-05-01T13:00:00+00:00",
      to: "2019-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2019-05-05T13:00:00+00:00",
      to: "2019-05-05T20:00:00+00:00",
      title: "This is also another event",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<CalendarComponent></CalendarComponent>}
          ></Route>
          <Route path="/Holidays" exact element={<Holidays></Holidays>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
