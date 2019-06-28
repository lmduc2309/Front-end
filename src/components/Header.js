import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
        
         <nav id="nav-wrap">
           
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          
          
            <ul id="nav" className="nav">
            
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll"  href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#Applyform">Apply</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
            
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 style ={ {color:'#95ee80'}} className="responsive-headline">{resumeData.name}</h1>
               <h2 style={{color:'#e5eeda', fontFamily:'sans-serif '}}>{resumeData.role}{resumeData.roleDescription}
               </h2>
               <hr/>
               <form method="post" className="search-jobs-form">
  <div className="row-mb-5">
    <div className="colspace">
      <input type="text" className="form-controller" placeholder="Job title, keywords..." />
    </div>
    <div className="colspace">
      <select className="form-control">
        <option>AnyWhere</option>
        <option>Office 1(453-455 Hoang Dieu)</option>
        <option>Office 2(117 Nguyen Huu Tho)</option>
        
      </select>
    </div>
    <div className="colspace">
      <select className="form-control">
        <option>Part Time</option>
        <option>Full Time</option>
        <option>Freelancer</option>
      </select>
    </div>
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
      <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2" />Search Job</button>
    </div>
  </div>
</form>

               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}