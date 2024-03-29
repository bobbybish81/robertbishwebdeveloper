import '../styles/AboutMe.css';

const AboutMe = () => {

  return (
      <section className='aboutme-section' id='aboutme'>
        <h1>About Me</h1>
        <article className='aboutme-article px-5 pt-5'>
          <img className='aboutme-img' src={require('../assets/about_me.webp')} alt='profile-img to appear'/>
          <div className='about-text'>
            <h5>My Background</h5>
            <p>{`"Originally from the United Kingdom and currently based in Stockholm, Sweden, I'm an ambitious coder with a passion for web development. After leaving my career as a data analyst, I embraced the challenge of becoming a fullstack web developer and since embarking on this journey in January 2022, I've acquired advanced expertise in HTML, CSS, Javascript, Typescript, React, Next.js, Node.js, MongoDB, and numerous other frameworks. In December 2022 I earned a diploma having successfully completed the Fullstack JavaScript Career Program at </salt> (School of Applied Technology)"`}</p>
            <p>{`"My diverse portfolio encompasses a range of projects that demonstrate my versatility across different domains. From dynamic e-commerce platforms to engaging web applications, each project showcases my knowledge of web development and ability to turn an idea into reality."`}</p>
            <p>{`"Thank you for visiting, and I'm excited to delve into the limitless possibilities of web development with you!"`}</p>
          </div>
        </article>
        <article className='mobile-aboutme-article px-5'>
          <div className='about-text mb-5'>
          <h5>My Interests</h5>
            <img className='hobbies-img' src={require('../assets/family.webp')} alt='hobbies-img to appear'/>
            <p>{`"Coding holds a special place in my heart as it nurtures my creativity and allows me to apply my problem-solving skills to construct meaningful digital experiences. The satisfaction I get from transforming an abstract concept into a fully functional application is immeasurable, fueling my passion for continuous growth and development."`}</p>
            <p>{`"Beyond the realms of coding, my heart lies in the world of sports. Football was always my first love and my enthusiasm for the game today has not changed. While my childhood dreams of becoming a professional goalkeeper may not have materialized, my passion for the sport remains resolute as I continue to play for a local team here in Stockholm even now. I love the  camaraderie, competition and drive to be the best version of myself, both on and off the field."`}</p>
            <p>{`"I also enjoy movies, music events and of course spending time with friends and family, especially my two children. The bonds I share with those closest to me are an integral part of who I am, bringing fun, support, and a sense of belonging to life's adventure!"`}</p>
          </div>
        </article>
        <article className='desktop-aboutme-article p-5'>
          <div className='about-text'>
            <h5>My Interests</h5>
            <p>{`"Coding holds a special place in my heart as it nurtures my creativity and allows me to apply my problem-solving skills to construct meaningful digital experiences. The satisfaction I get from transforming an abstract concept into a fully functional application is immeasurable, fueling my passion for continuous growth and development."`}</p>
            <p>{`"Beyond the realms of coding, my heart lies in the world of sports. From a young age football was always first love and my enthusiasm for the game today remains unchanged. While my childhood dreams of becoming a professional goalkeeper may not have materialized, my passion for the sport remains resolute as I continue to play for a local team here in Stockholm even now. I love the  camaraderie, competition and drive to be the best version of myself, both on and off the field."`}</p>
            <p>{`"I also enjoy movies, music events and of course spending time with friends and family, especially my two children. The bonds I share with those closest to me are an integral part of who I am, bringing fun, support, and a sense of belonging to life's adventure!"`}</p>
          </div>
          <img className='hobbies-img' src={require('../assets/family.webp')} alt='hobbies-img to appear'/>
        </article>
      </section>
  )
}

export default AboutMe