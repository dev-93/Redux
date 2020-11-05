import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} increase={increase} decrease={decrease} />;
};

const mapStateToProps = (state) => ({
    number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        console.log("increase");
    },
    decrease: () => {
        console.log("decrease");
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
