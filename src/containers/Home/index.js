import React, {useState} from "react";
import {Container, Image, H3, InputUsers, MessageError, Button} from './styles'
import Logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'



const user = [
    { login: "thiago", password: "123456"},
    { login: "marcelo", password: "123456" },
    { login: "vivyane", password: "123456" },
    { login: "pollyanna", password: "123456" },
    { login: "liliane", password: "123456" },
    { login: "erivalda", password: "123456" },
    { login: "joelclecio", password: "123456"},
    { login: "bruno", password: "123456"  },
    { login: "diego", password: "123456"  },
    { login: "admin", password: "123456"  },
    { login: "assis", password: "123456"  },
    { login: "você", password: "123456"  },
    { login: "evania", password: "123456" },
    { login: "igor", password: "123456" },
    { login: "jorge", password: "123456"},
    { login: "vera", password: "123456"},
    { login: "junior", password: "123456" },
    { login: "antonio", password: "123456" },
    ]

function Home(){
    const [login, setLogin] = useState ();
    const [password, setPassword] = useState ();
    const [passwordError, setPasswordError] = useState ();
    const navigate = useNavigate()
    const registerPoint = ()=>{
        const foundUser = user.find (u=> u.login === login && u.password === password);

        if (foundUser){
            navigate('/usuarios');
        } else{
            setPasswordError ('Usuário ou senha não encontrado')

        }
    }
  
    return (<Container>
                <Image alt='logo-imagem' src={Logo}/>
                <H3>Login</H3>
                <InputUsers onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Usuários" value={login}/>
                <InputUsers onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" value={password}/>
                <Button onClick={registerPoint}>Enviar</Button>
                <MessageError>{passwordError}</MessageError>
            </Container>
    )
}

export default Home