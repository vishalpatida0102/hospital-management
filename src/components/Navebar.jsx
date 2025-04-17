import React ,{useState}from "react";
import "./Navebar.css";
import { useRef,useEffect } from "react";

const Navbar=()=> {
  
    // <nav className="navbar">
    //   <div className="navbar__logo">zapier</div>
    //   <div className="navbar__links">
    //     <div className="dropdown">
    //       <button className="dropbtn">Products</button>
    //     </div>
    //     <div className="dropdown">
    //       <button className="dropbtn">Solutions</button>
    //     </div>
    //     <div className="dropdown">
    //       <button className="dropbtn">Resources</button>
    //     </div>
    //     <a href="#" className="navbar__link">Enterprise</a>
    //     <a href="#" className="navbar__link">Pricing</a>
    //   </div>
    //   <div className="navbar__actions">
    //     <a href="#" className="navbar__link">Explore apps</a>
    //     <a href="#" className="navbar__link">Contact sales</a>
    //     <a href="#" className="navbar__link">Log in</a>
    //     <button className="signup-btn">Sign up</button>
    //   </div>
    // </nav>

    // <nav className="navbar">
    //   <div className="navbar__logo">zapier</div>

    //   <div className="navbar__links">
    //     <div className="dropdown">
    //       <button className="dropbtn">Products ▾</button>
    //       <div className="dropdown-content">
    //         <a href="#">App Integrations</a>
    //         <a href="#">Zap Editor</a>
    //         <a href="#">AI Features</a>
    //       </div>
    //     </div>

    //     <div className="dropdown">
    //       <button className="dropbtn">Solutions ▾</button>
    //       <div className="dropdown-content">
    //         <a href="#">Marketing</a>
    //         <a href="#">Sales</a>
    //         <a href="#">Customer Support</a>
    //       </div>
    //     </div>

    //     <div className="dropdown">
    //       <button className="dropbtn">Resources ▾</button>
    //       <div className="dropdown-content">
    //         <a href="#">Blog</a>
    //         <a href="#">Help Center</a>
    //         <a href="#">Guides</a>
    //       </div>
    //     </div>

    //     <a href="#" className="navbar__link">Enterprise</a>
    //     <a href="#" className="navbar__link">Pricing</a>
    //   </div>

    //   <div className="navbar__actions">
    //     <a href="#" className="navbar__link">Explore apps</a>
    //     <a href="#" className="navbar__link">Contact sales</a>
    //     <a href="#" className="navbar__link">Log in</a>
    //     <button className="signup-btn">Sign up</button>
    //   </div>
    // </nav>

  
    const templates = [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Draft email replies to customers',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Summarize sales calls using OpenAI',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Talk to leads 24/7 with a custom sales chatbot',
          link: '#',
          icon: true,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Supercharge your support with an AI-powered FAQ bot',
          link: '#',
          icon: true,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Use AI to generate relevant content ideas',
          link: '#',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s',
          title: 'Turn Slack messages into a prioritized task list',
          link: '#',
        },
      ];

      

    const items = [
        { title: "Marketing campaigns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
        { title: "Data management", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
        { title: "IT helpdesk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
        { title: "Support tickets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
        { title: "Lead management", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" },
      ];
      
      // Triple the items to simulate infinite scroll
      const infiniteItems = [...items, ...items, ...items];
      

      const carouselRef = useRef(null);

      const scroll = (direction) => {
        const scrollAmount = 300;
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };
    
      useEffect(() => {
        const { current } = carouselRef;
        if (!current) return;
    
        const handleScroll = () => {
          const maxScroll = current.scrollWidth - current.clientWidth;
    
          if (current.scrollLeft >= maxScroll - 10) {
            current.scrollLeft = current.scrollWidth / 3;
          }
          if (current.scrollLeft <= 10) {
            current.scrollLeft = current.scrollWidth / 3;
          }
        };
    
        current.addEventListener("scroll", handleScroll);
        current.scrollLeft = current.scrollWidth / 3;
    
        return () => current.removeEventListener("scroll", handleScroll);
      }, []);




    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (menu) => {
      setOpenDropdown(openDropdown === menu ? null : menu);
    };

     
  
    return (
        <>
      <nav className="navbar">
             <div className="navbar__left">
        <div className="navbar__logo">zapier</div>
  
        <div className="navbar__links">
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("products")}
            >
              Products ▾
            </button>
            {openDropdown === "products" && (
              <div className="dropdown-content">
                <a href="#">App Integrations</a>
                <a href="#">Zap Editor</a>
                <a href="#">AI Features</a>
              </div>
            )}
          </div>
  
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("solutions")}
            >
              Solutions ▾
            </button>
            {openDropdown === "solutions" && (
              <div className="dropdown-content">
                <a href="#">Marketing</a>
                <a href="#">Sales</a>
                <a href="#">Customer Support</a>
              </div>
            )}
          </div>
  
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleDropdown("resources")}
            >
              Resources ▾
            </button>
            {openDropdown === "resources" && (
              <div className="dropdown-content">
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
                <a href="#">Guides</a>
              </div>
            )}
          </div>
  
          <a href="#" className="navbar__link">Enterprise</a>
          <a href="#" className="navbar__link">Pricing</a>
        </div>
        </div>
  
        <div className="navbar__actions">
          <a href="#" className="navbar__link">Explore apps</a>
          <a href="#" className="navbar__link">Contact sales</a>
          <a href="#" className="navbar__link">Log in</a>
          <button className="signup-btn">Sign up</button>
        </div>
       
        
      </nav>
      <hr className="navbar-divider "/>


      <section className="hero-with-image">
        <div className="hero">
          <h1 className="hero__title">
            Automate <br /> without limits
          </h1>
          <p className="hero__subtitle">
            Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets, no delays. The only limit is your imagination.
          </p>
          <div className="hero__buttons">
            <button className="email-btn">Start free with email</button>
            <button className="google-btn">
              <img src="google-icon.png" alt="Google Icon" className="google-icon" />
              Start free with Google
            </button>
          </div>
        </div>

        <div className="hero__image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXaFp3pofqi742k3_MDdo7xXiKFUiahenzw&s" alt="Automation Illustration" />
        </div>
      </section>




      
      <div className="carousel-wrapper">
      <h2 className="carousel-heading">WHAT WILL YOU AUTOMATE TODAY?</h2>
      <div className="carousel-controls">
       

        <div className="carousel-container" ref={carouselRef}>
          {infiniteItems.map((item, index) => (
            <div className="carousel-card" key={index}>
              <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="card-title">{item.title}</div>
            </div>
          ))}
        </div>

         
      </div>
      <div className="scroll-buttons-bottom">
    <button className="scroll-button left" onClick={() => scroll("left")}>←</button>
    <button className="scroll-button right" onClick={() => scroll("right")}>→</button>
  </div>
    </div>
 


 

    <div className="workflow-container">
      <h1 className="workflow-heading">Build powerful workflows<br/> incredibly fast</h1>
      <p className="workflow-subheading">
        Whether you're a team of one or a thousand, <span className="highlighted">Zapier</span> puts the power of automation in your hands—no coding required.
        Take your workflows to the next level with our suite of automation tools.
      </p>

      <div className="workflow-image">
        <img src="https://media.discordapp.net/attachments/1358118497460293954/1361560562814947498/Group_47.png?ex=68012dd6&is=67ffdc56&hm=4371f57c1dd71da206b0b9a497f5c2b90cd099a4cf5779f4db511d0e3fe3dbcf&=&format=webp&quality=lossless&width=874&height=431" alt="Workflow Example" />
      </div>

      <h3 className="automation-heading">MEET OUR AUTOMATION PRODUCTS</h3>

      <div className="automation-products">
        <div className="product-card">
          <span className="icon">⚡</span>
          <h4>Zaps</h4>
          <p>Automate advanced workflows with the full building power of Zapier.</p>
          <a href="#">Explore Zaps →</a>
        </div>

        <div className="product-card">
          <span className="icon">▭</span>
          <h4>Interfaces</h4>
          <p>Build professional apps, forms, and web pages that easily connect to your Zaps and Tables.</p>
          <a href="#">Explore Interfaces →</a>
        </div>

        <div className="product-card">
          <span className="icon">▥</span>
          <h4>Tables</h4>
          <p>Get more storage and control of the data that powers your automated workflows.</p>
          <a href="#">Explore Tables →</a>
        </div>
      </div>
    </div>






    <div className="templates-wrapper">
      <h2 className="templates-title">Get started right now with our <br/>library of templates</h2>
      <p className="templates-subtitle">
        No need to start from scratch. Get a head start on building your perfect workflow and experience the magic of automation in minutes.
      </p>
      <div className="templates-grid">
        {templates.map((template, index) => (
          <div className="template-card" key={index}>
            <div className="template-img">
              <img src={template.image} alt={template.title} />
            </div>
            <h4>{template.title}</h4>
            {/* <a href={template.link}>Get started →</a> */}
          </div>
        ))}
      </div>
    </div>



    
      </>
      

  );
}
export default Navbar;
