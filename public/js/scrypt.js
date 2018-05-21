"use strict";
// const appM = require('./ApplicationModele');
// const eveM = require('./EventsModule');
// const vieM = require('./ViewModule');
 ApplicationModule.fillInformation();
ViewModule.printOnScreen(ApplicationModule.begOfVisiblePosts, ApplicationModule.begOfVisiblePosts + 10);
if (ApplicationModule.userAuthorized === null) {
    ViewModule.createMenuNotForUser();
} else {
    ViewModule.createMenuForUser();
}
ApplicationModule.fillMapHash();
ViewModule.propHash('selectFilter');
EventsModule.initialization();