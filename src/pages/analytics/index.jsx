import {Boxer}from '../../components/boxer/styles.js'
import StatCard from '../../components/statcard/statcard.jsx'
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Analyticchart from '../../components/charts/chartsanalytics.jsx';
import { BoxAnalytics ,BoxcardsAnaly,ChartContainer,ChartTitle,ChartWrapper,SummaryContainer,SummaryList,SummaryItem,ColorBox } from './styles.js'




function Analytics() {


  return (
    <Boxer>
    <Sidebar></Sidebar>
    <BoxAnalytics>
      <BoxcardsAnaly>
        <StatCard
                    title="Total Growth"
                    value="28%"
                    background="#ffffff"

                />
                <StatCard
                    title="Monthly Average"
                    value="5.2K$"
                    background="#ffffff"

                />
                <StatCard
                    title="Annually Average"
                    value="25.9K$"
                    background="#ffffff"

                />
                </BoxcardsAnaly>
        
            <ChartContainer>

                <ChartTitle>Distribuição de Vendas</ChartTitle>
                <ChartWrapper>

                <Analyticchart></Analyticchart>
                </ChartWrapper>
                <SummaryContainer>
    <SummaryList>
        <SummaryItem>
            <ColorBox color="#3B82F6" />
            Mobile
        </SummaryItem>
        <SummaryItem>
            <ColorBox color="#10B981" />
            Desktop
        </SummaryItem>
        <SummaryItem>
            <ColorBox color="#F59E0B" />
            Tablet
        </SummaryItem>
        <SummaryItem>
            <ColorBox color="#EF4444" />
            Api
        </SummaryItem>
    </SummaryList>
</SummaryContainer>

                </ChartContainer>

                

                </BoxAnalytics>
    </Boxer>
  )
}

export default Analytics
