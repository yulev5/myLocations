import { Component } from 'react';
import ReactMapGL from 'react-map-gl';
// http://visgl.github.io/react-map-gl/docs/get-started/get-started

class Map extends Component {
    state = {
        viewport: {
            width: '100%',
            height: '400px',
            latitude: 31.794756,
            longitude: 35.187087,
            zoom: 13
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoieXVsZXYiLCJhIjoiY2tjbWFya29qMWdrNTJzcDV6d3RxYThxYSJ9.7VIoSwYhvB102f9AqtPIzg"
                onViewportChange={(viewport) => this.setState({ viewport })}
                {...this.state.viewport}
            />
        );
    }
}

export default Map;