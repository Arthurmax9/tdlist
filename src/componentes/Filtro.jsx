const Filtro = ({filtro, setFiltro,setSort}) => {
    return (
        <div className="filtro">
            <h2>Filtrar:</h2>
            <div className="filtro-options">
                <div>
                    <p>Status:</p>
                    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
        
    )
}

export default Filtro;