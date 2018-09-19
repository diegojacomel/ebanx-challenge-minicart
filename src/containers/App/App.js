/* Modules */
import React, { Component } from 'react';

/* Components */
import Intro from '../../components/Intro/Intro';
import Collapse from '../../components/Collapse/Collapse';
import Title from '../../components/Title/Title';

/* Containers */
import Container from '../Container/Container';
import Products from '../Products/Products';
import TotalProducts from '../TotalProducts/TotalProducts';
import StepOne from '../Steps/StepOne/StepOne';
import StepTwo from '../Steps/StepTwo/StepTwo';
import StepThree from '../Steps/StepThree/StepThree';
import Footer from '../Footer/Footer';

/* Styles */
import './App.css';

class App extends Component {
    state = {
        dataTable: []
    }

    componentDidMount() {
        this.renderTable()
    }

    renderTable = () => {
        let dataTable = [
            {title: "Personal data", content: <StepOne />},
            {title: "Billing Address", content: <StepTwo />},
            {title: "Payment", content: <StepThree />}
        ];

        this.setState({
            dataTable
        });
    }

    render() {
        const { state } = this;

        return (
            <div className="App">
                <Container>
                    <Intro>
                        <Title tag="h1">
                            E-book store
                        </Title>
                        <p>
                            Welcome to the best place for you to learn about Latin América E-commerce. Start to learn now and discovery ways options to improve your sales.
                        </p>
                    </Intro>

                    <Products />
                    <TotalProducts />

                    <Collapse
                        dataCollapse={state.dataTable}
                    />

                    <Footer />
                </Container>
            </div>
        );
    }
}

export default App;