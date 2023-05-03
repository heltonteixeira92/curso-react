import Item from "./Item"

function List(){
    return(
        <> {/*fragments (comentário) */}
            <h1>Minha Lista</h1>
                <ul>
                    <Item marca="Ferrari"></Item>
                    <Item marca="Honda"></Item>
                    <li>Item 2</li>
                </ul>
        </>
    )
}

export default List