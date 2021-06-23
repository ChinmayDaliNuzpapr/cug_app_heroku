import React from "react";
import Switcher from "../../components/Workflow/Switcher.jsx";

//default export
export default {
  title: "Workflow/Switcher", //
  component: Switcher,
};

//named export for variations
export const Default_Trending = () => <Switcher />;
