
import CommitNode from './CommitNode.js'

class RssList extends React.Component
{
    render() {
        return (
            <ul className="rss_reader">
                {this.props.data.map(function(data){
                    //console.log(data);
                    return(
                        <div className="rss_node">
                            <span className="history_group"></span>
                            <span className="history_line"></span>
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