"use client"

import { motion } from "framer-motion"
import { upward } from "@/public/variants/upward"
import { transition1 } from "@/public/transitions/transition1"
import { transition1_s } from "@/public/transitions/transition1_s"
import { item } from "@/public/variants/item"

export default function Portfolio() {
    return (
        <section>
            <div className="container mx-auto flex flex-col items-center gap-y-14">
                <div className="overflow-hidden">
                    <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className="h1 mt-28 lg:mt-40">Notre travail</motion.h1>
                </div>

                <div className="flex flex-col gap-y-10">
                    {/* <h3 className="h3">Telhados residenciais</h3> */}
                    <div className="flex flex-col items-center gap-y-14 lg:gap-y-24">
                        <div className="flex flex-row flex-wrap gap-y-3 justify-center">
                            <h3 className="h3 mx-auto">Plateforme</h3>
                            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="grid-images">
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (1)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (2)-min.jpg"></img>
                                </motion.div>
                                {/* <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (3)-min.jpg"></img>
                                </div> */}
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (4)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (5)-min.jpg"></img>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* RENOVATION & COUVERTURE */}
                        <div className="flex flex-row flex-wrap gap-y-3 justify-center">
                            <h3 className="h3 mx-auto">Renovation & Couverture</h3>
                            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="grid-images">
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (6)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (7)-min.jpg"></img>
                                </motion.div>
                                {/* <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (8)-min.jpg"></img>
                                </div> */}
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (9)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (10)-min.jpg"></img>
                                </motion.div> 
                            </motion.div>
                        </div>

                        <div className="flex flex-row flex-wrap gap-y-3 justify-center">
                            <h3 className="h3 mx-auto">Plateforme</h3>
                            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="grid-images">
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (11)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (12)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (13)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (14)-min.jpg"></img>
                                </motion.div>               
                            </motion.div>
                        </div>

                        {/* PLATEFORME */}
                        <div className="flex flex-row flex-wrap gap-y-3 justify-center">
                            <h3 className="h3 mx-auto">Plateforme</h3>
                            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="grid-images">
                                {/* <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (16)-min.jpg"></img>
                                </div>
                                <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (17)-min.jpg"></img>
                                </div> */}
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (18)-min.jpg"></img>
                                </motion.div>
                                {/* <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (19)-min.jpg"></img>
                                </div>
                                <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (20)-min.jpg"></img>
                                </div> */}
                                {/* <div className="wrapper-image">
                                    <img className="img__zoom" src="images/portfolio/img (21)-min.jpg"></img>
                                </div> */}
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (22)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (23)-min.jpg"></img>
                                </motion.div>
                                    <motion.div variants={item} className="wrapper-image max-w-[20rem] bg-[#252b37]">
                                    </motion.div>
                            </motion.div>
                        </div>

                        {/* REPARATION */}
                        <div className="flex flex-row flex-wrap gap-y-3 justify-center">
                            <h3 className="h3 mx-auto">Reparation</h3>
                            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="grid-images">
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (25)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (26)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (27)-min.jpg"></img>
                                </motion.div>
                                <motion.div variants={item} className="wrapper-image">
                                    <img alt='' className="img__zoom" src="images/portfolio/img (28)-min.jpg"></img>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            <div className="line mb-8"></div>
            </div>
        </section>
    )
}