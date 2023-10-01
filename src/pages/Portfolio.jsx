

export default function Portfolio(props) {
    return (
        <div className="container text-center">
            <div className="list-group">
                <li >
                    <a href="https://github.com/KevalPatel6/Jeopardy">Jeopardy Game: Collaboration with Keval Patel and John Doaks </a>
                </li>
                <li class = "portfolioItems">
                    <a href="https://github.com/HarryFelty/BookReview">Book Review Website: Collaboration with Harry Felty and John Doaks</a>
                </li>
                <li class = "portfolioItems">
                    <a href="https://github.com/godot23/Weather_App">Weather App</a>
                </li>
                <li class = "portfolioItems">
                    <a href="https://github.com/godot23/Employee_Database">Employee Database: Backend Only</a>
                </li>
                {/* <a href = "placeholder">Project 5</a>
                <a href = "placeholder">Project 6 </a> */}
            </div>
        </div>
    )
}

