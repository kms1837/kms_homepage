
import CommitNode from './CommitNode.js'

class RssList extends React.Component
{
    render() {
        return (
            <ul className="rss_reader">
                {this.props.data.map(function(data){
                    //console.log(data);
                    return(
                        <div>
                            <b>{data.title}</b> {data.update}
                            <CommitNode data={data.details.commit_msg} />
                        </div>
                    ); 
                })}
            </ul>
        );
    }
}

export default RssList;