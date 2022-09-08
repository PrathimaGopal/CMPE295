import VerticalDefault from "../../layouts/vertical-default/VerticalDefault";
import VerticalAdmin from "../../layouts/vertical-admin/VerticalAdmin";
import SoloPage from "../../layouts/solo-page/SoloPage";

export const LAYOUT_NAMES = {
  VERTICAL_DEFAULT: "vertical-default",
  VERTICAL_ADMIN: "vertical-admin",
  SOLO_PAGE: "solo-page",
};

export const LAYOUTS = [
  {
    name: LAYOUT_NAMES.VERTICAL_DEFAULT,
    label: "Vertical Default",
    component: VerticalDefault,
  },
  {
    name: LAYOUT_NAMES.VERTICAL_ADMIN,
    label: "Vertical Admin",
    component: VerticalAdmin,
  },
  {
    name: LAYOUT_NAMES.SOLO_PAGE,
    label: "Solo Page",
    component: SoloPage,
  },
];
