import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZ3VpZG92ZHJpZXQiLCJhIjoiY2p3ZGZxdDh6MDdjYjQzcGIxZmRhZHdtdSJ9._CHi3885MJVa8AY9fsIgJw";

class Map extends Component {
  state = {
    viewport: {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: 12.2
    }
  };

  mapRef = React.createRef();

  render() {
    const { viewport } = this.state;

    return (
      <div style={{ height: "380px" }}>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          width="100%"
          height="380px"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}

export default Map;
