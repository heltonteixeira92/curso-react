import Item from "./Item"

function List(){
    return(
        <> {/*fragments (comentário) */}
            <h1>Minha Lista</h1>
                <ul>
                    <Item marca="Ferrari" ano_lancamento={1998}></Item>
                    <Item marca="Honda" ano_lancamento={2010}></Item>
                    <Item></Item>
                    <li>Item 2</li>
                </ul>
        </>
    )
}

export default List