// Packages
import React from "react";
import { useRouteMatch } from "react-router-dom";

// Types
import { IRepositoryParams } from "./types";

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
