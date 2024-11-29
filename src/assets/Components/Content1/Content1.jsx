import "../Content1/Content1.css";
import image1 from "../Content1/Img1.png";
import image2 from "../Content1/Img2.png";
import image3 from "../Content1/Img3.png";
import background from "../Content1/bg.jpg"

function Content1() {
  return (
    <>
    {/* <img src={background} alt="" /> */}
      <div className="images">
        <div className="img1">
          <img className="imgi1" src={image1} alt="" srcset="" />
          <div className="text1">
            <p className="head">
              Enjoy Mass Outbreaks and Tera Raid Battles Starting <br />{" "}
              November 28
            </p>
            <p className="body">
              Mass outbreaks of Tinkatink and Chansey-along with <br />
              Tera Raid Battles featuring Corviknight and Belibolt- <br />
              are coming soon to the Pokemon Scarlet and Pokemon <br />
              Violet Games.
            </p>
          </div>
        </div>
        <div className="img2">
          <img className="imgi2" src={image2} alt="" srcset="" />
          <div className="text2">
            <p className="body2">
              Ceruledge ex Brings the <br /> Heat in Scarlet & Violet- <br />{" "}
              -Surging Sparks
            </p>
          </div>
        </div>
        <div className="img3"> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br />
          <img className="imgi3" src={image3} alt="" srcset="" />
          <div className="text3">
            <p className="body3">
              Get Ready to Celebrate <br /> The Unova Region <br /> During
              Pokemon GO <br />
              Tour
            </p>
          </div>
        </div>
        {/* <div className="img4">
          <img className="imgi4" src={image4} alt="" srcset="" />
          <div className="text4">
            <p className="body4">
              Get Ready to Celebrate <br /> The Unova Region <br /> During
              Pokemon GO <br />
              Tour
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Content1;
