import React, { Component, useState } from "react";
import ReactMapGL from "react-map-gl";
import styled from "styled-components";
import { number, string } from "prop-types";

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

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.viewport.latitude !== nextProps.latitude ||
      nextState.viewport.latitude !== nextProps.latitude
    ) {
      this.setState({
        viewport: {
          latitude: nextProps.latitude,
          longitude: nextProps.longitude,
          zoom: 12.2
        }
      });
    }
    // if viewport.lat !== nextprops.lat
    // TODO: set nextprops to state viewport
    // this.setState({})
  }

  render() {
    return (
      <Wrapper>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_API_KEY}
          width="100%"
          height={this.props.height}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </Wrapper>
    );
  }
}

export default Map;

Map.propTypes = {
  latitude: number.isRequired,
  longitude: number.isRequired,
  height: string.isRequired
};

const Wrapper = styled.div`
  .mapbox-improve-map {
    display: none;
  }
  .mapboxgl-ctrl-bottom-right,
  .mapboxgl-ctrl-logo {
    display: none;
  }
`;
