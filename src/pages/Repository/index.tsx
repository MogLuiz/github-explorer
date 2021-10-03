// Packages
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouteMatch, Link } from "react-router-dom";

// Assets
import logoImg from "../../assets/logo.svg";

// Types
import { IRepositoryParams } from "./types";

// Styles
import { Header } from "./styles";

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return (
    <Header>
      <img src={logoImg} alt="GitHub Explorer" />
      <Link to="/dashboard">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
