import React from "react";
import { Trending, ExtraTrendingBox } from "../../components/Workflow/Trending";

//default export
export default {
  title: "Workflow/Trending", //
  component: Trending,
};

//named export for variations
export const Default_Trending = () => <ExtraTrendingBox />;
