var _ = require('underscore'),
    SHORT = _.template('Languages: jw.org: <%= jworg.total %>, <%= jworg.hasWebContent %> L1+, <%= jworg.isSign %> SLs, <%= jworg.isRTL %> RTL, <%= jworg.isSignWithWeb %> L1+ SLs; jwb: <%= jwb.web.total %>, <%= jwb.web.isSign %> SLs, <%= jwb.appletv.total %> AppleTV, <%= jwb.roku.total %> Roku'),
    LONG = _.template('jw.org has <%= jworg.total %> languages with downloadable content, <%= jworg.hasWebContent %> of which have part of the actual site in their language. This includes <%= jworg.isSign %> sign languages with downloadable content, <%= jworg.isSignWithWeb %> of which have part of the actual site in their language. <%= jworg.isRTL %> of these languages are right-to-left.\n\nJW Broadcasting is available in <%= jwb.web.total %> languages. This includes <%= jwb.web.isSign %> sign languages.');

module.exports = {

   SHORT: SHORT,
   LONG: LONG,

};
