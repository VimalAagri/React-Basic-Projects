function Card({data}) {
  
    return (
      <>
        <div className="d-flex">
          {data.map((person, index) => (
          
            <div className="card m-3">
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" className="card-img-top p-3" />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Age: {person.age}</p>
                <p className="card-text">City: {person.city}</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
        
          ))}
        </div>
        
      </>
    );
  }
  
export default Card;
  
