import { Loading, Notify } from 'quasar';
import { boot } from 'quasar/wrappers';
import { getIconData } from 'src/utils/helpers';
import {
  iAlertCircle,
  iAlertTriangle,
  iArrowDown,
  iArrowDownLeft,
  iArrowRight,
  iArrowUp,
  iCalendar,
  iCheck,
  iCheckAll,
  iCheckCircle,
  iChevronDown,
  iChevronLeft,
  iChevronRight,
  iChevronsLeft,
  iChevronsRight,
  iChevronUp,
  iCircle,
  iClock,
  iEdit,
  iGradient,
  iInfo,
  iPlay,
  iPlus,
  iPlusSquare,
  iRotateCw,
  iSlidersHorizontal,
  iStar,
  iStyle,
  iUploadCloud,
  iX,
  iXAll,
  iXCircle
} from 'src/utils/icons';

// Notification plugin defaults
Notify.setDefaults({
  timeout: 4000
});

// Loading plugin default
Loading.setDefaults({
  spinnerSize: 48,
  spinnerColor: 'primary'
});

export default boot(({ app }) => {
  // Setting default icons as custom icons
  app.config.globalProperties.$q.iconSet = {
    name: 'custom-icons',
    type: {
      positive: getIconData({ icon: iCheckCircle }),
      negative: getIconData({ icon: iAlertCircle }),
      info: getIconData({ icon: iInfo }),
      warning: getIconData({ icon: iAlertTriangle })
    },
    arrow: {
      up: getIconData({ icon: iArrowUp }),
      right: getIconData({ icon: iArrowRight }),
      down: getIconData({ icon: iArrowDown }),
      left: getIconData({ icon: iArrowDownLeft }),
      dropdown: getIconData({ icon: iChevronDown })
    },
    chevron: {
      left: getIconData({ icon: iChevronLeft }),
      right: getIconData({ icon: iChevronRight })
    },
    pullToRefresh: {
      icon: getIconData({ icon: iRotateCw })
    },
    carousel: {
      left: getIconData({ icon: iChevronLeft }),
      right: getIconData({ icon: iChevronRight }),
      up: getIconData({ icon: iChevronUp }),
      down: getIconData({ icon: iChevronDown }),
      navigationIcon: getIconData({ icon: iCircle, fill: 'currentColor' })
    },
    chip: {
      remove: getIconData({ icon: iX }),
      selected: getIconData({ icon: iCheck })
    },
    colorPicker: {
      spectrum: getIconData({ icon: iGradient }),
      tune: getIconData({ icon: iSlidersHorizontal }),
      palette: getIconData({ icon: iStyle })
    },
    datetime: {
      arrowLeft: getIconData({ icon: iChevronLeft }),
      arrowRight: getIconData({ icon: iChevronRight }),
      now: getIconData({ icon: iClock }),
      today: getIconData({ icon: iCalendar })
    },
    expansionItem: {
      icon: getIconData({ icon: iChevronDown }),
      denseIcon: getIconData({ icon: iChevronDown })
    },
    fab: {
      icon: getIconData({ icon: iPlus }),
      activeIcon: getIconData({ icon: iX })
    },
    field: {
      clear: getIconData({ icon: iXCircle }),
      error: getIconData({ icon: iAlertCircle })
    },
    pagination: {
      first: getIconData({ icon: iChevronsLeft }),
      prev: getIconData({ icon: iChevronLeft }),
      next: getIconData({ icon: iChevronRight }),
      last: getIconData({ icon: iChevronsRight })
    },
    rating: {
      icon: getIconData({ icon: iStar })
    },
    stepper: {
      done: getIconData({ icon: iCheck }),
      active: getIconData({ icon: iEdit }),
      error: getIconData({ icon: iAlertTriangle })
    },
    tabs: {
      left: getIconData({ icon: iChevronLeft }),
      right: getIconData({ icon: iChevronRight }),
      up: getIconData({ icon: iChevronUp }),
      down: getIconData({ icon: iChevronDown })
    },
    table: {
      arrowUp: getIconData({ icon: iArrowUp }),
      warning: getIconData({ icon: iAlertTriangle }),
      firstPage: getIconData({ icon: iChevronsLeft }),
      prevPage: getIconData({ icon: iChevronLeft }),
      nextPage: getIconData({ icon: iChevronRight }),
      lastPage: getIconData({ icon: iChevronsRight })
    },
    tree: {
      icon: getIconData({ icon: iPlay })
    },
    uploader: {
      done: getIconData({ icon: iCheck }),
      clear: getIconData({ icon: iX }),
      add: getIconData({ icon: iPlusSquare }),
      upload: getIconData({ icon: iUploadCloud }),
      removeQueue: getIconData({ icon: iXAll }),
      removeUploaded: getIconData({ icon: iCheckAll })
    },
    rtl: false
  };
});
