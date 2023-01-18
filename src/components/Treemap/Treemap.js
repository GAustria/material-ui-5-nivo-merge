import React from "react";
import PropTypes from "prop-types";
import { ResponsiveTreeMap as ResponsiveTreeMapM } from '@nivo/treemap'

/**
 * @uxpindocurl https://nivo.rocks/treemap/
 */
function ResponsiveTreeMap(props) {
  return (
    <ResponsiveTreeMapM {...props}/>
  );
}

ResponsiveTreeMap.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  data: PropTypes.object,
  identity: PropTypes.string,
  value: PropTypes.string,
  valueFormart: PropTypes.string,
  margin: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
}
  
export default ResponsiveTreeMap