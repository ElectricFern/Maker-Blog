import content from "../../content/homepage-content";

export default function Card(props){
  console.log(props);
  return(
    <div className="card">
      <div className="card-content">
        <p>{props.content}</p>
      </div>
    </div>
  )
}