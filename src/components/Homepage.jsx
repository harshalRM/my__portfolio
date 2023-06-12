import React from 'react'

const PDF_file = 'http://localhost:3000/MY_RESUME.pdf'
const Homepage = () => {
    const downloadFile = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }
    return (
        <>
            <div id='homepage__container' className="container-fluid  py-4">
                <div className="content">
                    <h1>Harshal Dhurway</h1>
                    <h2>UI/UX Designer || Graphic Designer</h2>
                    <p >A coder who is paasionate for coding, developing, and learning new designs, technologies. Seeking entry level job to explore and enhance my skkils and knowledge and to learn new things. </p>
                    <p className='text-center text-danger fw-bold fs-4 mt-5'>WORK EXPERIENCE IS LOW BUT LEARNING EXPERIENCE IS HIGH....</p>
                    <div onClick={()=>{downloadFile(PDF_file)}}>
                        <button className="btn btn-primary text-white fw-bold mt-5 p-3 w-50 fs-4 ">RESUME</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage