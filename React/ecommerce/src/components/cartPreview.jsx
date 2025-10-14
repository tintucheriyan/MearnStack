
import beautyImg from "../assets/beauty.jpg";
import fashionImg from "../assets/fashion.jpg"
import homeImg from "../assets/home.jpg"
import appliancesImg from "../assets/appliances.jpg"
import furnitureImg from "../assets/furniture.jpg"
import electronicsImg from "../assets/electronics.jpg"
import sportsImg from "../assets/sports.jpg"
import foodImg from "../assets/food.jpg"
function CategoryList() {

    const categories = [
  { name: "Electronics", img:beautyImg},
  { name: "Fashion", img: fashionImg},
  { name: "Home", img: homeImg },
  { name: "Beauty", img: beautyImg},
  { name: "Appliances", img: appliancesImg },
  { name: "Foods & Drinks", img:foodImg },
  { name: "Furniture", img:furnitureImg},
  { name: "Electronics", img:electronicsImg },
  { name: "Sports", img: sportsImg },
];
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="category-card">
            <p>{cat.name}</p>
            <img src={cat.img} alt="Product" width="80" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
