import content from "../../content/blog-content";

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