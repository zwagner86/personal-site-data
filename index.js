var images = require("./data/images/images");
var companies = require("./data/companies");
var frameworks = require("./data/frameworks");
var languages = require("./data/languages");
var resume = require("./data/resume");

var whatDescStr = "Like I said above, I have skills across the full tech stack but have developed a " +
    "passion for front-end.  There's nothing quite like the gratification of seeing your creations in the " +
    "browser and out on the web!";

module.exports = {
    logos: images.logos,
    profileImage: images.profile,
    companies: companies,
    frameworks: frameworks,
    languages: languages,
    resume: resume,
    whatSectionDescription: whatDescStr
};
