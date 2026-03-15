import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>SmartConsult</h2>
          <p>
            Helping businesses simplify operations and
            scale with smarter digital systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#promise">Case Studies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-links">
          <h3>Solutions</h3>
          <ul>
            <li>Automation Systems</li>
            <li>Growth Analytics</li>
            <li>Business Intelligence</li>
            <li>Conversion Optimization</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><a href="mailto:smartconsult221@gmail.com">Email: smartconsult221@gmail.com</a></p>
          <p><a href="tel:+919826777175">Phone: +91 9826777175</a></p>
          <p><a href="https://wa.me/919826777175" target="_blank" rel="noopener noreferrer">WhatsApp: +91 9826777175</a></p>
          <p><a href="https://instagram.com/smartconsult02" target="_blank" rel="noopener noreferrer">Instagram: @smartconsult02</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SmartConsult. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;