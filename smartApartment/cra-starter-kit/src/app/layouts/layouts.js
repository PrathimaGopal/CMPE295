
import {
    SIDEBAR_ANCHOR_POSITIONS,
    SIDEBAR_SCROLL_TYPES,
    SIDEBAR_STYLES,
    SIDEBAR_VARIANTS,
    SIDEBAR_VIEWS
} from "@jumbo/utils/constants/layout";
import VerticalDefault from "./vertical-default/VerticalDefault";
import SoloPage from "./solo-page/SoloPage";
import HomePageDefault from "./home-page/HomePageDefault";

const LAYOUT_NAMES = {
    VERTICAL_DEFAULT: "vertical-default",
    SOLO_PAGE: "solo-page",
    HOME_PAGE: "home-page",
};

const LAYOUTS = [
  {
    name: LAYOUT_NAMES.VERTICAL_DEFAULT,
    label: "Vertical Default",
    component: VerticalDefault,
    layoutOptions: {
      sidebar: {
        hide: false,
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
        anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
      },
      header: {
        hide: false,
        fixed: true,
      },
      footer: {
        hide: false,
      },
    },
  },
  {
    name: LAYOUT_NAMES.SOLO_PAGE,
    label: "Solo Page",
    component: SoloPage,
    layoutOptions: {
      sidebar: {
        hide: true,
      },
      header: {
        hide: true,
      },
      footer: {
        hide: true,
      },
    },
  },
  {
    name: LAYOUT_NAMES.HOME_PAGE,
    label: "Home Page Default",
    component: HomePageDefault,
    layoutOptions: {
      sidebar: {
        hide: false,
      },
      header: {
        hide: true,
      },
      footer: {
        hide: false,
      },
    },
  },
];

export {LAYOUT_NAMES, LAYOUTS};