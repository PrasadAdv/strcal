import "../../assets/stylesheets/application.css";
import "./onboarding.js";

var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
