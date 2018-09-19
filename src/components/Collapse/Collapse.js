/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFormValues, getFormSyncErrors } from 'redux-form';

/* Components */
import Button from '../Button/Button';

/* Styles */
import './Collapse.css';

class Collapse extends Component {
    state = {
        behaviors: {
            collapseIndex: null
        }
    }

    stepOneFilled() {
        const { props: { syncErrorsOne } } = this;

        if (
            !syncErrorsOne.cpf &&
            !syncErrorsOne.name &&
            !syncErrorsOne.email
        ) {
            return true;
        }

        return false;
    }

    stepTwoFilled() {
        const { props: { syncErrorsTwo } } = this;

        if (
            !syncErrorsTwo.zipcode &&
            !syncErrorsTwo.address &&
            !syncErrorsTwo.city &&
            !syncErrorsTwo.uf
        ) {
            return true;
        }

        return false;
    }

    conditionalSteps(index) {
        const { props: { productsReducer } } = this;

        if (productsReducer.products && productsReducer.products.data) {
            const isActive = productsReducer.products.data.some(x => x.checked === true)

            return (
                (isActive && index === 0) ||
                (this.stepOneFilled() && index === 1) ||
                (this.stepTwoFilled() && index === 2)
                ?
                'is-active'
                :
                ''
            )
        }

        return
    }

    renderCollapse() {
        const { props: { dataCollapse, productsReducer } } = this;

        if (productsReducer.products && productsReducer.products.data) {
            return dataCollapse.map((collapse, index) => {
                return (
                    <div key={index} className={`Collapse-item ${this.conditionalSteps(index)}`}>
                        <Button className={`Collapse-item-button`} type="button">
                            <span className="Collapse-item-button-circle">{index + 1}</span>
                            {collapse.title}
                        </Button>
                        <div className={`Collapse-item-content`}>
                            {collapse.content}
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div className={`Collapse`}>
                {this.renderCollapse()}
            </div>
        );
    }
}

Collapse.propTypes = {
    dataCollapse: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        productsReducer: state.productsReducer,
        getFormValues: {
            stepOne: getFormValues('StepOneForm')(state),
            stepTwo: getFormValues('StepTwoForm')(state),
            stepThree: getFormValues('StepThreeForm')(state),
        },
        syncErrorsOne: getFormSyncErrors('StepOneForm')(state),
        syncErrorsTwo: getFormSyncErrors('StepTwoForm')(state),
        syncErrorsThree: getFormSyncErrors('StepThreeForm')(state)
    }
}

export default connect(mapStateToProps)(Collapse);