import "./App.css";

import Form from "./components/Form";
import FormState from "./components/FormState";
import FormRef from "./components/FormRef";
import FormObject from "./components/FormObject";
import FormAction from "./components/FormAction";
import TaskActionLocal from "./components/TaskActionLocal";
import TaskActionServer from "./components/TaskActionServer";
import TodoPosts from "./components/TodoPosts";
import UseActionState from "./components/UseActionState";
import UseFormStatus from "./components/UseFormStatus";
import WithoutOptimism from "./components/WithoutOptimism";
import WithOptimism from "./components/WithOptimism";

function App() {
  return (
    <>
      <WithOptimism />
    </>
  );
}

export default App;
