import { Container,Top } from "./styles.js";
function StatCard({ title, value, icon, background }) {

    return (
        <Container $background={background}>

            <Top>

                <h4>{title}</h4>

                {icon}

            </Top>

            <h2>{value}</h2>

        </Container>
    )
}

export default StatCard;