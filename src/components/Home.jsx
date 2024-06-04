import vg from "../assets/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech X</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} className="homeimg" alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech whose aim is to increase the problem
            solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, deserunt ducimus. Saepe a quaerat libero sit, minus
            nulla perspiciatis expedita exercitationem ratione. Suscipit facilis
            vitae odit dolor ducimus provident autem, dolore blanditiis totam
            rem aliquid nulla tenetur, quis cupiditate porro perferendis ipsam
            non. A ea commodi nesciunt maxime quas repudiandae ipsam
            reprehenderit tenetur nisi error cum, exercitationem corporis
            officiis aspernatur repellendus, veritatis cupiditate, quam
            obcaecati accusamus. Repellendus atque corporis fugiat. Tenetur
            ratione voluptate odit quasi suscipit ut aspernatur tempore iste
            enim. A aperiam reprehenderit ducimus. A perspiciatis possimus
            praesentium magnam repellat libero, exercitationem tempore officiis,
            esse quibusdam temporibus porro dolore tempora cum blanditiis odit
            enim odio. Beatae pariatur vel cum maxime cupiditate voluptatum
            corporis vitae. Minima, aliquid sit. Consectetur quaerat ratione
            ipsam. Perferendis rerum eligendi iste ullam. Iusto culpa unde
            mollitia cumque. Natus, praesentium est. Tempore optio atque sequi
            nesciunt nemo saepe rerum quas natus, unde id minima exercitationem
            earum.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
