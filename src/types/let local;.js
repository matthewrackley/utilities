let local;
local = region === GS ? South Sandwich Islands: region === HM ? McDonald Islands: region === UM ? U.S. Minor Outlying Islands:
const saintRegex = /(Saint)(.+)/g
saintRegex.test(name) ? local = name.replace(saintRegex, 'St. $2') : local = name
