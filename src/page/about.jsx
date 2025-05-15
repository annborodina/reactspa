function About() {
    return (
    <div className="light-green lighten-4" style={{ minHeight: '80vh', marginTop: '50px', marginBottom: '50px ' }}>
      <div className="container">
        {/* Header Spacer */}
        <div style={{ height: '30px' }}></div>

        <h2 className="center-align light-green-text text-darken-2">
          <i className="fas fa-leaf light-green-text text-darken-2"></i> About Our Recipe App
        </h2>
        
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card light-green lighten-5">
              <div className="card-content">
                <span className="card-title light-green-text text-darken-2">
                  <i className="fas fa-heart light-green-text text-darken-2"></i> Our Story
                </span>
                <p className="flow-text">
                  Founded in 2023, our recipe platform was born from a passion for healthy, delicious meals 
                  that anyone can prepare. We believe good food should be accessible to everyone, regardless 
                  of cooking experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col s12 m4">
            <div className="card light-green lighten-5">
              <div className="card-content center-align">
                <i className="fas fa-utensils fa-3x light-green-text text-darken-2" style={{ margin: '15px 0' }}></i>
                <span className="card-title light-green-text text-darken-2">Diverse Recipes</span>
                <p>
                  Over 1,000 tested recipes from 25+ cuisines. Vegetarian, vegan, gluten-free options included.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card light-green lighten-5">
              <div className="card-content center-align">
                <i className="fas fa-users fa-3x light-green-text text-darken-2" style={{ margin: '15px 0' }}></i>
                <span className="card-title light-green-text text-darken-2">Community Driven</span>
                <p>
                  50,000+ home cooks contribute recipes monthly. Join our food-loving community!
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card light-green lighten-5">
              <div className="card-content center-align">
                <i className="fas fa-seedling fa-3x light-green-text text-darken-2" style={{ margin: '15px 0' }}></i>
                <span className="card-title light-green-text text-darken-2">Fresh Approach</span>
                <p>
                  Seasonal ingredients spotlight. Reduced food waste techniques. Budget-friendly tips.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col s12">
            <div className="card light-green lighten-5">
              <div className="card-content">
                <span className="card-title light-green-text text-darken-2">
                  <i className="fas fa-award light-green-text text-darken-2"></i> Our Team
                </span>
                <div className="row">
                  <div className="col s12 m4 center-align" style={{ padding: '20px' }}>
                    <img 
                      src="https://randomuser.me/api/portraits/women/43.jpg" 
                      alt="Chef Maria" 
                      className="circle responsive-img"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h5>Chef Maria</h5>
                    <p className="light-green-text text-darken-2">Head of Recipe Development</p>
                    <p>Former executive chef with 15 years experience in Mediterranean cuisine</p>
                  </div>
                  <div className="col s12 m4 center-align" style={{ padding: '20px' }}>
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="David" 
                      className="circle responsive-img"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h5>David</h5>
                    <p className="light-green-text text-darken-2">Nutrition Specialist</p>
                    <p>Registered dietitian focusing on balanced, health-conscious meals</p>
                  </div>
                  <div className="col s12 m4 center-align" style={{ padding: '20px' }}>
                    <img 
                      src="https://randomuser.me/api/portraits/women/65.jpg" 
                      alt="Sophie" 
                      className="circle responsive-img"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h5>Sophie</h5>
                    <p className="light-green-text text-darken-2">Community Manager</p>
                    <p>Connects home cooks and organizes our annual cooking challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacer */}
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
  }

export {About};