// Packages
import React, { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

// Assets
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

// Services
import api from "../../services/api";

// Types
import { Repository } from "./types";

// Styles
import { Title, Form, Repositories, Error } from "./styles";

const Dashboard: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    //Adição de um novo repositório
    //Consumir API do Github
    //Salvar novo repositório no estado

    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca por esse repositório!");
    }
  }

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <img src={logoImg} alt="Logo Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
