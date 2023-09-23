import LandingPageStyle from "./LandingPageStyle";
import myImage from "../../Assets/images/image.jpg";
import Projects from "../Projects/Projects";
import ecommerce from "../../Assets/images/ecommerce.png";
import github from "../../Assets/images/github.svg";
import instagram from "../../Assets/images/instagram.svg";
import twitter from "../../Assets/images/twitter.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const LandingPage = (): JSX.Element => {
  const { ref: about, inView: aboutElement } = useInView();
  const { ref: experience, inView: experienceElement } = useInView();
  const { ref: projects, inView: projectsElement } = useInView();

  return (
    <LandingPageStyle>
      <header>
        <div className="img__container">
          <img src={myImage} alt="" />
        </div>
        <div className="name__container">
          <h1>Ezekiel Ajayi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            placeat facilis harum eligendi. Veritatis saepe quia mollitia quae
            nn
          </p>
        </div>
        <div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                aboutElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>About</p>
            </div>
          </div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                experienceElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>Experience</p>
            </div>
          </div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                projectsElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>Projects</p>
            </div>
          </div>
        </div>
        <div className="socials__container">
          <Link to={"https://github.com/altramax"} target="_blank">
            <img src={github} alt="" />
          </Link>
          <Link to={"https://x.com/the_izyy?s=21"} target="_blank">
            <img src={twitter} alt="" />
          </Link>
          <Link
            to={"https://instagram.com/ezekielajayi_?igshid=OGQ5ZDc2ODk2ZA=="}
            target="_blank"
          >
            <img src={instagram} alt="" />
          </Link>
        </div>
      </header>
      <main>
        <div>
          <h1>Hi, Welcome</h1>
          <p>
            My name is Ezekiel Ajayi, Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Corrupti facere porro necessitatibus recusandae
            tempora delectus laborum sed, veritatis blanditiis eveniet, velit
            soluta omnis aliquam odio nihil iusto quidem temporibus impedit
            maxime deleniti, debitis veniam quam praesentium? Omnis unde fugiat,
            veniam sunt fugit veritatis velit beatae nobis facere culpa
            molestias soluta delectus deleniti! Quasi, repellendus. Nulla
            maiores asperiores deserunt natus praesentium culpa, voluptatibus
            eos ad ipsam molestiae iste aut consequuntur vero ab rem dolores
            recusandae neque quisquam quas illo beatae saepe earum quasi. Ex
            mollitia culpa dolorem dicta cupiditate ipsa nemo suscipit est
            labore deserunt, facilis hic! Eum voluptatibus pariatur ab.
          </p>
        </div>
        <Projects
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsam nobis dolore corporis delectus. Recusandae eos nostrum et at
        maiores totam facere eligendi non iusto iure debitis repellat
        accusantium atque deserunt ipsum dignissimos, quaerat tempora laborum
        pariatur ducimus minus ea ratione! Odit totam quasi tempore blanditiis
        dolorum culpa temporibus nesciunt quisquam."
          image={ecommerce}
        />
        <p ref={about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum nam
          facere expedita quod voluptas pariatur ipsam. Eligendi cumque
          blanditiis magni amet cum voluptas, repellendus, natus eum omnis id,
          aut assumenda velit? Rem, hic consectetur eligendi totam blanditiis
          tempore dolores ratione doloribus harum ducimus ipsa? Voluptas
          laudantium, doloribus ea cumque numquam consectetur voluptatibus error
          deleniti ullam id aut sed, cum corrupti quod quisquam totam dolore
          eligendi provident, rem laboriosam nesciunt expedita autem aperiam?
          Suscipit aspernatur impedit veritatis ipsum voluptatum mollitia
          dolores obcaecati at accusantium ad aperiam iste vitae ipsa, odit,
          asperiores eligendi magnam, temporibus earum. Quasi non quod nobis et
          laborum beatae tempore? Voluptate esse nesciunt sed accusantium, optio
          fuga dolor soluta alias error doloribus nulla, corrupti nobis minus
          aliquid dignissimos ipsam quae quas odio deserunt dolores vitae! Velit
          vel eos nesciunt debitis libero et ullam, praesentium tenetur nihil
          reiciendis provident incidunt! Quae, enim quisquam asperiores vitae
          laudantium quos nam saepe consectetur animi praesentium, odit sit vel
          voluptates dicta magnam, esse error sequi ratione nostrum aspernatur!
          Sed, ad nemo recusandae, rem aliquid accusantium provident obcaecati
          aliquam quasi atque ipsa assumenda neque praesentium suscipit placeat
          facere magnam id, quibusdam porro impedit repellat harum doloribus
          sint eaque! Doloribus mollitia, iusto vero cumque eveniet ipsum, esse
          repellendus quaerat incidunt iste facilis magnam modi sapiente harum
          possimus dicta aperiam voluptatum ab veniam sequi minus. Esse ratione,
          minima magni placeat reiciendis voluptatibus cumque nobis? Cum ab
          nihil quis? Ratione tempore culpa iusto neque laboriosam vero
          excepturi, iure voluptas aliquid qui deleniti dicta quasi ipsa
          distinctio rem porro assumenda
        </p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        id inventore modi, tempora repellat molestias dignissimos enim rem omnis
        quas facilis, sit nesciunt harum maiores ducimus adipisci? Quos cum
        facilis modi labore exercitationem, nemo veniam eaque ipsum ut maxime
        earum quis dolor, pariatur illo nesciunt consequatur enim aliquid totam
        beatae.
        <p ref={experience}>
          , eligendi, nemo hic soluta eos aliquam. Fugiat error praesentium cum
          voluptate non nulla vero enim. Distinctio, totam eligendi. Explicabo
          numquam nulla, aperiam repellendus deleniti ducimus vero cumque magnam
          quas aspernatur autem molestiae accusantium suscipit, quis illum
          voluptatibus! Perferendis ullam, error autem exercitationem sunt
          corrupti modi eius omnis expedita totam quasi iure dicta, debitis
          dolorem eligendi, quos ex nesciunt similique iste illo deserunt sit
          rerum numquam? Ratione sequi architecto dolorum! Illo doloribus animi
          minus, ullam ipsa labore officia deserunt nisi totam nesciunt quia
          inventore deleniti odit magni, fugiat ipsum quod repellat? Quo dolore
          ea magni commodi atque cumque, veritatis facilis, tempore dicta neque
          qui blanditiis sequi autem aut sed pariatur id eaque! Quo vero
          repellendus voluptas beatae perspiciatis amet minima perferendis
          molestias laudantium veniam! Repellendus doloribus aliquam odit sint
          voluptatibus voluptatem aperiam voluptas unde deleniti? Dicta
          doloremque iste enim omnis alias asperiores illum, error aperiam
          veniam eos impedit excepturi reprehenderit fugiat quaerat ea vero
          suscipit odio at deleniti ratione quod. Rerum culpa minus autem labore
          magni consequuntur nobis laudantium in incidunt deleniti
          necessitatibus, corrupti nisi eius ratione. Repellat velit quidem
          corrupti natus. Labore quae necessitatibus in deserunt repellat hic,
          eius commodi officiis voluptates suscipit animi dolore nemo aut libero
          cupiditate quisquam atque dolores! Commodi magni ut nihil aliquid
          numquam libero non iure, voluptatem odio. Sunt voluptates voluptatibus
          impedit dolore molestias quod ex assumenda aut odit doloribus? Dolorem
          illum atque vel molestiae neque placeat iusto accusantium est ratione?
          Amet doloribus atque unde exercitationem iste. Dolores illum
          blanditiis eius voluptatum qui in amet perspiciatis ex dignissimos!
          Labore, culpa. Error atque nesciunt sapiente aliquid sed provident
          deserunt pariatur, ut perferendis? Debitis perspiciatis molestiae
          minima rem voluptatibus voluptates accusantium hic totam delectus
          fugit exercitationem saepe corporis deleniti aut quasi optio quis
          assumenda, perferendis aliquam, repellat reiciendis sunt!
          Exercitationem, laboriosam omnis minus sit corrupti dolores nostrum
          sunt aliquid repellendus molestias nobis dolorum optio ea officiis
          explicabo. Harum cum nesciunt recusandae assumenda. Veritatis porro
          cum nesciunt nulla </p>fuga magnam, minima nisi hic quo nam non! Minima,
          debitis tenetur asperiores odio fuga dolorem molestias, itaque fugit,
          non ex commodi ratione consequatur vero quos nisi nam? Consequatur
          tempora voluptas corrupti, repudiandae labore est, saepe atque, cumque
          nostrum sunt deserunt. Dolores sit accusantium deserunt error velit
          inventore! Eius libero exercitationem est doloremque in iure fugit
          deserunt quidem aspernatur hic eaque aliquam doloribus cumque dolore
          deleniti eum error recusandae omnis fugiat, explicabo optio! Voluptas
          mollitia provident quo beatae consectetur rerum quasi nam! Officiis ad
          debitis mollitia quis deleniti ex dolorum! Debitis voluptas, magnam
          perspiciatis nihil rem consequuntur, nisi ipsam deserunt accusantium,
          porro similique quam quaerat tempore reprehenderit et error esse
          repellat praesentium maxime autem magni ratione voluptatibus delectus.
          Dolorem eaque necessitatibus sit consequatur nisi et consequuntur illo
          corporis assumenda nihil tenetur eveniet, illum vel unde quisquam hic
          possimus quia
       
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        id inventore modi, tempora repellat molestias dignissimos enim rem omnis
        quas facilis, sit nesciunt harum maiores ducimus adipisci? Quos cum
        facilis modi labore exercitationem, nemo veniam eaque ipsum ut maxime
        earum quis dolor, pariatur illo nesciunt consequatur enim aliquid totam
        beatae.
        <p ref={projects}>
        
          obcaecati libero architecto! Quaerat eos ad qui voluptatibus quam quis
          perspiciatis deleniti, illum velit iure corporis cum laboriosam esse
          repellendus expedita veritatis! Cumque fugit omnis, libero atque,
          tempora, nihil sequi unde sapiente totam obcaecati enim nobis!
          Voluptates maxime molestias non vitae distinctio, repudiandae alias
          quod et nemo sunt deleniti odio repellendus harum, cum iusto ipsa
          nulla, hic veniam blanditiis tenetur accusantium sequi autem debitis
          nam. Quaerat dolorum porro illum aliquam? Dolorum iusto
          necessitatibus, ipsa, odit aut optio placeat aspernatur nam, est
          incidunt voluptates sapiente dolor obcaecati ea vero exercitationem
          nostrum quibusdam praesentium alias! Sapiente, aut? Neque voluptatum
          officia, odio consectetur velit non minima praesentium ducimus.
          Reiciendis veniam natus sit excepturi reprehenderit molestias vitae
          fuga quisquam? Deleniti beatae odio hic mollitia veritatis debitis
          maxime quod porro recusandae eligendi consequuntur amet, tenetur autem
          explicabo totam ad aliquam quam repellendus quas placeat repudiandae
          voluptatibus? Provident laborum pariatur labore, culpa voluptatem
          ipsam maxime nulla voluptatum? Quis ipsum culpa totam sequi magni
          tempora laboriosam quia itaque labore voluptatem rem mollitia sunt
          ipsa suscipit enim dicta ab alias accusamus omnis voluptate, eligendi
          numquam! Doloribus architecto quis nobis esse. Rem, quaerat illo eum
          eius adipisci porro placeat, alias repudiandae ab repellendus quo,
          aspernatur dicta? Veritatis molestias tempora atque nisi pariatur! Quo
          vero explicabo dolorum perspiciatis corrupti nobis omnis ad odio?
          Ipsum, illo nihil officia totam nemo provident. Vel voluptas impedit,
          ullam quidem et veritatis, officiis molestias dolores deleniti eius
          eaque, reprehenderit optio architecto. Dolor quod, vitae consectetur
          at ex tempora eos, temporibus quos, minima ullam sunt aspernatur
          porro! Vitae nobis obcaecati maiores, quod fugit consectetur. Quaerat
          repellendus totam perferendis earum amet iste nostrum maiores
          reiciendis consequatur soluta sequi, labore natus unde. Unde ducimus
          ratione consequuntur neque totam, repudiandae eius molestias officiis
          fugit, veritatis quis? Rerum, doloremque.
        </p>
      </main>
    </LandingPageStyle>
  );
};

export default LandingPage;
