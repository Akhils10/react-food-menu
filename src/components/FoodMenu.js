import React, { Component } from "react";
import $ from "jquery";

class FoodMenu extends Component {
    constructor() {
        super();

        this.state = {
            categories: [
                {
                    title: "Popular"
                },
                {
                    title: "Rise and Dawn Bake House"
                },
                {
                    title: "All Day Food"
                },
                {
                    title: "Breakfast Sides"
                },
                {
                    title: "Salads and Mains"
                },
                {
                    title: "Sides"
                },
                {
                    title: "Smoothies"
                },
                {
                    title: "Fresh Juices"
                },
                {
                    title: "Specialty Coffee"
                },
                {
                    title: "House made Cold Drinks"
                }
            ],
            count: window.innerWidth < 540 ? this.state.categories.length : 4
        }
    }

    timeHandler = this.timeAction(function () {
        this.updateCount();
    }, 200);

    timeAction (fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
    }

    componentDidMount() {
        this.updateCount();

        window.addEventListener("resize", this.timeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.timeHandler);
    }
    
    handleToggleMenu = (e) => {
        e.preventDefault();
        $('.sub-menu-wrapper').toggle();
    }

    updateCount = () => {
        if(window.innerWidth < 540){
            this.setState({
                count: this.state.categories.length
            })
        }
        else if(window.innerWidth > 540 && window.innerWidth < 680){
            this.setState({
                count: 3
            })
        }
        else if(window.innerWidth > 680 && window.innerWidth < 820){
            this.setState({
                count: 4
            })
        }
        if(window.innerWidth > 820){
            this.setState({
                count: 5
            })
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper-container">
                    <div className="wrapper-nav">
                        <nav>
                            <ul className="menu-list">
                                {this.state.categories.map((item, index) => {
                                    if(index <= this.state.count - 1){
                                        if(index === 0){
                                            return <li key={index} style={{paddingLeft: 0}}><a href="/"><span>{ item.title} </span></a></li>
                                        }
                                        return <li key={index}><a href="/"><span>{ item.title} </span></a></li>
                                    }
                                    return '';
                                })}
                            </ul>
                            <div className="menu-buttons">
                                <button onClick={e => this.handleToggleMenu(e)}>
                                    <span>More</span>
                                </button>
    
                                <div className="sub-menu-wrapper">
                                    <div className="sub-menu-container">
                                        <div className="sub-menu">
                                            <ul>
                                                {this.state.categories.map((item, index) => {
                                                    if(index > this.state.count - 1){
                                                        return <li key={index}><span><a href="/"><span>{ item.title} </span></a></span></li>
                                                    }
                                                    return '';
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }

}

export default FoodMenu;

