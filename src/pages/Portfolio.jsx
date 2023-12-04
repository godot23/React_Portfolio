import 'bootstrap/dist/css/bootstrap.min.css'


export default function Portfolio() {
    return (
        <div className = "parentContainer">
            <div className="jumbotron">
                <h1 className="display-4">Star Explorer</h1>
                <p className="lead">A project to catalog stars and planets, along with their physical attributes</p>
                <p className="list-group-item"> Tech used: React, MongoDB, Mongoose, HTML, CSS, JWT</p>
                <div className="my-4"> </div>
                <a className="btn btn-primary btn-lg" href="https://github.com/Jrherrera333/star-explorer" role="button">GitHub</a>

            </div>
            <div className="cardContainer">
                <div className="card card1">
                    {/* <img src="..." className="card-img-top" alt="Card image cap" /> */}
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">An app to generate a 5 day weather report based on a given city</p>
                        <p className="list-group-item"> Tech used: HTML, CSS, Restful API</p>
                        <a href="https://github.com/godot23/Weather_App" className="btn btn-primary">GitHub</a>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <h5 className="card-title">Employee Database</h5>
                        <p className="card-text">A backend framework for managing an employee database, including job title, department, salary, and more.</p>
                        <p className="list-group-item"> Tech used: MySQL, Node.js, Inquirer</p>
                        <a href="https://github.com/godot23/Employee_Database" className="btn btn-primary">GitHub</a>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <h5 className="card-title">Employee Database</h5>
                        <p className="card-text">A backend framework for managing an employee database, including job title, department, salary, and more.</p>
                        <p className="list-group-item"> Tech used: MySQL, Node.js, Inquirer</p>
                        <a href="https://github.com/godot23/Employee_Database" className="btn btn-primary">GitHub</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

