import './MenuOption.css'

function MenuOption(props) {
    return (
        <a href={props.link}>{props.text}</a>
    )
}

export default MenuOption