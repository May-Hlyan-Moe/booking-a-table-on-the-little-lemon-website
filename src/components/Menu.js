import recipes from '../recipes';
import food3 from '../images/food3.jpg';

const Menu = () => {
    return (
        <div className="Menu">
            <div className="menu-header">
                <h2>This week specials!</h2>
                <button>Order Menu</button>
            </div>

            {/* menu food card */}
            <div className='cards'>
                {
                    recipes.map(recipe => 
                        <div key={recipe.id} className='each-card'>
                            <img src={food3} alt={recipe.title} />
                            <div className='menu-content'>
                                <p>{recipe.title}</p>
                                <p>${recipe.price}</p>
                            </div>
                            <p className='description'>{recipe.description}</p>
                            <button>Order Now</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Menu;