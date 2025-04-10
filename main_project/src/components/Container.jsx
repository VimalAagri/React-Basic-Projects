function Container({children}) {
    return (
        <>
            <div className="card m-3 " style={{ width: "250px", backgroundColor: "#646cffaa" }}> 

                {children}   

                <div className="card-body">                            
                    <div className="d-flex gap-1 justify-content-evenly">
                        <button className="btn btn-primary">Link</button>
                        <button className="btn btn-primary">Share</button>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default Container

