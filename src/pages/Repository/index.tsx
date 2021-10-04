// Packages
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouteMatch, Link } from "react-router-dom";

// Assets
import logoImg from "../../assets/logo.svg";

// Types
import { IRepositoryParams } from "./types";

// Styles
import { Header, RepositoryInfo } from "./styles";

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/58401291?v=4"
            alt="Luiz"
          />
          <div>
            <strong>MogLuiz/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
