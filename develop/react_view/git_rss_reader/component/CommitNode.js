class CommitNode extends React.Component
{
    render() {
        return (
            <ul className="commit_nodes">
                {this.props.data.map(function(data){
                    console.log(data.profile_img);
                    return(
                       <li>
                            <span className="history_node"></span>
                            <img src={data.profile_img.src}/>
                            {data.msg}
                            {data.commit_id.outerText}
                       </li>
                    ); 
                })}
            </ul>
        );
    }
}

export default CommitNode;