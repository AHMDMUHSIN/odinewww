import React from 'react'



const About = () => {
  return (
    <div>
      <div className="container-fluid about-main-1">
    <div className="container-fluid">
      <div><h2>About The Odin Project</h2></div>
      <div><p>The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.</p></div>
      <div className="about-head-2">What you can expect at The Odin Project</div>
      <div className="about-item">
        <div><img src="./p3.svg" alt="" /></div>
        <div className="about-item-text">
          <div><h5>A full roadmap to becoming a developer</h5></div>
          <div><p>Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.</p></div>
        </div>
      </div>
      <div className="about-item">
        <div><img src="./p4.svg" alt="" /></div>
        <div className="about-item-text">
          <div><h5>Learn by doing</h5></div>
          <div><p>The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum. These projects will make a strong portfolio for you to showcase on your resume.</p></div>
        </div>
      </div>
      <div className="about-item">
        <div><img src="./p5.svg" alt="" /></div>
        <div className="about-item-text">
          <div><h5>Receive support from others</h5></div>
          <div><p>The maintainers of the curriculum run a Discord community, with the help of countless other volunteers, where you can receive help with anything in our curriculum.</p></div>
        </div>
      </div>
      <div className="about-item">
        <div><img src="./p6.svg" alt="" /></div>
        <div className="about-item-text">
          <div><h5>
            Open source and community driven</h5></div>
          <div><p>You can deepen your understanding and improve your GitHub skills by contributing to our open source curriculum and helping others in our Discord community.</p></div>
        </div>
      </div>


    </div>
    
   </div>

   <div className="container-fluid about-main-2">
    <div><h4>Overview of The Odin Project</h4></div>
    <div className="about-card-1">
      <div className="about-card-1-sub">
        <div><h3>1120514</h3></div>
        <div>Learners</div>
      </div>
      <div className="about-card-1-sub">
        <div><h3>5000+</h3></div>
        <div>Contributors</div>
      </div>
      <div className="about-card-1-sub">
        <div><h3>2013</h3></div>
        <div>Founded</div>
      </div>
     
     </div>

     
     <div className="about-card-2">
      <div className="about-card-2-sub-1">
         <div className="about-card-2-sub-1-head">Origin of The Odin Project</div>
         <div><p>The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.</p></div>
         <div><p>Erik Trautman founded The Odin Project in 2013. Currently it is maintained and continually improved by a team of volunteers, many of whom learned to code with us. Many find success from Odin Project's curriculum because of its hands-on approach with learning and emphasis on building projects. The curriculum is meticulously curated to ensure the content is up-to-date.</p></div>
      </div>
      <div className="about-card-2-sub-2">
        <div className="about-card-2-sub-1-head">
          <div><i className="fa fa-github" aria-hidden="true"></i></div> 
          <div>Open Source</div>
        </div> 
        <div><p>This website and the curriculum it hosts are completely open source. That means anyone can work on new features or fix existing bugs on the website. This also extends to the curriculum itself, anyone can work on new lessons, add new resources and improve existing lessons.</p></div>
        <div><p>The Odin Project would not be possible without the hard work of contributors from all across the world. If you're interested in helping us make The Odin Project better, please find out how to contribute.</p></div>
      </div>
     </div>
     
   </div>


   <div className="container-fluid about-main-3">
    <div className="about-main-3-head">Want to contact us?</div>
    <div className="about-main-3-text-1">Connect with our friendly community on discord, a chat and networking platform or<a href=""> send us an email.</a></div>
    <div> <button className="about-main-3-button">Chat on Discord</button></div>
    <div className="about-main-3-text">If you want to give back to our community, you can do so by contributing to our open source projects, or by supporting us financially.</div>
    <div className="about-main-3-button-2">
      <div><button>Contribute</button></div>
      <div><button>Donate</button></div>
    </div>
   </div>

   
    </div>
  )
}

export default About




