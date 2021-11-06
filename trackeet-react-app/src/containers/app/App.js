import { useState } from "react";
import "./App.css";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";

const ViewOne = ({ onClick }) => (
  <div>
    Buckets <br />
    <button onClick={() => onClick("view2")}>Go to Non Detailed Form</button>
  </div>
);

const ViewTwo = ({ onClick }) => (
  <div>
    Non Detailed Form <br />
    <button onClick={() => onClick("view1")}>Go to Buckets</button>
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
