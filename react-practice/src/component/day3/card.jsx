import "./day3style.css"
const Card = (props) => {

    const {kyrteng, description, season} = props;
    return(
        <div className="card">
            <h3>name: {kyrteng}</h3>
            <h3>description: {description}</h3>
            <h3>season: {season}</h3>

        </div>
    )
}
export default Card;