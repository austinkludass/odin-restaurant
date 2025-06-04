const menuPageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="menu-container">
            <div class="menu-title">MENU</div>
            <div class="menu-grid">
                <div class="menu-subtitle">Entrees</div>
                <div class="menuitem-card">
                    <div>Garlic & herb Arancini</div>
                    <div>
                        Crispy risotto balls with mozzarella and herbs, 
                        served with a rich tomato basil sauce.
                    </div>
                    <div>$12</div>
                </div>
                <div class="menuitem-card">
                    <div>Smoked Salmon Blinis</div>
                    <div>
                        House-cured smoked salmon on mini buckwheat pancakes 
                        with dill creme fraiche and lemon zest.
                    </div>
                    <div>$15</div>
                </div>
                <div class="menuitem-card">
                    <div>Spiced Pumpkin Soup</div>
                    <div>
                        Creamy roasted pumpkin soup with hints of cumin and nutmeg, 
                        served with crusty sourdough.
                    </div>
                    <div>$10</div>
                </div>
                <div class="menu-subtitle">Mains</div>
                <div class="menuitem-card">
                    <div>Chargrilled Ribeye Steak</div>
                    <div>
                        300g of tender ribeye grilled to your liking, served with garlic 
                        mash, broccolini, and peppercorn jus.
                    </div>
                    <div>$38</div>
                </div>
                <div class="menuitem-card">
                    <div>Lemon Thyme Chicken Breast</div>
                    <div>
                        Pan-seared chicken breast with a lemon thyme glaze, roasted chat 
                        potatoes, and seasonal greens.
                    </div>
                    <div>$29</div>
                </div>
                <div class="menuitem-card">
                    <div>Wild Mushroom Risotto (V)</div>
                    <div>
                        Creamy arborio rice with sauteed wild mushrooms, truffle oil, 
                        and shaved parmesan.
                    </div>
                    <div>$26</div>
                </div>
                <div class="menu-subtitle">Desserts</div>
                <div class="menuitem-card">
                    <div>Vanilla Bean Panna Cotta</div>
                    <div>
                        A silky smooth panna cotta topped with a mixed berry compote and 
                        a touch of mint.
                    </div>
                    <div>$12</div>
                </div>
                <div class="menuitem-card">
                    <div>Sticky Date Pudding</div>
                    <div>
                        Warm date sponge served with butterscotch sauce and vanilla ice 
                        cream.
                    </div>
                    <div>$14</div>
                </div>
            </div>
        </div>
    `;
}

export { menuPageLoad };