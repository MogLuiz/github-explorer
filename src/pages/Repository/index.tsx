// Packages
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouteMatch, Link } from "react-router-dom";

// Services
import api from "../../services/api";

// Assets
import logoImg from "../../assets/logo.svg";

// Types
import { IRepositoryParams, IRepository } from "./types";

// Styles
import { Header, RepositoryInfo, Issues } from "./styles";

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState([]);

  const { params } = useRouteMatch<IRepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      console.log(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
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
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/sdf">
          <div>
            <strong>Luiz</strong>
            <p>Henrique</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
