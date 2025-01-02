export default function Portfolio() {
    return (
        <section>
            <div className="container mx-auto flex flex-col items-center gap-y-20">
                <h1 className="h1 mt-40">Trabalhos anteriores</h1>

                <div className="flex flex-col gap-y-10">
                    {/* <h3 className="h3">Telhados residenciais</h3> */}
                    <div className="flex flex-col gap-y-32">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (1).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (2).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (3).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (4).jpg"></img>
                            </div>
                            <div className="wrapper-image col-span-2 !max-w-[40rem]">
                                <img className="img__zoom w-full" src="images/portfolio/img (5).jpg"></img>
                            </div>
                            <div className="wrapper-image bg-[#252b37]"></div>
                            <div className="wrapper-image bg-[#252b37]"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (6).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (7).jpg"></img>
                            </div>
                            {/* <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (8).jpg"></img>
                            </div> */}
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (9).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (10).jpg"></img>
                            </div>      
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (11).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (12).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (13).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (14).jpg"></img>
                            </div>               
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {/* <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (16).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (17).jpg"></img>
                            </div> */}
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (18).jpg"></img>
                            </div>
                            {/* <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (19).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (20).jpg"></img>
                            </div> */}
                            {/* <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (21).jpg"></img>
                            </div> */}
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (22).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (23).jpg"></img>
                            </div>
                            <div className="wrapper-image bg-[#252b37]"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="wrapper-image col-span-2">
                                <img className="img__zoom" src="images/portfolio/img (25).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (26).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (27).jpg"></img>
                            </div>
                            <div className="wrapper-image">
                                <img className="img__zoom" src="images/portfolio/img (28).jpg"></img>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}