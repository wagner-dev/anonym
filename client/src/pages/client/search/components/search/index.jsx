import { useState } from 'react'
import {
    SearchBody,
    Search,
    Title,
} from './styled/index'
import Content from './listItems/index'

export default function SearchComponent({data, request, load, setLoad}){

    // content do resultado do search
    const [cardAtived, setCardAtived] = useState(false)

    // value search
    const [searchValue, setSearchValue] = useState('')
    // err - valid input
    const [err, setErr] = useState(false)
    
    function ValidSearch(){
        if(searchValue.length){
            // reset err
            setErr(false)
            setLoad({load: true})
            setTimeout(() => request(searchValue), 200)
        }
        else{
            setErr(true)
        }
    }

    return (
        <SearchBody>
            <Title>
                <h2>Pesquisar usuários</h2>
            </Title>
            
            <Search 
            err={err}
            onClick={() => setCardAtived(true)}>

                <input 
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Nome do usuário" />

                <input
                type="submit"
                value="Pesquisar"
                onClick={ValidSearch} />
            </Search>

            {cardAtived && 
                
                <Content 
                data={data}
                load={load} />
            }
        </SearchBody>
    )
}