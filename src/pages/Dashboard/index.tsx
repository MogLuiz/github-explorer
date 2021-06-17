import React, {useState, FormEvent} from 'react'
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { Title , Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState([])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        //Adição de um novo repositório
        //Consumir API do Github
        //Salvar novo repositório no estado
        
        event.preventDefault()

        const response = await api.get(`repos/${newRepo}`)

        console.log(response.data)
        
    }

    return (
        <>
            <img src={logoImg} alt="Logo Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input 
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/58401291?v=4"
                     alt="Luiz Henrique"
                     />
                     
                     <div>
                         <strong>mog-luiz/gobarber</strong>
                         <p>Aplicação desenvolvida no gostack da rocketseat</p>
                     </div>

                     <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard