import React from "react";
import PropTypes from "prop-types";
import { ResponsiveBar as ResponsiveBarM } from '@nivo/bar'

/**
 * @uxpindocurl https://nivo.rocks/bar/
 */
function ResponsiveBar(props) {
  return (
    <ResponsiveBarM {...props}/>
  );
}

ResponsiveBar.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  data: PropTypes.array,
  keys: PropTypes.array,
  indexBy: PropTypes.string,
  margin: PropTypes.object,
  padding: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}
  
export default ResponsiveBar