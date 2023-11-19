import 'bootstrap/dist/css/bootstrap.min.css'

export default function Portfolio(props) {
    return (
        <div>
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">Star Explorer</h5>
                    <p className="card-text">An app to catalog stars and planets, along with their important information. </p>
                    <a href="https://github.com/Jrherrera333/star-explorer" className="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">Weather App</h5>
                    <p className="card-text">An app to generate a 5 day weather report based on a given city</p>
                    <a href="https://github.com/godot23/Weather_App" className="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Employee Database</h5>
                    <p className="card-text">A backend framework for managing an employee database, including job title, department, salary, and more.</p>
                    <a href="https://github.com/godot23/Employee_Database" className="btn btn-primary">GitHub</a>
                </div>
            </div>
        </div>
    )
}

