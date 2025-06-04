const aboutPageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="about-container">
            <div class="menu-title">ABOUT US</div>
            <seciton class="about-section">
                <p>
                    At <strong>The Odin Restaurant</strong>, we believe great 
                    food brings people together. Since opening our doors, we've 
                    aimed to create a welcoming space where classic flavors meet 
                    modern flair. Our chefs focus on fresh, locally sourced ingredients 
                    to craft meals that are boh comforting and exciting. Whether you're 
                    joining us for a quick lunch, a relaxed dinner, or a celebration, we're 
                    here to make every bite memorable.
                </p>
            </seciton>
            <section class="info">
                <div class="hours">
                    <h3>Business Hours</h3>
                    <ul>
                        <li>Monday - Friday: 11:30am - 9:30pm</li>
                        <li>Saturday: 12:00pm - 10:00pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
                <div class="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><strong>Address:</strong> 123 Flavor Street, Sydney</li>
                        <li><strong>Phone:</strong> (04) 2552 5432</li>
                        <li><strong>Email:</strong> hello@odinrestaurant.com.au</li>
                        <li><strong>Website:</strong> www.odinrestaurant.com.au</li>
                    </ul>
                </div>
            </section>
        </div>
    `;
}

export { aboutPageLoad };