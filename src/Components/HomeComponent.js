import React from "react";




function Home(props) {
  return (
    <section className="section-a">
      <div className="container">
        <div className="row row-content">
          <div className="col ">
            <h3>3 different adventures to take</h3>
            <p>Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</p>

          </div>
        </div>
        <div className="col ">
          <h3> Food and Drinks</h3>
          <p>Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed</p>
        </div>
      </div>



      <div className="container " >
        <div className="row row-content">
          <div className="col-3 col-md ">

            <img className="tour" width="300px" height="300px" alt="/" src="https://assets.vogue.com/photos/5891f9739c1609bf7a72f48c/master/w_2560%2Cc_limit/00-art-guided-tour-of-san-francisco.jpg" />

            <h3> Soma</h3>
          </div>
          <div className="col-6 col-md">

            <img className="tour" width="300px" height="300px" alt="" src="https://www.shoreexcursionsgroup.com/img/tour/AKSFCSSASHOHOP-2.jpg" />
            <h3>Embarcadero</h3>
          </div>
          <div className="col-3 col-md">

            <img className="tour" width="300px" height="300px" alt="/" src="https://www.e-biketours.net/imag/ggb/palace-of-fine-arts.webp" /><h3>North Beach</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home;