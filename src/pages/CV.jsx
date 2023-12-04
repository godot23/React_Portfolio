import ResumeFile from "@/assets/Jason_Navon_Resume.pdf";
import CVFile from "@/assets/Jason_Navon_CV.PDF";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CV() {
    return (
        <div id = "CV_resume"> 
            {/* <a id = "resumeLinkText" download href= {Resumefile}> Download Resume Here </a>
            <a id = "CVLinkText" download href = {CVFile}> Download CV Here</a> */}
            <button type = "button" className = "btn btn-primary btn-lg"> 
                <a id = "resumeLinkText" download href = {ResumeFile}> Download Resume Here</a>
            </button>
            <button type = "button" className = "btn btn-primary btn-lg"> 
                <a id = "CVLinkText" download href = {CVFile}> Download CV Here</a>
            </button>
        </div>
    )

}