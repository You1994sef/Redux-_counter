import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strRes => (
                        <li key={strRes.id} onClick={() => this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.counter,
        storedResults: state.results

    }
};
const mapDispatchToProp = dispatch =>{
    return{
        onIncCounter: () => dispatch({type: 'INC'}),
        onDecCounter: () => dispatch({type: 'DEC'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubCounter: () => dispatch({type: 'SUB', value: 5}),
        onStoreResult: () => dispatch ({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch ({type: 'DELETE_RESULT', resId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(Counter);