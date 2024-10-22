import ImgBG from '../../components/ImgBG'
import DefaultButton from '../../components/Button'
import trashCan from '../../assets/img/trash.svg'
import { useState, useEffect } from 'react'
import { Title, Main, TrashIcon, Avatar, PersonCard, PersonContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import api from '../../server/api'

function Users() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect( () => {

    async function getUsers() {
        const { data } = await api.get('/usuarios')

        setUsers(data)
    } getUsers()
    
    }, [])
      
    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)
        const newData = users.filter( user => user.id !== id)
        setUsers(newData)
    }
        


    return(
        <Main>
            <ImgBG />
            <Title>Lista de usuários cadastrados</Title>
            <PersonContainer>

                {users.map(user => (
                    <PersonCard key={user.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>{user.name} </h3>
                            <p>{user.age} anos</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={trashCan} onClick={() => deleteUser(user.id)}/>
                    </PersonCard>
                ))}

            </PersonContainer>
            <DefaultButton theme='primary' onClick={() => navigate('/')}>Cadastrar novo Usuário</DefaultButton>
        </Main>
    )
}

export default Users