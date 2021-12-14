import React from 'react';
import { Map, Marker, GoogleApiWrapper as GoogleMapComponent } from 'google-maps-react';

function GoogleMap(props) {

    let mapFocuseOn = {
        lat: 31.794756,
        lng: 35.187087
    }
    
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    // if (props.jerusalem) {
    //     let mapFocuseOn ={
    //         lat: 31.794756,
    //         lng: 35.187087
    //     }
    // }

    return (
        <div>
            <Map
                style={mapStyles}
                google={props.google}
                initialCenter={mapFocuseOn}
                zoom={17}
            />
        </div>

    );
}

export default GoogleMapComponent({
    apiKey: ('AIzaSyAwx9BH3ZZ7HiAb2Kk9OhiaU1a9NPtvIso')
})(GoogleMap);