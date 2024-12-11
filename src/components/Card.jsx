import { AiFillStar } from "react-icons/ai"
import { BsFillBagFill } from "react-icons/bs"

const Card = ({img, title, totalReviews, prevPrice, newPrice}) => {
  return (
    <section className="card">
        <img className="card-img" src={img} />
        <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <div className="card-reviews">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                <span className="total-reviews">{totalReviews}</span>
            </div>

            <section className="price-container">
                <div className="card-price">
                    <del>{prevPrice}</del> {newPrice}
                </div>

                <div className="bag">
                    <BsFillBagFill />
                </div>
            </section>
        </div>
    </section>
  )
}
export default Card