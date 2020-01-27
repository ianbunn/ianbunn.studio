import React, { Component } from 'react'

const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

let row, element;
export default class Quote extends Component {
    state = {}

    componentDidMount() {
        this.getSheetValues();
    }

    checkForRowNotOne = (row) => {
        if (row === 1) {
            return row + 1
        } else {
            return row
        }
    }
    getRandomRow = () => {
        row = Math.floor(Math.random() * Math.floor(1477))
        this.checkForRowNotOne(row)
        return row
    }
    
    getSheetValues = async () => {
        try {
            this.getRandomRow();
            const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A${row}:B${row}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                    }
                });
            const data = await request.json();
            element = `"${data.values[0][1]}" by ${data.values[0][0]}`
            this.setState({
                Quote: element
            })
        } catch(err) {
            element = `"If talent's a kind of natural energy, doesn't it have to find an outlet?" by Haruki Murakami`
            this.setState({
                Quote: element
            })
        }
    }

    render() {
        return (
            <div>
                <h4>{this.state.Quote}</h4>
            </div>
        )
    }
    
}