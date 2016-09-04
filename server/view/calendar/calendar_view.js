import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class ChatView extends React.Component
{
    render() {
        BigCalendar.momentLocalizer(moment);
        
        let events = [{
            'title' : 'test',
            'allDay' : true,
            'start' : new Date(2016, 9, 13),
            'end' : new Date(2016, 9, 16)
        }];
        
        return (
            <div className="content_view">
                <BigCalendar
                {...this.props}
                events={events}
                />
            </div>
        );
    }
}

export default ChatView;