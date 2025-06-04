const homePageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="homepage-container">
            <div>ODIN Restaurant</div>
            <div>
                Welcome to The Odin Restaurant - where delicious memories are made 
                daily. Nestled in the heart of the city, our restaurant serves 
                a mouthwatering fusion of classic comfort food and modern cuisine, 
                crafted with the freshest local ingredients. Whether you're craving 
                a cozy dinner with family or a night out with friends, The Golden Fork 
                offers warm hospitality and falvors that satisfy. Explore our seasonal 
                menus, handcrafted cocktails, and inviting atmosphere. Your table is 
                ready - come taste what everyone's talking about!
            </div>
        </div>
    `;
}

export { homePageLoad };