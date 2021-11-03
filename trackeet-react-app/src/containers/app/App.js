import { useState } from "react";
import "./App.css";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";

const ViewOne = ({ onClick }) => (
  <div>
    View 1 <br />
    <button onClick={() => onClick("view2")}>Go to view 2</button>
  </div>
);

const ViewTwo = ({ onClick }) => (
  <div>
    View 2 <br />
    <button onClick={() => onClick("view1")}>Go to view 1</button>
    <NonDetailedForm />
  </div>
);

export const App = () => {
  const [currentView, setCurrentView] = useState("view1");

  return (
    <div>
      {currentView === "view1" ? (
        <ViewOne onClick={(page) => setCurrentView(page)} />
      ) : (
        <ViewTwo onClick={(page) => setCurrentView(page)} />
      )}
    </div>
  );
};
