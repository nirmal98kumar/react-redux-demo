import React from 'react';
import { buyIceCream } from '../redux/index';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>No of Icecreams - {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCream}>Buy Icecreams</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(IceCreamContainer);