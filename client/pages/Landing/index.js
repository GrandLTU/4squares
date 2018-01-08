import React from 'react';
import {connect} from 'react-redux';
import Squares from "../../components/Squares";
import {clickSquare} from "../../core/modules/squares/squaresActions";
import {restartSession} from "../../core/modules/session/sessionActions";

class Landing extends React.Component {
    constructor(...args) {
        super(...args);

        this.onSquareClick = this.onSquareClick.bind(this);
    }

    onSquareClick(square) {
        if (this.props.session.get('showing') || this.props.session.get('lost')) {
            return;
        }

        this.props.onSquareClick(square);
    }

    render() {
        return (
            <div className="container">
                <h4>Round {this.props.session.get('round')}</h4>
                <Squares squares={this.props.squares} callback={this.onSquareClick} disabled={this.props.session.get('showing') || this.props.session.get('lost')}/>

                {this.props.session.get('lost') ? (
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h5>Your score: {this.props.session.get('round') - 1}</h5>
                            <button className="btn btn-primary" onClick={this.props.onRestartClick}>
                                Try again
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    onSquareClick: (square) => dispatch(clickSquare(square)),
    onRestartClick: () => dispatch(restartSession()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Landing);
