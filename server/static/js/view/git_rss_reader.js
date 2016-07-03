function rss_convert(xml) {
    var json_datas = new Array();
    $(xml).find('entry').each(function (index, entry) {
        //$(entry).find('content')[0]
        //details
        var details = $($(entry).find('content').text())[8];
        var commitObject = details.find('.commits.pusher-is-only-committer');
        var json_data = {
            update: $(entry).find('updated').text(),
            title: $(entry).find('title').text(),
            details: {
                profile_img: details.find('.gravatar img src'),
                profile_img: commitObject
            }
        };
        json_datas.push(json_data);
    });
    return json_datas;
}

var RssList = React.createClass({
    displayName: 'RssList',

    render() {
        return React.createElement(
            'ul',
            null,
            this.props.data.map(function (data) {
                console.log(data.details);
                return React.createElement(
                    'div',
                    null,
                    data.details
                );
            })
        );
    }
});

var RssView = React.createClass({
    displayName: 'RssView',

    getInitialState() {
        return { data: [] };
    },
    updateData() {
        $.ajax({
            url: this.props.url,
            dataType: 'xml',
            cache: false,
            success: function (data) {
                this.setState({ data: rss_convert(data) });
            }.bind(this)
        });
    },
    componentDidMount() {
        this.updateData();
    }, // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
    render() {
        return React.createElement(
            'div',
            { className: 'question_view' },
            React.createElement(RssList, { data: this.state.data })
        );
    }
});

ReactDOM.render(React.createElement(RssView, { url: '/git_rss' }), document.querySelector('.content_view'));