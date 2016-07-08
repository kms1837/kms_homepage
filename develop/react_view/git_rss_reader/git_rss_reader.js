import RssList from './component/RssList.js'

class RssView extends React.Component
{
    constructor()
    {
        super();
        this.state = {data: []};
    }
    
    rss_convert(xml)
    {
        var json_datas = new Array;
        $(xml).find('entry').each(function(index, entry){
            //$(entry).find('content')[0]
            //details
            var details = $($(entry).find('content').text())[8];
            var commitObject = $(details).find('.commits.pusher-is-only-committer');
            var json_data = {
                update : $(entry).find('updated').text(),
                title  : $(entry).find('title').text(),
                details : {
                    profile_img : $(details).find('.gravatar img'),
                    commit_msg : []
                }
            }
            
            $(commitObject).find('li').each(function(index, object){
                //console.log($(object).find('.message blockquote').text());
                if(!$(object).attr('class')) {
                    var commit_msg_from = {
                        profile_img : $(object).find('span img')[0],
                        commit_id : $(object).find('code a')[0],
                        msg : $(object).find('.message blockquote').text()
                    };
                    json_data.details.commit_msg.push(commit_msg_from);    
                }
            });
            
            json_datas.push(json_data);
        });
        return json_datas;
    }
    
    updateData() {
        $.ajax({
          url: this.props.url,
          dataType: 'xml',
          cache: false,
          success: function(data) {
            this.setState({data: this.rss_convert(data)});
          }.bind(this)
        });
    }
    
    componentDidMount () {
        this.updateData();
    } // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
    render () {
      return(
          <div className="content_view">
            <RssList data={this.state.data}/>
          </div>
      );
    }
}

ReactDOM.render(
  <RssView url='/git_rss'/>,
  document.querySelector('.content')
);