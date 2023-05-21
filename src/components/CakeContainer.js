import React from 'react';
import { buyCake } from '../redux/index';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>No of Cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(CakeContainer);