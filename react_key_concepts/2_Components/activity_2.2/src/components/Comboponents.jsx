import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";

import FirstGoalHeader from "./FirstGoalHeader";
import SecondGoalHeader from "./SecondGoalHeader";
import ThirdGoalHeader from "./ThirdGoalHeader";

export default function Comboponents() {
  return (
    <>
      <div className="border">
        <FirstGoalHeader />
        <FirstGoal />

        <SecondGoalHeader />
        <SecondGoal />

        <ThirdGoalHeader />
        <ThirdGoal />
      </div>
    </>
  );
}
