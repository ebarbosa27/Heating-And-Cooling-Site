import { faker } from "@faker-js/faker";
import "./home.css";

export default function HomePage() {
  return (
    <div id="homePage">
      <div className="headerContainer">
        <img src="EggersCrate-3.jpg" alt="" />
      </div>
      <div className="contentContainer">
        {Array(20)
          .fill(null)
          .map((_: null, idx: number) => {
            return (
              <div key={`test-${idx}`} className="contentItem">
                <div className="contentImage">
                  <img
                    src={faker.image.urlPicsumPhotos({
                      width: faker.number.int({ min: 400, max: 3999 }),
                      height: faker.number.int({ min: 400, max: 3999 }),
                    })}
                    alt="test image"
                  />
                </div>
                <div className="contentText">
                  <p>{faker.lorem.lines(5)}</p>
                  <div className="contentTextBox"></div>
                  <div className="contentTextBox"></div>
                </div>
                <div className="deadSpace"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
