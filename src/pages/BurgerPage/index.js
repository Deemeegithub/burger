import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BurgerControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
//import axios from "../../axios-orders";
// import Spinner from "../../components/General/Spinner";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../../redux/actions/burgerActions";

// const INGREDIENTS_PRICE = { Salad: 150, cheese: 250, bacon: 800, meat: 1500 }
// const INGREDIENTS_NAME = { Salad: 'Салад', bacon: 'Гайхан мах', cheese: 'Бяслаг', meat: 'Үхрийн мах' }

function BurgerPage(props) {
    // const [ingredients, setIngredients] = useState({ Salad: 0, cheese: 0, bacon: 0, meat: 0 });
    // const [totalPrice, setTotalPrice] = useState(1000);
    // const [purchasing, setPurchasing] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState(false);


    // const [loading, setloading] = useState(false);


    const navigate = useNavigate();

    // const componentDidMount = () => {

    // }
    const ContinueOrder = () => {
        navigate("/ship");
    }
    // const ContinueOrder = () => {
    //     const params = [];
    //     for (let orts in props.burgeriinOrts) {
    //         params.push(orts + "=" + props.burgeriinOrts[orts]);
    //     }
    //     params.push('dun=' + props.niitUne);
    //     const query = params.join("&");
    //     navigate({
    //         pathname: "/ship",
    //         search: query
    //     });
    // }


    const showComfirmmodal = () => {
        setConfirmOrder(true);
    };
    const closeComfirmmodal = () => {
        setConfirmOrder(false);
    };
    // const ortsNemeh = (type) => {
    //     const newIngredients = { ...props.burgeriinOrts }
    //     newIngredients[type]++;

    //     const newPrice = props.niitUne + INGREDIENTS_PRICE[type];

    //     setPurchasing(true);
    //     setTotalPrice(newPrice);
    //     setIngredients(newIngredients);

    //     //this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });

    // }
    // const ortsHasah = (type) => {
    //     if (props.burgeriinOrts[type] > 0) {
    //         const newIngredients = { ...props.burgeriinOrts }
    //         newIngredients[type]--;

    //         const newPrice = props.niitUne - INGREDIENTS_PRICE[type];

    //         setPurchasing(newPrice > 1000);
    //         setTotalPrice(newPrice);
    //         setIngredients(newIngredients);

    //         //this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
    //     }
    // }



    return (
        <div>
            <Modal
                closeComfirmmodal={closeComfirmmodal}
                show={confirmOrder}
            >
                {
                    // loading ? (<Spinner />) : (
                    <OrderSummary
                        OnCancel={closeComfirmmodal}
                        OnContinue={ContinueOrder}
                    />
                    // <OrderSummary
                    //     OnCancel={closeComfirmmodal}
                    //     OnContinue={ContinueOrder}
                    //     ingredientNames={props.ingredientNames}
                    //     ingredients={props.burgeriinOrts}
                    //     totalPrice={props.niitUne}
                    // />
                    // )
                }

            </Modal>
            <Burger />  {/*redux ashiglsan*/}
            {/* <Burger orts={props.burgeriinOrts} /> */}
            <BuildControls
                showComfirmmodal={showComfirmmodal}
            />

            {/* <BuildControls
                showComfirmmodal={showComfirmmodal}
                ingredientNames={props.ingredientNames}
                disabledingredients={disabledingredients}
                ortsNemeh={props.ortsNem}
                ortsHasah={props.ortsHas}
                totalPrice={props.niitUne}
                disabledOrderButton={!props.purchasing} /> */}
        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//         burgeriinOrts: state.ingredients,
//         niitUne: state.totalPrice,
//         purchasing: state.purchasing,
//         ingredientNames: state.ingredientNames,
//     }
// }
// const mapDispachToProps = dispach => {
//     return {
//         ortsNem: ortsNer => dispach(actions.addIngredient(ortsNer)),
//         ortsHas: ortsNer => dispach(actions.removeIngredient(ortsNer)),
//     }
// }
export default BurgerPage;
// export default connect(mapStateToProps, mapDispachToProps)(BurgerPage);

// export class BurgerPage extends Component {
//     state = {
//         ingredients: {
//             Salad: 0,
//             cheese: 0,
//             bacon: 0,
//             meat: 0
//         },
//         totalPrice: 1000,
//         purchasing: false,
//         confirmOrder: false,
//         //loading: false,
//     }
//componentDidMount = () => {

// this.setState({ loading: true });
// axios.get('/orders.json').then(response => {
//     let arr = Object.entries(response.data);
//     arr = arr.reverse(); // массив ийг тонгоргодог функц [1,2,3] [3,2,1]
//     arr.forEach(le => {
//         console.log(le[1].hayag.name + "==>" + le[1].dun);
//     });

// }).catch(err => console.log(err)).finally(() => { this.setState({ loading: false }); }); // finally() then catch алинч ажилсан хамаагүй дараан ажилдаг
// }

// ContinueOrder = () => {

//     // const order = {
//     //     orts: this.state.ingredients,
//     //     dun: this.state.totalPrice,
//     //     hayag: {
//     //         name: 'Сараа',
//     //         city: 'Улаанбаатар',
//     //         street: '10r Хороолол 23-12А'
//     //     }
//     // }
//     // this.setState({ loading: true });
//     // axios.post('/orders.json', order).then(response => {

//     // }).finally(() => {
//     //     this.setState({ loading: false });
//     // });
//     this.closeComfirmmodal();
//     this.urlurl();
// }

// showComfirmmodal = () => {
//     this.setState({ confirmOrder: true });
// };
// closeComfirmmodal = () => {
//     this.setState({ confirmOrder: false });
// };
// ortsNemeh = (type) => {
//     const newIngredients = { ...this.state.ingredients }
//     newIngredients[type]++;

//     const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

//     this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
// }
// ortsHasah = (type) => {
//     if (this.state.ingredients[type] > 0) {
//         const newIngredients = { ...this.state.ingredients }
//         newIngredients[type]--;

//         const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
//         this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
//     }
// }


// render() {
//     console.log(this.props);
//     const disabledingredients = { ...this.state.ingredients };
//     for (let key in disabledingredients) {
//         disabledingredients[key] = disabledingredients[key] <= 0;
//     }
//     return (
//         <div>
//             <Modal
//                 closeComfirmmodal={this.closeComfirmmodal}
//                 show={this.state.confirmOrder}
//             >
//                 {
//                     this.state.loading ? (<Spinner />) : (
//                         <OrderSummary
//                             OnCancel={this.closeComfirmmodal}
//                             OnContinue={this.ContinueOrder}
//                             ingredientNames={INGREDIENTS_NAME}
//                             ingredients={this.state.ingredients}
//                             totalPrice={this.state.totalPrice}
//                         />
//                     )
//                 }

//             </Modal>
//             <Burger orts={this.state.ingredients} />
//             <BuildControls
//                 showComfirmmodal={this.showComfirmmodal}
//                 ingredientNames={INGREDIENTS_NAME}
//                 disabledingredients={disabledingredients}
//                 ortsNemeh={this.ortsNemeh}
//                 ortsHasah={this.ortsHasah}
//                 totalPrice={this.state.totalPrice}
//                 disabledOrderButton={!this.state.purchasing} />
//         </div>
//     );
// }
// }

// export default connect(a, b)(BurgerPage);