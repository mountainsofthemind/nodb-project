import React, { Component } from 'react';

class CaloricThreshold extends Component {

    constructor() {
        super();

        this.state = {
            gender: -1,
            weight: -1,
            heightft: -1,
            heightin: -1,
            age: -1,
            activityLevel: -1,
            caloricThresh: ""
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.gender === "male") {
            this.getMaleBMR()
        } else if (this.state.gender === "female") {
            this.getFemaleBMR()
        }
    }

    getMaleBMR = () => {
        var heightInInches = (this.state.heightft*12 + +this.state.heightin);
        console.log(heightInInches)
        let maleBMR = 66 + (6.23 * this.state.weight) + (12.7 * heightInInches) - (6.8 * this.state.age);
        console.log(maleBMR);
               this.setState({caloricThresh:this.state.activity === 'sedentary' ? `Your caloric threshold is ${(maleBMR * 1.2)}`
                :this.state.activity === 'lightly active' ? `Your caloric threshold is ${(maleBMR * 1.375)}` 
                :this.state.activity === 'moderately active' ? `Your caloric threshold is ${(maleBMR * 1.55)}`
                :this.state.activity === 'very active' ? `Your caloric threshold is ${(maleBMR * 1.725)}`
                :this.state.activity === 'extra active' ? `Your caloric threshold is ${(maleBMR * 1.9)}`
                : null})
            }  
    
    // if (this.state.activity === 'sedentary') {
    //     return maleBMR * 1.2
    // } else if (this.state.activity === 'lightly active'){
    //     return maleBMR * 1.375
    // } else if (this.state.activity === 'moderately active'){
    //     return maleBMR * 1.55
    // } else if (this.state.activity === 'very active'){
    //     return maleBMR * 1.725
    // } else if (this.state.activity === 'extra active'){
    //     return maleBMR * 1.9
    // }
    
    getFemaleBMR = () => {
        var heightInInches = (this.state.heightft*12 + +this.state.heightin);
        let femaleBMR = 655 +(4.35 * this.state.weight) + (4.7 * heightInInches)-(4.7*this.state.age);
        // console.log(heightInInches);
        console.log(femaleBMR);
        
    }

    render() {
        console.log(this.state)


       

        let ageArr = [];
        for(let i = 10; i<=99; i++)
            ageArr.push(<option value={i}>{i}</option>)
        
        let footArr = [];
        for(let i = 3; i <=8; i++) {
            footArr.push(<option value={i}>{i}</option>)
        }

        let inchArr = [];
        for(let i=0; i<=11;i++) {
            inchArr.push(<option value={i}>{i}</option>)
        }

        let weightArr = [];
        for(let i=75; i <=1200; i++) {
            weightArr.push(<option value={i}>{i}</option>)
        }
        return (
            <div>
            <p> CaloricThreshold Component </p>
            <form onSubmit={this.handleSubmit}>
              <select name="gender" id="gender" onChange={this.handleInputChange}>
                  <option>Select Gender</option>
                  <option value = "male">Male</option>
                  <option value = "female">Female</option>
                  </select>  
              <select name="activity" id="activity" onChange={this.handleInputChange}>
                  <option>How much do you exercise?</option>
                  <option value = "sedentary">Little or no exercise</option>
                  <option value = "lightly active">Light exercise/sports 1-3 days/week</option>
                  <option value = "moderately active">Moderate exercise/sports 3-5 days/week</option>
                  <option value = "very active">Hard exercise/sports 6-7 days/week</option>
                  <option value = "extra active">Very hard exercise/sports and physical job or 2x training</option>
              </select>
              <select name="age" id="age" onChange={this.handleInputChange}>
                  <option>Select Age</option>
                  {ageArr}
              </select>
              <select name="heightft" id="heightfeet" onChange={this.handleInputChange}>
                  <option>Height feet?</option>
                  {footArr}
              </select>
              <select name="heightin" id="heightinch" onChange={this.handleInputChange}>
                  <option>Height inches?</option>
                  {inchArr}
              </select>
              <select name="weight" id="weight" onChange={this.handleInputChange}>
                  <option>Current weight in pounds</option>
                  {weightArr}
              </select>
                  <input type="submit" value="Submit" onClick={this.handleSubmit} disabled={this.state.age === -1 || this.state.heightft === -1 || this.state.heightin ===-1 ||
                this.state.weight ===-1 || this.state.activity ===-1 || this.state.gender ===-1}/>
            </form>
            <h1>{this.state.caloricThresh}</h1>
            </div>
        )
    }
}

export default CaloricThreshold;