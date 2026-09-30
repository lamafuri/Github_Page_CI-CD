import Image from "next/image";

const categories = [
  {
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
  }
];

const features = [
  "Free shipping over $99",
  "1-year warranty on major products",
  "24/7 customer support",
  "Secure payment checkout"
];

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <div className="logo">My Shop</div>
          <div className="navLinks">
            <a href="#categories">Categories</a>
            <a href="#deals">Deals</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="heroContent">
          <div className="heroText">
            <p className="tag">#1 electronics destination</p>
            <h1>Upgrade your lifestyle with next-gen electronics</h1>
            <p>
              Discover premium gadgets for work, gaming and home. Find top brands, exclusive offers and
              fast delivery at myshop.
            </p>
            <div className="heroCta">
              <a href="#categories" className="btnPrimary">
                Shop Now
              </a>
              <a href="#deals" className="btnGhost">
                View Deals
              </a>
            </div>
          </div>
          <div className="heroImageWrap">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="Modern electronics setup with laptop and gadgets"
              width={900}
              height={700}
              className="heroImage"
              priority
            />
          </div>
        </section>
      </header>

      <section id="categories" className="section">
        <h2>Popular Categories</h2>
        <div className="grid">
          {categories.map((category) => (
            <article key={category.name} className="card">
              <Image src={category.image} alt={category.name} width={480} height={320} className="cardImage" />
              <h3>{category.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="deals" className="section deals">
        <div>
          <h2>Flash Deal of the Week</h2>
          <p>
            Save up to 40% on selected gaming laptops, wireless earbuds and smart displays. Limited stock
            available.
          </p>
          <a href="#contact" className="btnPrimary">
            Claim Offer
          </a>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1400&q=80"
          alt="Gaming laptop and accessories on desk"
          width={700}
          height={500}
          className="dealImage"
        />
      </section>

      <section className="section features">
        {features.map((feature) => (
          <div key={feature} className="featureItem">
            {feature}
          </div>
        ))}
      </section>

      <footer id="contact" className="footer">
        <h2>myshop</h2>
        <p>Email: contact@furi.info.np | Phone: +1 (800) 555-0199</p>
        <small>© {new Date().getFullYear()} myshop. All rights reserved.</small>
      </footer>
    </main>
  );
}
