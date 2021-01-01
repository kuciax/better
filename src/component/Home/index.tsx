import { useSelector } from "react-redux"
const Home = () => {
    const state = useSelector(state => state)
    return <div>{JSON.stringify(state)}</div>
}

export default Home; 