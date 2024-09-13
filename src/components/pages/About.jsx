import { Link, Outlet } from "react-router-dom"
export const About = () => {

    return (
        <div>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias sit cumque dolores numquam sapiente provident quo perferendis eos incidunt aliquam at magni, ipsam quisquam id nesciunt! Odit cumque quia saepe recusandae quibusdam quae mollitia? Est porro reprehenderit eum a consequuntur, in ducimus culpa autem. Reiciendis quidem porro maiores illo cupiditate iste earum, corrupti, incidunt deserunt facilis asperiores vel inventore!</p>
            
            <ul >
                <li><Link to="mission">More info regarding our team</Link></li>
                <li><Link to="team">More info regarding our mission</Link></li>
                <li><Link to="feedback">Are you interested on a feedback?</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}