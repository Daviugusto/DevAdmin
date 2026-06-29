import { useState } from 'react'
import { Background, Boxcards, BoxCharts,Title} from './styles.js'
import {Boxer} from '../../components/boxer/styles.js'
import Chart from '../../components/charts/charts.jsx'
import BarCharts from '../../components/charts/chartsbar.jsx'
import Layout from '../../components/Layout/layout.jsx'
import StatCard from '../../components/statcard/statcard.jsx'


function Dashboard() {


    return (



        <Boxer>
            <Layout></Layout>
            <Background>
            <Boxcards>
                <StatCard
                    title="Earnings"
                    value="$628"
                    background="#ffffff"

                />

                <StatCard
                    title="Share"
                    value="2434"
                    background="#fff"

                />

                <StatCard
                    title="Likes"
                    value="1259"
                    background="#fff"

                />

                <StatCard
                    title="Rating"
                    value="8.5"
                    background="#fff"

                />
            </Boxcards>

            <BoxCharts>
                <Title>Ano de 2025 x Ano de 2026</Title>
                <BarCharts></BarCharts>
                <Title>Mês de 2026</Title>
                <Chart></Chart>
            </BoxCharts>
            </Background>
        </Boxer>

    )
}

export default Dashboard

