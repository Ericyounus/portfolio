import React from 'react'

const Resume = () => {
    return (
        <div >
            <div className="flex justify-between ">
                <div className="font-serif flex flex-col p-4 justify-between h-[470px] w-[450px] absolute top-[770px] left-52 z-10">
                    <div className="text-8xl ">
                        Hello, <br /> i'm Eric!
                    </div>
                    <div className="text-lg">

                        i am a self-taught Graphic Designer based in viet name with extensive marketing and communication experience.
                        I am currently living in France and pursuing a degree in web and digital Project Management.
                    </div>
                    <div className="flex justify-center">


                        <div className="bg-[#F1603C] h-11 w-72 px-4 rounded-full flex justify-between items-center ">
                            <span>
                                Q
                            </span>
                            <span className="w-56 ">
                                linkedin.com/in/ericyounas
                            </span>

                        </div>
                    </div>

                </div>
                <div>
                    <div className="absolute top-[710px] font-serif right-24 z-10">
                        <div className="absolute top-[350px] left-14 text-4xl font-serif">
                            28 Marcb 2000
                        </div>
                        <div className="absolute top-[430px] right-24 text-5xl font-serif">
                            English
                        </div>
                        <div className="absolute top-[430px] right-24 text-5xl font-serif">
                            English
                        </div>
                        <div className="w-80 h-32 text-white px-14 flex flex-col  justify-between  absolute top-[530px] left-48">
                            <h1 className="text-4xl text-center">Contact</h1>
                            <span>New iqbal Town, Islamabad</span>
                            <span>ericyounas32@gmail.com</span>
                            <span>+92 315 4849307</span>
                        </div>


                        <img src='./images/ResumePic.png' alt="Background" className=" w-[750px] h-[730px] z-10 object-cover" />

                    </div>
                </div>



            </div>
            <img src='./images/ResumeBG1.jpg' alt="Background" className="absolute top-[700px]  w-full h-full object-cover" />
            <img src='./images/ResumeBG2.jpg' alt="Background" className="absolute top-[1250px]  w-full h-[500px] object-cover" />
            <img src='./images/ResumeBG1.jpg' alt="Background" className="absolute top-[1750px]  w-full h-full object-cover" />
            <img src='./images/ResumeBG2.jpg' alt="Background" className="absolute top-[2250px]  w-full h-[500px] object-cover" />

        </div>
    )
}

export default Resume