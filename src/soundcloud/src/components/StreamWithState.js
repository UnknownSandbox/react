import React from 'react';

class Stream extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.events = {
            likeHandler: (key) => this.setState({[key]: !this.state[key]})
        };
    }

    render() {
        const {tracks = []} = this.props;

        return (
            <div>
                {
                    tracks.map((track, key) => {
                        return (
                            <div className="track" key={key}>
                                {track.title}
                                <button onClick={this.events.likeHandler.bind(this, key)} type="button">
                                    {this.state[key] ? 'Dislike' : 'Like'}
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}

export default Stream;