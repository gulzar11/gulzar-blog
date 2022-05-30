import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>

        <img className="headerImg" src="https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?cs=srgb&dl=pexels-nancy-bourque-1209978.jpg&fm=jpg" alt="" />
    </div>
  )
}
