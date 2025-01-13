import { motion } from 'framer-motion';
import { transition1 } from '@/public/transitions/transition1';
import { righttoleft } from '@/public/variants/righttoleft';
import { lefttoright } from '@/public/variants/lefttoright';
import { FaRegCheckCircle } from "react-icons/fa";
import { upward } from '@/public/variants/upward';
import { transition1_s } from '@/public/transitions/transition1_s';


export default function OurServices() {
    return (
        <div id='services' className='container mx-auto flex flex-col items-center gap-y-8 lg:gap-y-20'>
          <div className='overflow-hidden max-w-max'>
            <motion.h2 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Nos services</motion.h2>
          </div>

          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" transition={transition1_s} className='wrapper-services'>

            {/* bardage */}
            <motion.div variants={upward} className='card-services'>
                <img className='image-services' alt='bardage' src="images/services/bardage.webp"></img>
                {/* text */}
                <div className='flex flex-col gap-y-8 justify-around'>
                  {/* title */}
                    <div>  
                      <div className='overflow-hidden max-w-max'>
                          <motion.h4 variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Bardage</motion.h4>
                      </div>
                      <p className='p small'>Le bardage est la solution idéale pour ceux qui cherchent à allier protection et esthétique lors de la construction ou de la rénovation de leur bâtiment. Ce revêtement extérieur protège les murs contre les intempéries telles que la pluie, le vent et la neige, tout en ajoutant une touche d’élégance au design de la façade.</p>
                    </div>
                    {/* benefits */}
                    <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Durabilité: Des matériaux de haute qualité tels que le bois, l'aluminium, le vinyle ou le fibrociment assurent une résistance et une longue durée de vie.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Isolation thermique et acoustique : Améliorez l'efficacité énergétique de votre logement et réduisez les bruits extérieurs.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Personnalisation : Disponible dans une large gamme de styles, de couleurs et de finitions, le bardage s'adapte à tous les types de constructions.</p>
                      </li>
                    </div>
                </div>
            </motion.div>

            {/* Charpente */}
            <motion.div variants={upward} className='card-services'>
              <img className='image-services' alt='charpenter' src='images/services/charpenter.webp'></img>
              {/* text */}
              <div className='flex flex-col gap-y-8 justify-around'>
                {/* title */}
                <div>
                  <div className='overflow-hidden max-w-max'>
                    <motion.h4 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Charpente</motion.h4>
                  </div>  
                  <p className='p small'>La charpente est l'élément clé qui garantit la solidité et la stabilité de votre toiture. Conçue pour supporter le poids du toit et résister aux intempéries, elle joue un rôle essentiel dans la construction ou la rénovation de tout type de bâtiment.</p>
                </div>
                {/* benefits */}
                <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Soutenir le toit : Elle assure la stabilité et la répartition uniforme des charges, comme la neige, le vent ou la pluie.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Protéger le bâtiment : En garantissant un appui solide pour la couverture, elle préserve l’intégrité de la construction face aux éléments extérieurs.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Apporter une base esthétique : Les charpentes apparentes ajoutent souvent du caractère et une touche authentique aux espaces intérieurs.</p>
                      </li>
                </div>
              </div>

            </motion.div>

            {/* Couverture */}
            <motion.div variants={upward} className='card-services'>
              <img className='image-services' alt='couverture' src='images/services/couverture.png'></img>
              {/* text */}
              <div className='flex flex-col gap-y-8 justify-around'>
                {/* title */}
                <div>
                  <div className='overflow-hidden max-w-max'>
                    <motion.h4 variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Couverture</motion.h4>
                  </div> 
                  <p className='p small'>La couverture est la couche extérieure d’un toit, conçue pour protéger votre bâtiment contre les intempéries et garantir son isolation. En plus de son rôle fonctionnel, elle contribue à l’esthétique et à la durabilité de votre construction.</p>
                </div>
                {/* benefits */}
                <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Protéger contre les éléments : Pluie, neige, vent, soleil ou grêle.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Isoler thermiquement : Réduire les pertes de chaleur en hiver et limiter la chaleur en été.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Donner du style : Offrir une finition esthétique adaptée au style architectural de votre bâtiment.</p>
                      </li>
                    </div>
              </div>
            </motion.div>

            {/* Plateforme */}
            <motion.div variants={upward} className='card-services'>
              <img className='image-services' alt='plateforme' src='images/services/plateforme.webp'></img>
              {/* text */}
              <div className='flex flex-col gap-y-8 justify-around'>
                {/* title */}
                <div>
                  <div className='overflow-hidden max-w-max'>
                    <motion.h4 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Plateforme</motion.h4>
                  </div>
                  <p className='p small'>La plateforme représente une solution architecturale moderne, qu'il s'agisse d'un toit plat ou d'une structure horizontale conçue pour divers usages. Ce type de conception offre à la fois esthétisme, fonctionnalité et flexibilité pour répondre aux besoins des constructions contemporaines.</p>
                </div>
                {/* benefits */}
                <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Esthétique moderne : Les toits plats s’intègrent parfaitement aux designs architecturaux contemporains.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Espace exploitable : Transformez votre toit en terrasse, jardin suspendu ou zone technique pour panneaux solaires.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Polyvalence : Adaptable aux constructions résidentielles, commerciales ou industrielles.</p>
                      </li>
                    </div>
              </div>

            </motion.div>

            {/* renovation */}
            <motion.div variants={upward} className='card-services'>
              <img className='image-services' alt='renovation' src='images/services/renovation.png'></img>
              <div className='flex flex-col gap-y-8 justify-around'>
                <div>
                  <div className='overflow-hidden max-w-max'>
                    <motion.h4 variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Renovation</motion.h4>
                  </div>
                  <p className='p small'>La rénovation est une étape clé pour améliorer, moderniser ou restaurer vos bâtiments et espaces. Que ce soit pour réparer des dommages, moderniser une structure ou augmenter l'efficacité énergétique, nos services de rénovation sont conçus pour répondre à vos besoins tout en respectant vos attentes.</p>
                </div>
                {/* benefits */}
                <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Réparation des dégâts : Protégez votre bâtiment des dommages causés par le temps, les intempéries ou l'usure.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Modernisation : Apportez une touche contemporaine à votre espace en améliorant les matériaux et les finitions.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Valorisation immobilière : Augmentez la valeur de votre propriété grâce à des rénovations bien planifiées.</p>
                      </li>
                    </div>
              </div>
            </motion.div>

            {/* zinguerie */}
            <motion.div variants={upward} className='card-services'>
              <img className='image-services' alt='zinguerie' src='images/services/zinguerie.webp'></img>
              {/* text */}
              <div className='flex flex-col gap-y-8 justify-around'>
                <div>
                  <div className='overflow-hidden max-w-max'>
                    <motion.h4 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h4'>Zinguerie</motion.h4>
                  </div>
                  <p className='p small'>La zinguerie est essentielle pour maintenir la protection et la fonctionnalité de votre bâtiment. Alliant technique et durabilité, nos services de zinguerie garantissent un écoulement efficace des eaux pluviales et préviennent les infiltrations susceptibles de compromettre la structure du bâtiment.</p>
                </div>
                {/* benefits */}
                <div className='wrapper-benefits'>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Imperméabilisation : empêche les fuites dans les toits et les murs.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Drainage efficace : l'eau de pluie est évacuée en toute sécurité, ce qui permet d'éviter les dommages structurels.</p>
                      </li>
                      <li className='benefits'>
                        <div>
                          <FaRegCheckCircle className='opacity-90 size-7' />
                        </div>
                        <p className='p small'>Finition esthétique : contribue à l'aspect général du bâtiment, en particulier dans les constructions plus traditionnelles ou architecturales.</p>
                      </li>
                    </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
    )
}