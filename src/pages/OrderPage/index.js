import React from "react";
import Spinner from "../../components/General/Spinner";
// import css from "./style.module.css";
import { connect } from "react-redux";

import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";
class OrderPage extends React.Component {

    componentDidMount = () => {
        this.props.loadOrders(this.props.localId);

    }

    // ContinueOrder = () => {
    //     const order = {
    //         orts: this.state.ingredients,
    //         dun: this.state.totalPrice,
    //         hayag: {
    //             name: 'Сараа',
    //             city: 'Улаанбаатар',
    //             street: '10r Хороолол 23-12А'
    //         }
    //     }
    //     this.setState({ loading: true });
    //     axios.post('/orders.json', order).then(response => {

    //     }).finally(() => {
    //         this.setState({ loading: false });
    //     });
    // }
    render() {
        // console.log(JSON.stringify(this.state.orders));
        return (
            <div>
                {this.props.loading ? <Spinner /> : this.props.orders.map(el => {
                    return (<Order key={el[0]} order={el[1]} />)
                })}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        localId: state.signupLoginReducer.localId
    };
};
const mapDispachToProps = dispatch => {
    return {
        loadOrders: (localId) => dispatch(actions.loadOrders(localId))
    }
}
export default connect(mapStatetoProps, mapDispachToProps)(OrderPage);