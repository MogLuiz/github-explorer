import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title , Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Logo Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
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