import CVfile from "../assets/CV.pdf";

export default function CV() {
    return (
        <div id = "CV"> 
            <a id = "CVLinkText" download href= {CVfile}> Download CV Here </a>
        </div>
    )

}