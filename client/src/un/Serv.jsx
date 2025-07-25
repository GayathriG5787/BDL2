import React from 'react';
import './Serv.css'; // Make sure this matches your file structure

const Serv = () => {
  return (
    <div className="trip-carousel-wrapper">
      <h1>Trip overview</h1>

      <div className="action-bar">
        <a href="#week-1">Week One</a>
        <a href="#week-2">Week Two</a>
      </div>

      <ul className="carousel">
        <li className="day-card flight">
          <a id="week-1">
            <img
              src="https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Paris"
            />
            <div className="meta">
              <h2 className="location">Paris</h2>
              <p className="desc">
                Arrive in the morning. Spend the day wandering around the many adorable streets and sweet cafés of Paris.
              </p>
            </div>
          </a>
        </li>

        <li className="day-card">
          <img
            src="https://images.unsplash.com/photo-1609971757431-439cf7b4141b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paris"
          />
          <div className="meta">
            <h2 className="location">Paris</h2>
            <p className="desc">Spend the day exploring top sights in Paris with your personal tour guide.</p>
          </div>
        </li>

        <li className="day-card train">
          <img
            src="https://images.unsplash.com/photo-1650765931316-3033ca92409b?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Versailles"
          />
          <div className="meta">
            <h2 className="location">Versailles</h2>
            <p className="desc">Explore Versailles from the lavish interior to the well-manicured gardens.</p>
          </div>
        </li>

        <li className="day-card train">
          <img
            src="https://plus.unsplash.com/premium_photo-1697729582646-a5d923464b30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Loire Valley"
          />
          <div className="meta">
            <h2 className="location">Loire Valley</h2>
            <p className="desc">Stay overnight in the Loire Valley. Explore it's luxurious vineyards.</p>
          </div>
        </li>

        <li className="day-card">
          <img
            src="https://images.unsplash.com/photo-1620679393872-2501651282c1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Burgundy"
          />
          <div className="meta">
            <h2 className="location">Burgundy</h2>
            <p className="desc">Enjoy another wine-filled day with a vineyard tour of the Burgundy region.</p>
          </div>
        </li>

        <li className="day-card car">
          <img
            src="https://images.unsplash.com/photo-1708793870276-9d529dce1288?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Burgundy"
          />
          <div className="meta">
            <h2 className="location">Burgundy</h2>
            <p className="desc">Walk around the town of Burgundy and learn about its history.</p>
          </div>
        </li>

        <li className="day-card car">
          <img
            src="https://plus.unsplash.com/premium_photo-1724604871348-298594ad4eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhbW9uaXh8ZW58MHx8MHx8fDA%3D"
            alt="Chamonix"
          />
          <div className="meta">
            <h2 className="location">Chamonix</h2>
            <p className="desc">Enjoy a beautiful hike near the picturesque town of Chamonix.</p>
          </div>
        </li>

        <li className="day-card car week-start">
          <a id="week-2"></a>
          <img
            src="https://images.unsplash.com/photo-1604440401661-8f6f07c285a2?q=80&w=2163&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nice"
          />
          <div className="meta">
            <h2 className="location">Nice</h2>
            <p className="desc">Arrive in Nice and explore town. Do some souvenier shopping or get a drink at a café.</p>
          </div>
        </li>

        <li className="day-card car">
          <img
            src="https://images.unsplash.com/photo-1504459257750-a6dc59581529?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nice"
          />
          <div className="meta">
            <h2 className="location">Nice</h2>
            <p className="desc">Enjoy a relaxing day by the beach.</p>
          </div>
        </li>

        <li className="day-card flight">
          <img
            src="https://images.unsplash.com/photo-1575218283431-a91baee79f47?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Arles"
          />
          <div className="meta">
            <h2 className="location">Arles</h2>
            <p className="desc">Explore this historic city center on the Rhône River.</p>
          </div>
        </li>

        <li className="day-card flight">
          <img
            src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paris"
          />
          <div className="meta">
            <h2 className="location">Paris</h2>
            <p className="desc">Enjoy one more night in Paris before flying home.</p>
          </div>
        </li>
      </ul>

      <div className="plane"></div>
    </div>
  );
};

export default Serv;
