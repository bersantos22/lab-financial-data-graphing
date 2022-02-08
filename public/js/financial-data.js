import axios from 'axios'
import {useState, useEffect} from 'react'
import Chart from 'chart.js/auto'

const[chart, setChart] = useState([])
useEffect(()=> {
    async function fetchData(){
        try{
            const result = await axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
            setChart(result.data.bpi);
            console.log(result.data.bpi)
        } catch(error){console.error(error)}
    }
}, [])
fetchData();