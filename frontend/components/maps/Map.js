import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import styled from "styled-components";

import getConfig from "next/config";
const {
  publicRuntimeConfig: { MAPBOX_API_KEY }
} = getConfig();

class Map extends Component {
  state = {
    viewport: {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: 12.2
    }
  };

  render() {
    return (
      <Wrapper>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_API_KEY}
          width="100%"
          height="380px"
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </Wrapper>
    );
  }
}

export default Map;

const Wrapper = styled.div`
  .mapbox-improve-map {
    display: none;
  }
  .mapboxgl-ctrl-bottom-right {
    display: none;
  }
`;
